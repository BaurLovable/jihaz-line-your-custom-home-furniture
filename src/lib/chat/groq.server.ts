import Groq from "groq-sdk";
import { SYSTEM_PROMPT } from "./systemPrompt";

export interface ChatMessageInput {
  role: "user" | "assistant";
  content: string;
}

export function buildChatContext(history: ChatMessageInput[], latestMessage: string) {
  // Limit history to last 6 messages and sanitize
  const cleanHistory = (history || [])
    .slice(-6)
    .filter(
      (msg) =>
        (msg.role === "user" || msg.role === "assistant") &&
        typeof msg.content === "string" &&
        msg.content.trim().length > 0,
    )
    .map((msg) => ({
      role: msg.role as "user" | "assistant",
      content: msg.content.trim().slice(0, 2000),
    }));

  return [
    { role: "system" as const, content: SYSTEM_PROMPT },
    ...cleanHistory,
    { role: "user" as const, content: latestMessage.trim().slice(0, 2000) },
  ];
}

export async function getGroqChatResponse(
  message: string,
  history: ChatMessageInput[] = [],
): Promise<{ success: boolean; text?: string; error?: string }> {
  const apiKey = process.env["GROQ_API_KEY"];

  if (!apiKey || apiKey.trim() === "") {
    console.error("[Groq Server Error] GROQ_API_KEY environment variable is not configured.");
    return {
      success: false,
      error: "Конфигурация ИИ не найдена. Пожалуйста, свяжитесь с поддержкой.",
    };
  }

  const model = process.env["GROQ_MODEL"] ?? "openai/gpt-oss-20b";

  try {
    const groq = new Groq({ apiKey });

    const messages = buildChatContext(history, message);

    const completion = await groq.chat.completions.create({
      messages,
      model,
      temperature: 0.2,
      max_completion_tokens: 1024,
    });

    const reply = completion.choices[0]?.message?.content;

    if (!reply) {
      return {
        success: false,
        error: "Не удалось получить ответ от модели.",
      };
    }

    return {
      success: true,
      text: reply.trim(),
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    // Log error safely on the server without exposing secrets
    console.error("[Groq Service Exception]:", errorMessage);

    return {
      success: false,
      error: "Ошибка обработки запроса к ИИ серверу.",
    };
  }
}

import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { getGroqChatResponse } from "@/lib/chat/groq.server";

const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().trim().min(1).max(2000),
});

const chatRequestSchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, "Сообщение не должно быть пустым")
    .max(2000, "Сообщение слишком длинное"),
  history: z.array(chatMessageSchema).max(10).optional().default([]),
});

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          let body: unknown;
          try {
            body = await request.json();
          } catch {
            return Response.json({ error: "Некорректный JSON в теле запроса." }, { status: 400 });
          }

          const parseResult = chatRequestSchema.safeParse(body);

          if (!parseResult.success) {
            return Response.json(
              {
                error: "Некорректный формат запроса. Проверьте вводимые данные.",
              },
              { status: 400 },
            );
          }

          const { message, history } = parseResult.data;

          const result = await getGroqChatResponse(message, history);

          if (!result.success || !result.text) {
            return Response.json(
              {
                error:
                  "Сейчас не удалось получить ответ. Попробуйте ещё раз или свяжитесь с нами через WhatsApp.",
              },
              { status: 500 },
            );
          }

          return Response.json({
            message: result.text,
          });
        } catch (err: unknown) {
          console.error("[API /api/chat Error]:", err);
          return Response.json(
            {
              error:
                "Сейчас не удалось получить ответ. Попробуйте ещё раз или свяжитесь с нами через WhatsApp.",
            },
            { status: 500 },
          );
        }
      },
    },
  },
});

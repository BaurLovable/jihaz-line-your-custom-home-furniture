import React from "react";

function parseInline(text: string, isUser: boolean = false): React.ReactNode[] {
  if (!text) return [];

  // Match:
  // Group 1-3: Markdown link [label](url)
  // Group 4: Standalone URL (excluding trailing punctuation and parens)
  // Group 5-6: Bold **text**
  // Group 7-8: Italic *text*
  const TOKEN_REGEX =
    /(\[([^\]]+)\]\((https?:\/\/[^\s)]+)\))|(https?:\/\/[^\s<>()]+[^\s<>()\.,;:!?])|(\*\*([^*]+)\*\*)|(\*([^*]+)\*)/g;

  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = TOKEN_REGEX.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(text.slice(lastIndex, match.index));
    }

    const [
      fullMatch,
      _mdLink,
      mdLabel,
      mdUrl,
      rawUrl,
      _boldFull,
      boldText,
      _italicFull,
      italicText,
    ] = match;

    if (mdLabel && mdUrl) {
      result.push(
        <a
          key={`link-${match.index}`}
          href={mdUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`underline font-medium transition-colors ${
            isUser
              ? "text-amber-300 hover:text-amber-200"
              : "text-amber-600 hover:text-amber-700"
          }`}
        >
          {parseInline(mdLabel, isUser)}
        </a>,
      );
    } else if (rawUrl) {
      result.push(
        <a
          key={`rawurl-${match.index}`}
          href={rawUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`underline font-medium break-all transition-colors ${
            isUser
              ? "text-amber-300 hover:text-amber-200"
              : "text-amber-600 hover:text-amber-700"
          }`}
        >
          {rawUrl}
        </a>,
      );
    } else if (boldText !== undefined) {
      result.push(
        <strong
          key={`bold-${match.index}`}
          className={`font-semibold ${isUser ? "text-white" : "text-slate-900"}`}
        >
          {parseInline(boldText, isUser)}
        </strong>,
      );
    } else if (italicText !== undefined) {
      result.push(
        <em key={`italic-${match.index}`} className="italic">
          {parseInline(italicText, isUser)}
        </em>,
      );
    } else {
      result.push(fullMatch);
    }

    lastIndex = TOKEN_REGEX.lastIndex;
  }

  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return result;
}

interface MarkdownTextProps {
  content: string;
  isUser?: boolean;
}

export function MarkdownText({ content, isUser = false }: MarkdownTextProps) {
  if (!content) return null;

  const lines = content.split("\n");

  return (
    <div className="space-y-1">
      {lines.map((line, lineIdx) => {
        const trimmed = line.trim();

        if (!trimmed) {
          return <div key={lineIdx} className="h-1.5" />;
        }

        // Headings: e.g. "### Title", "## Title"
        const headingMatch = trimmed.match(/^(#{1,6})\s+(.*)$/);
        if (headingMatch) {
          const headingText = headingMatch[2];
          return (
            <div
              key={lineIdx}
              className={`font-bold my-1 ${
                isUser ? "text-white" : "text-slate-900"
              }`}
            >
              {parseInline(headingText, isUser)}
            </div>
          );
        }

        // Numbered list item: e.g. "1. ", "2. "
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
        if (numMatch) {
          const num = numMatch[1];
          const itemText = numMatch[2];
          return (
            <div key={lineIdx} className="flex items-start gap-1.5 my-0.5">
              <span
                className={`font-semibold shrink-0 select-none ${
                  isUser ? "text-amber-300" : "text-amber-600"
                }`}
              >
                {num}.
              </span>
              <div className="flex-1 min-w-0">{parseInline(itemText, isUser)}</div>
            </div>
          );
        }

        // Bullet list item: e.g. "- ", "* ", "• "
        const bulletMatch = trimmed.match(/^[-*•]\s+(.*)$/);
        if (bulletMatch) {
          const itemText = bulletMatch[1];
          return (
            <div key={lineIdx} className="flex items-start gap-1.5 my-0.5">
              <span
                className={`font-bold shrink-0 select-none ${
                  isUser ? "text-amber-300" : "text-amber-600"
                }`}
              >
                •
              </span>
              <div className="flex-1 min-w-0">{parseInline(itemText, isUser)}</div>
            </div>
          );
        }

        // Standard paragraph line
        return (
          <p key={lineIdx} className="leading-relaxed">
            {parseInline(line, isUser)}
          </p>
        );
      })}
    </div>
  );
}

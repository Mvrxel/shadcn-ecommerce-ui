"use client";

import { useState, useEffect } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { highlight } from "sugar-high";
import * as prettier from "prettier/standalone";
import * as parserBabel from "prettier/parser-babel";
import * as parserTypescript from "prettier/parser-typescript";
import * as parserHtml from "prettier/parser-html";
import estree from "prettier/plugins/estree";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

const getParser = (language: string) => {
  switch (language) {
    case "tsx":
    case "ts":
      return parserTypescript;
    case "jsx":
    case "js":
      return parserBabel;
    case "html":
      return parserHtml;
    default:
      return parserBabel;
  }
};

export function CodeBlock({
  code,
  language = "tsx",
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [formattedCode, setFormattedCode] = useState(code);

  useEffect(() => {
    const formatCode = async () => {
      try {
        const parser = getParser(language);
        const formatted = await prettier.format(code, {
          parser:
            language === "tsx" || language === "ts" ? "typescript" : language,
          plugins: [estree, parser],
          semi: true,
          singleQuote: false,
          tabWidth: 2,
          trailingComma: "es5",
          printWidth: 80,
        });
        setFormattedCode(formatted);
      } catch (error) {
        console.error("Error formatting code:", error);
        setFormattedCode(code);
      }
    };

    formatCode();
  }, [code, language]);

  const html = highlight(formattedCode);
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(formattedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn("relative rounded-md bg-muted dark:bg-muted/50", className)}
    >
      <div className="flex items-center justify-between px-4 py-2">
        <div className="text-xs text-muted-foreground">{language}</div>
        <button
          onClick={copyToClipboard}
          className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/20"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          <span className="sr-only">Copy code</span>
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm">
        <code
          className="dark:text-gray-100"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    </div>
  );
}

"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function CopyInput({ copyText }: { copyText: string }) {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const npmCopyText = `npx shadcn@latest add ${copyText}`;
  const yarnCopyText = `npx shadcn@latest add ${copyText}`;
  const pnpmCopyText = `pnpm dlx shadcn@latest add ${copyText}`;
  const bunCopyText = `bunx --bun shadcn@latest add ${copyText}`;

  const handleCopy = (text: string, tab: string) => {
    setCopiedTab(tab);
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopiedTab(null), 2000);
  };

  return (
    <div className="w-full max-w-2xl">
      <Tabs defaultValue="npm" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="npm">npm</TabsTrigger>
          <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          <TabsTrigger value="bun">bun</TabsTrigger>
          <TabsTrigger value="yarn">yarn</TabsTrigger>
        </TabsList>
        <TabsContent value="npm" className="mt-4 relative">
          <div className="flex items-center p-3 rounded-lg border bg-muted/50">
            <span className="font-mono text-sm">{npmCopyText}</span>
            <button
              onClick={() => handleCopy(npmCopyText, "npm")}
              className={cn(
                "absolute top-2 right-2 p-2 rounded-md transition-colors",
                copiedTab === "npm"
                  ? "bg-green-500/10 text-green-500"
                  : "bg-muted hover:bg-muted-foreground/10"
              )}
            >
              {copiedTab === "npm" ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </TabsContent>
        <TabsContent value="pnpm" className="mt-4 relative">
          <div className="flex items-center p-3 rounded-lg border bg-muted/50">
            <span className="font-mono text-sm">{pnpmCopyText}</span>
            <button
              onClick={() => handleCopy(pnpmCopyText, "pnpm")}
              className={cn(
                "absolute top-2 right-2 p-2 rounded-md transition-colors",
                copiedTab === "pnpm"
                  ? "bg-green-500/10 text-green-500"
                  : "bg-muted hover:bg-muted-foreground/10"
              )}
            >
              {copiedTab === "pnpm" ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </TabsContent>
        <TabsContent value="bun" className="mt-4 relative">
          <div className="flex items-center p-3 rounded-lg border bg-muted/50">
            <span className="font-mono text-sm">{bunCopyText}</span>
            <button
              onClick={() => handleCopy(bunCopyText, "bun")}
              className={cn(
                "absolute top-2 right-2 p-2 rounded-md transition-colors",
                copiedTab === "bun"
                  ? "bg-green-500/10 text-green-500"
                  : "bg-muted hover:bg-muted-foreground/10"
              )}
            >
              {copiedTab === "bun" ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </TabsContent>
        <TabsContent value="yarn" className="mt-4 relative">
          <div className="flex items-center p-3 rounded-lg border bg-muted/50">
            <span className="font-mono text-sm">{yarnCopyText}</span>
            <button
              onClick={() => handleCopy(yarnCopyText, "yarn")}
              className={cn(
                "absolute top-2 right-2 p-2 rounded-md transition-colors",
                copiedTab === "yarn"
                  ? "bg-green-500/10 text-green-500"
                  : "bg-muted hover:bg-muted-foreground/10"
              )}
            >
              {copiedTab === "yarn" ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

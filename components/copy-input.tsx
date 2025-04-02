"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function CopyInput({ copyText }: { copyText: string }) {
  const [copied, setCopied] = useState(false);
  const npmCopyText = `npx shadcn@latest add ${copyText}`;
  const yarnCopyText = `npx shadcn@latest add ${copyText}`;
  const pnpmCopyText = `pnpm dlx shadcn@latest add ${copyText}`;
  const bunCopyText = `bunx --bun shadcn@latest add ${copyText}`;

  return (
    <div>
      <Tabs defaultValue="npm">
        <TabsList>
          <TabsTrigger value="npm">npm</TabsTrigger>
          <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          <TabsTrigger value="bun">bun</TabsTrigger>
          <TabsTrigger value="yarn">yarn</TabsTrigger>
        </TabsList>
        <TabsContent value="npm">
          <div
            className="flex border rounded-md gap-2 p-2 items-center cursor-pointer hover:bg-muted transition-all bg-muted"
            onClick={() => {
              setCopied(true);
              navigator.clipboard.writeText(npmCopyText);
              toast.success("Copied to clipboard");
            }}
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span>{npmCopyText}</span>
          </div>
        </TabsContent>
        <TabsContent value="pnpm">
          <div
            className="flex border rounded-md gap-2 p-2 items-center cursor-pointer hover:bg-muted transition-all bg-muted"
            onClick={() => {
              setCopied(true);
              navigator.clipboard.writeText(pnpmCopyText);
              toast.success("Copied to clipboard");
            }}
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span>{pnpmCopyText}</span>
          </div>
        </TabsContent>
        <TabsContent value="bun">
          <div
            className="flex border rounded-md gap-2 p-2 items-center cursor-pointer hover:bg-muted transition-all bg-muted"
            onClick={() => {
              setCopied(true);
              navigator.clipboard.writeText(bunCopyText);
              toast.success("Copied to clipboard");
            }}
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span>{bunCopyText}</span>
          </div>
        </TabsContent>
        <TabsContent value="yarn">
          <div
            className="flex border rounded-md gap-2 p-2 items-center cursor-pointer hover:bg-muted transition-all bg-muted"
            onClick={() => {
              setCopied(true);
              navigator.clipboard.writeText(yarnCopyText);
              toast.success("Copied to clipboard");
            }}
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span>{yarnCopyText}</span>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

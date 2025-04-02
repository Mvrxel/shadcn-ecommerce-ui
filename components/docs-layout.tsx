"use client";

import type React from "react";

import { DocsSidebar } from "@/components/docs-sidebar";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <DocsSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-6">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-6" />
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8">
              GitHub
            </Button>
            <ModeToggle />
          </div>
        </header>
        <main className="flex-1 overflow-auto w-[100%]">
          <div className="container max-w-4xl py-6 md:py-12">{children}</div>
        </main>
      </SidebarInset>
    </div>
  );
}

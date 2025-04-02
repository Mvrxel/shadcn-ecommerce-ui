import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";

interface ComponentPreviewProps {
  preview: React.ReactNode;
  code: string;
  language?: string;
}

export function ComponentPreview({
  preview,
  code,
  language = "tsx",
}: ComponentPreviewProps) {
  return (
    <div>
      <Tabs defaultValue="preview" className="mt-6">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="rounded-md border p-6">
          {preview}
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={code} language={language} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

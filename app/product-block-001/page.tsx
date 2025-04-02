"use server";
import { ComponentPreview } from "@/components/component-preview";
import { Separator } from "@/components/ui/separator";
import ProductBlock001 from "@/components/ui/product-block-001";
import { promises as fs } from "fs";
import path from "path";
export default async function ReviewsPage() {
  const code = await fs.readFile(
    path.join(process.cwd(), "app", "product-block-001", "code-block-raw.txt"),
    "utf-8"
  );
  return (
    <>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Product Block</h2>
            <p className="text-muted-foreground">
              A product block component that displays a product image, name,
              price, and a button to add to cart.
            </p>
            <Separator />
            <ComponentPreview preview={<ProductBlock001 />} code={code} />
          </div>
        </div>
      </div>
    </>
  );
}

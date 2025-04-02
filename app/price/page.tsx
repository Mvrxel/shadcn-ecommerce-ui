import { ComponentPreview } from "@/components/component-preview";
import { Separator } from "@/components/ui/separator";
import { CopyInput } from "../../components/copy-input";
import { Price } from "../../components/ui/price";

export default function PricePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Price</h2>
          <p className="text-muted-foreground">
            A component that displays a price with optional original price and
            discount badge.
          </p>
          <Separator />
          <h2 className="text-xl font-semibold">Install</h2>
          <CopyInput copyText="https://shadcn-ecommerce-ui.vercel.app/r/price.json" />
          <Separator />
          <h2 className="text-xl font-semibold">Default Price</h2>
          <ComponentPreview
            preview={<Price price={99.99} />}
            code={`
                import { Price } from "@/components/ui/price"

                export default function PricePage() {
                  return (
                    <div>
                      <Price price={99.99} />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">Price with Original Price</h2>
          <ComponentPreview
            preview={<Price price={79.99} originalPrice={99.99} />}
            code={`
                import { Price } from "@/components/ui/price"

                export default function PricePage() {
                  return (
                    <div>
                      <Price price={79.99} originalPrice={99.99} />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">Price with Custom Currency</h2>
          <ComponentPreview
            preview={<Price price={79.99} currency="€" />}
            code={`
                import { Price } from "@/components/ui/price"

                export default function PricePage() {
                  return (
                    <div>
                      <Price price={79.99} currency="€" />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">Small Price</h2>
          <ComponentPreview
            preview={<Price price={79.99} size="sm" />}
            code={`
                import { Price } from "@/components/ui/price"

                export default function PricePage() {
                  return (
                    <div>
                      <Price price={79.99} size="sm" />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">Large Price</h2>
          <ComponentPreview
            preview={<Price price={79.99} size="lg" />}
            code={`
                import { Price } from "@/components/ui/price"

                export default function PricePage() {
                  return (
                    <div>
                      <Price price={79.99} size="lg" />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">Extra Large Price</h2>
          <ComponentPreview
            preview={<Price price={79.99} size="xl" />}
            code={`
                import { Price } from "@/components/ui/price"

                export default function PricePage() {
                  return (
                    <div>
                      <Price price={79.99} size="xl" />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">2XL Price</h2>
          <ComponentPreview
            preview={<Price price={79.99} size="2xl" />}
            code={`
                import { Price } from "@/components/ui/price"

                export default function PricePage() {
                  return (
                    <div>
                      <Price price={79.99} size="2xl" />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">
            Price with Custom Discount Percentage
          </h2>
          <ComponentPreview
            preview={
              <Price
                price={79.99}
                originalPrice={99.99}
                discountPercentage={20}
              />
            }
            code={`
                import { Price } from "@/components/ui/price"

                export default function PricePage() {
                  return (
                    <div>
                      <Price price={79.99} originalPrice={99.99} discountPercentage={20} />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">
            Price without Discount Badge
          </h2>
          <ComponentPreview
            preview={
              <Price price={79.99} originalPrice={99.99} showBadge={false} />
            }
            code={`
                import { Price } from "@/components/ui/price"

                export default function PricePage() {
                  return (
                    <div>
                      <Price price={79.99} originalPrice={99.99} showBadge={false} />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">Muted Price</h2>
          <ComponentPreview
            preview={<Price price={79.99} variant="muted" />}
            code={`
                import { Price } from "@/components/ui/price"

                export default function PricePage() {
                  return (
                    <div>
                      <Price price={79.99} variant="muted" />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">Primary Price</h2>
          <ComponentPreview
            preview={<Price price={79.99} variant="primary" />}
            code={`
                import { Price } from "@/components/ui/price"

                export default function PricePage() {
                  return (
                    <div>
                      <Price price={79.99} variant="primary" />
                    </div>
                  )
                }
              `}
          />
        </div>
      </div>
    </div>
  );
}

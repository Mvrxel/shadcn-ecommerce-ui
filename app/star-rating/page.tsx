import { ComponentPreview } from "@/components/component-preview";
import { Separator } from "@/components/ui/separator";
import { CopyInput } from "@/components/copy-input";
import { StarRating } from "@/registry/ui/star-rating";

export default function ReviewsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Star Rating</h2>
          <p className="text-muted-foreground">
            A component that displays a star rating and a review count.
          </p>
          <Separator />
          <h2 className="text-xl font-semibold">Install</h2>
          <CopyInput copyText="https://shadcn-ecommerce-ui.vercel.app/r/star-rating.json" />
          <Separator />
          <h2 className="text-xl font-semibold">Default Star Rating</h2>
          <ComponentPreview
            preview={<StarRating rating={3} />}
            code={`
                import { StarRating } from "@/components/star-rating"

                export default function ReviewsPage() {
                  return (
                    <div>
                      <StarRating rating={3} />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">Half Star Rating</h2>
          <ComponentPreview
            preview={<StarRating rating={3.5} />}
            code={`
                import { StarRating } from "@/components/star-rating"

                export default function ReviewsPage() {
                  return (
                    <div>
                      <StarRating rating={3.5} />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">
            Star Rating with Review Count
          </h2>
          <ComponentPreview
            preview={<StarRating rating={4.5} reviewCount={10} />}
            code={`
                import { StarRating } from "@/components/star-rating"

                export default function ReviewsPage() {
                  return (
                    <div>
                      <StarRating rating={4.5} reviewCount={10} />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">Small Star Rating</h2>
          <ComponentPreview
            preview={<StarRating rating={3.5} size="sm" />}
            code={`
                import { StarRating } from "@/components/star-rating"

                export default function ReviewsPage() {
                  return (
                    <div>
                      <StarRating rating={3.5} size="sm" />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">Large Star Rating</h2>
          <ComponentPreview
            preview={<StarRating rating={3.5} size="lg" />}
            code={`
                import { StarRating } from "@/components/star-rating"

                export default function ReviewsPage() {
                  return (
                    <div>
                      <StarRating rating={3.5} size="lg" />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">Without Empty Star</h2>
          <ComponentPreview
            preview={<StarRating rating={3} showEmpty={false} />}
            code={`
                import { StarRating } from "@/components/star-rating"

                export default function ReviewsPage() {
                  return (
                    <div>
                      <StarRating rating={3} showEmpty={false} />
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

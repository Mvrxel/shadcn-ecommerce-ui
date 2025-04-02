"use client";
import { ComponentPreview } from "@/components/component-preview";
import { Separator } from "@/components/ui/separator";
import { CopyInput } from "../../components/copy-input";
import { Like } from "../../components/ui/like";

export default function LikesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Product Likes</h2>
          <p className="text-muted-foreground">
            A component that displays a heart icon with a like count and
            supports interactive liking functionality.
          </p>
          <Separator />
          <h2 className="text-xl font-semibold">Install</h2>
          <CopyInput copyText="like" />
          <Separator />
          <h2 className="text-xl font-semibold">Default Like</h2>
          <ComponentPreview
            preview={<Like count={42} />}
            code={`
                import { Like } from "@/components/ui/like"

                export default function LikesPage() {
                  return (
                    <div>
                      <Like count={42} />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">Liked State</h2>
          <ComponentPreview
            preview={<Like count={42} isLiked={true} />}
            code={`
                import { Like } from "@/components/ui/like"

                export default function LikesPage() {
                  return (
                    <div>
                      <Like count={42} isLiked={true} />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">Small Like</h2>
          <ComponentPreview
            preview={<Like count={42} size="sm" />}
            code={`
                import { Like } from "@/components/ui/like"

                export default function LikesPage() {
                  return (
                    <div>
                      <Like count={42} size="sm" />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">Large Like</h2>
          <ComponentPreview
            preview={<Like count={42} size="lg" />}
            code={`
                import { Like } from "@/components/ui/like"

                export default function LikesPage() {
                  return (
                    <div>
                      <Like count={42} size="lg" />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">Muted Variant</h2>
          <ComponentPreview
            preview={<Like count={42} variant="muted" />}
            code={`
                import { Like } from "@/components/ui/like"

                export default function LikesPage() {
                  return (
                    <div>
                      <Like count={42} variant="muted" />
                    </div>
                  )
                }
              `}
          />
          <Separator />
          <h2 className="text-xl font-semibold">Interactive Like</h2>
          <ComponentPreview
            preview={
              <Like count={42} isLiked={true} onLike={() => alert("Liked!")} />
            }
            code={`
                import { Like } from "@/components/ui/like"

                export default function LikesPage() {
                  return (
                    <div>
                      <Like 
                        count={42} 
                        isLiked={true} 
                        onLike={() => alert("Liked!")} 
                      />
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

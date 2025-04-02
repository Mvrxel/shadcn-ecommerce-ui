import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

const likeVariants = cva("flex items-center gap-1", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

export interface LikeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof likeVariants> {
  count?: number;
  isLiked?: boolean;
  onLike?: () => void;
}

const Like = React.forwardRef<HTMLDivElement, LikeProps>(
  (
    { className, size, variant, count, isLiked = false, onLike, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(likeVariants({ size, variant }), className)}
        onClick={onLike}
        role="button"
        tabIndex={0}
        {...props}
      >
        <Heart
          className={cn(
            isLiked ? "fill-primary text-primary" : "text-muted-foreground",
            getHeartSize(size)
          )}
        />
        {typeof count !== "undefined" && (
          <span
            className={cn(
              "ml-1 font-medium",
              size === "sm"
                ? "text-xs"
                : size === "lg"
                  ? "text-base"
                  : "text-sm",
              variant === "muted" ? "text-muted-foreground" : ""
            )}
          >
            {count}
          </span>
        )}
      </div>
    );
  }
);
Like.displayName = "Like";

function getHeartSize(size: "sm" | "md" | "lg" | null | undefined) {
  switch (size) {
    case "sm":
      return "h-3.5 w-3.5";
    case "lg":
      return "h-5 w-5";
    default:
      return "h-4 w-4";
  }
}

export { Like };

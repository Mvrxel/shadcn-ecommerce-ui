import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const starRatingVariants = cva("flex items-center gap-1", {
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

export interface StarRatingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof starRatingVariants> {
  rating: number;
  maxRating?: number;
  reviewCount?: number;
  showEmpty?: boolean;
}

const StarRating = React.forwardRef<HTMLDivElement, StarRatingProps>(
  (
    {
      className,
      size,
      variant,
      rating,
      maxRating = 5,
      reviewCount,
      showEmpty = true,
      ...props
    },
    ref
  ) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = maxRating - filledStars - (hasHalfStar ? 1 : 0);

    return (
      <div
        ref={ref}
        className={cn(starRatingVariants({ size, variant }), className)}
        {...props}
      >
        {Array.from({ length: filledStars }).map((_, i) => (
          <Star
            key={`filled-${i}`}
            className={cn("fill-primary text-primary", getStarSize(size))}
          />
        ))}

        {hasHalfStar && (
          <div className="relative">
            <Star className={cn("text-muted-foreground", getStarSize(size))} />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: "50%" }}
            >
              <Star
                className={cn("fill-primary text-primary", getStarSize(size))}
              />
            </div>
          </div>
        )}

        {showEmpty &&
          Array.from({ length: emptyStars }).map((_, i) => (
            <Star
              key={`empty-${i}`}
              className={cn("text-muted-foreground", getStarSize(size))}
            />
          ))}

        {typeof reviewCount !== "undefined" && (
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
            ({reviewCount})
          </span>
        )}
      </div>
    );
  }
);
StarRating.displayName = "StarRating";

function getStarSize(size: "sm" | "md" | "lg" | null | undefined) {
  switch (size) {
    case "sm":
      return "h-3.5 w-3.5";
    case "lg":
      return "h-5 w-5";
    default:
      return "h-4 w-4";
  }
}

export { StarRating };

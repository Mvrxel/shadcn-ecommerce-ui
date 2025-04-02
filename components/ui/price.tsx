import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const priceVariants = cva("flex items-center gap-2", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

export interface PriceProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof priceVariants> {
  price: number | string;
  currency?: string;
  originalPrice?: number | string;
  discountPercentage?: number;
  showBadge?: boolean;
}

const Price = React.forwardRef<HTMLDivElement, PriceProps>(
  (
    {
      className,
      size,
      variant,
      price,
      currency = "$",
      originalPrice,
      discountPercentage,
      showBadge = true,
      ...props
    },
    ref
  ) => {
    // Calculate discount percentage if not provided but original price exists
    const discount =
      discountPercentage ??
      (originalPrice
        ? Math.round(
            ((Number(originalPrice) - Number(price)) / Number(originalPrice)) *
              100
          )
        : undefined);

    return (
      <div
        ref={ref}
        className={cn(priceVariants({ size, variant }), className)}
        {...props}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "font-bold",
                size === "sm"
                  ? "text-sm"
                  : size === "lg"
                    ? "text-lg"
                    : size === "xl"
                      ? "text-xl"
                      : size === "2xl"
                        ? "text-2xl"
                        : "text-base"
              )}
            >
              {currency}
              {typeof price === "number" ? price.toFixed(2) : price}
            </span>

            {originalPrice && (
              <span
                className={cn(
                  "line-through text-muted-foreground",
                  size === "sm"
                    ? "text-xs"
                    : size === "lg"
                      ? "text-sm"
                      : size === "xl"
                        ? "text-base"
                        : size === "2xl"
                          ? "text-lg"
                          : "text-xs"
                )}
              >
                {currency}
                {typeof originalPrice === "number"
                  ? originalPrice.toFixed(2)
                  : originalPrice}
              </span>
            )}

            {discount && discount > 0 && showBadge && (
              <span
                className={cn(
                  "rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-300",
                  size === "sm"
                    ? "text-[10px] px-1.5"
                    : size === "lg" || size === "xl" || size === "2xl"
                      ? "text-xs"
                      : "text-[10px]"
                )}
              >
                -{discount}%
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
);
Price.displayName = "Price";

export { Price };

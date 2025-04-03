import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cartVariants = cva("relative w-full rounded-lg border p-4", {
  variants: {
    variant: {
      default: "bg-background text-foreground",
      compact: "bg-background text-foreground p-3",
      bordered: "bg-background text-foreground border-2",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Cart = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cartVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cartVariants({ variant }), className)}
    {...props}
  />
));
Cart.displayName = "Cart";

const CartHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mb-4 flex items-center justify-between", className)}
    {...props}
  />
));
CartHeader.displayName = "CartHeader";

const CartTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
CartTitle.displayName = "CartTitle";

const CartItems = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-3 mt-4", className)} {...props} />
));
CartItems.displayName = "CartItems";

const cartItemVariants = cva("flex items-center gap-3 rounded-md border p-3", {
  variants: {
    variant: {
      default: "bg-background",
      selected: "bg-muted",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface CartItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cartItemVariants> {}

const CartItem = React.forwardRef<HTMLDivElement, CartItemProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cartItemVariants({ variant }), className)}
      {...props}
    />
  )
);
CartItem.displayName = "CartItem";

const CartItemImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border",
      className
    )}
    {...props}
  />
));
CartItemImage.displayName = "CartItemImage";

const CartItemContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-1 flex-col p-2", className)}
    {...props}
  />
));
CartItemContent.displayName = "CartItemContent";

const CartItemTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4 ref={ref} className={cn("text-sm font-medium", className)} {...props} />
));
CartItemTitle.displayName = "CartItemTitle";

const CartItemDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs text-muted-foreground", className)}
    {...props}
  />
));
CartItemDescription.displayName = "CartItemDescription";

const CartItemPrice = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm font-medium", className)} {...props} />
));
CartItemPrice.displayName = "CartItemPrice";

const CartItemQuantity = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center space-x-1", className)}
    {...props}
  />
));
CartItemQuantity.displayName = "CartItemQuantity";

const CartSummary = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-4 space-y-3 rounded-md border p-4", className)}
    {...props}
  />
));
CartSummary.displayName = "CartSummary";

const CartSummaryItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-between", className)}
    {...props}
  />
));
CartSummaryItem.displayName = "CartSummaryItem";

const CartSummaryLabel = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CartSummaryLabel.displayName = "CartSummaryLabel";

const CartSummaryValue = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm font-medium", className)} {...props} />
));
CartSummaryValue.displayName = "CartSummaryValue";

const CartFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mt-4", className)} {...props} />
));
CartFooter.displayName = "CartFooter";

export {
  Cart,
  CartHeader,
  CartTitle,
  CartItems,
  CartItem,
  CartItemImage,
  CartItemContent,
  CartItemTitle,
  CartItemDescription,
  CartItemPrice,
  CartItemQuantity,
  CartSummary,
  CartSummaryItem,
  CartSummaryLabel,
  CartSummaryValue,
  CartFooter,
};

"use client";

import { Star, ShoppingCart, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ProductCard,
  ProductCardActions,
  ProductCardBadge,
  ProductCardDescription,
  ProductCardImage,
  ProductCardPrice,
  ProductCardPriceAmount,
  ProductCardRating,
  ProductCardTitle,
} from "@/components/ui/product-card";
import Image from "next/image";
import { useState } from "react";

type Color = "Black" | "White" | "Pink";
type Size = "S" | "M" | "L" | "XL";

export default function ProductBlock001() {
  const [selectedColor, setSelectedColor] = useState<Color>("Black");
  const [selectedSize, setSelectedSize] = useState<Size>("M");

  const colors: Color[] = ["Black", "White", "Pink"];
  const sizes: Size[] = ["S", "M", "L", "XL"];

  return (
    <div className="container mx-auto p-8">
      <ProductCard
        size="lg"
        layout="horizontal"
        className="group"
        data-layout="horizontal"
      >
        <ProductCardImage>
          <ProductCardBadge>New Arrival</ProductCardBadge>
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Product image"
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </ProductCardImage>
        <div className="col-span-2 flex flex-col justify-between p-6">
          <div>
            <ProductCardTitle>Premium Wireless Headphones</ProductCardTitle>
            <ProductCardDescription>
              Experience crystal-clear sound with our premium wireless
              headphones. Perfect for music lovers, gamers, and professionals.
            </ProductCardDescription>
            <ProductCardRating>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-primary text-primary"
                  aria-hidden="true"
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                (128 reviews)
              </span>
            </ProductCardRating>
          </div>
          <div className="mt-6">
            <ProductCardPrice>
              <div className="flex items-baseline gap-2">
                <ProductCardPriceAmount>$99.99</ProductCardPriceAmount>
                <span className="text-sm text-muted-foreground">
                  Free shipping on all orders
                </span>
              </div>
            </ProductCardPrice>
            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Color</label>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <Button
                      key={color}
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedColor(color)}
                      className={`min-w-[80px] ${
                        selectedColor === color
                          ? "border-primary"
                          : "border-input"
                      }`}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Size</label>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[60px] ${
                        selectedSize === size
                          ? "border-primary"
                          : "border-input"
                      }`}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            <ProductCardActions className="mt-6">
              <Button className="w-full" size="lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="secondary" className="w-full" size="lg">
                <CreditCard className="mr-2 h-5 w-5" />
                Buy Now
              </Button>
            </ProductCardActions>
          </div>
        </div>
      </ProductCard>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/component-preview";
import {
  ProductCard,
  ProductCardImage,
  ProductCardBadge,
  ProductCardContent,
  ProductCardCategory,
  ProductCardTitle,
  ProductCardDescription,
  ProductCardRating,
  ProductCardPrice,
  ProductCardPriceAmount,
  ProductCardPriceOriginal,
  ProductCardActions,
} from "@/components/ui/product-card";
import { Heart, Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { CopyInput } from "../../components/copy-input";

export default function ProductCardPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Product Card</h2>
          <p className="text-muted-foreground">
            A card component that displays a product with a badge, image, title,
            rating, price, and actions.
          </p>
          <Separator />
          <h2 className="text-xl font-semibold">Install</h2>
          <CopyInput copyText="product-card" />
          <Separator />
          <h2 className="text-xl font-semibold">Vertical Product Card</h2>
          <ComponentPreview
            preview={
              <ProductCard
                layout="vertical"
                size="md"
                data-layout="vertical"
                className="group"
              >
                <ProductCardImage>
                  <ProductCardBadge>New</ProductCardBadge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 z-10 rounded-full"
                  >
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Add to wishlist</span>
                  </Button>
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Product image"
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                </ProductCardImage>
                <ProductCardContent>
                  <ProductCardCategory>Electronics</ProductCardCategory>
                  <ProductCardTitle>
                    Wireless Noise-Cancelling Headphones
                  </ProductCardTitle>
                  <ProductCardRating>
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">(42)</span>
                  </ProductCardRating>
                  <ProductCardActions>
                    <ProductCardPrice>
                      <ProductCardPriceAmount>$299.99</ProductCardPriceAmount>
                      <ProductCardPriceOriginal>
                        $349.99
                      </ProductCardPriceOriginal>
                    </ProductCardPrice>
                    <Button size="sm">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to cart
                    </Button>
                  </ProductCardActions>
                </ProductCardContent>
              </ProductCard>
            }
            code={`
              import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Star } from "lucide-react"

import {
  ProductCard,
  ProductCardImage,
  ProductCardBadge,
  ProductCardContent,
  ProductCardCategory,
  ProductCardTitle,
  ProductCardDescription,
  ProductCardRating,
  ProductCardPrice,
  ProductCardPriceAmount,
  ProductCardPriceOriginal,
  ProductCardActions,
} from  "@/components/ui/product-card";

export function VerticalProductCardDemo() {
  return (
    <ProductCard layout="vertical" size="md" data-layout="vertical" className="group">
      <ProductCardImage>
        <ProductCardBadge>New</ProductCardBadge>
        <Button variant="ghost" size="icon" className="absolute right-2 top-2 z-10 rounded-full">
          <Heart className="h-5 w-5" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
        <Image
          src="/placeholder.svg?height=400&width=400"
          alt="Product image"
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      </ProductCardImage>
      <ProductCardContent>
        <ProductCardCategory>Electronics</ProductCardCategory>
        <ProductCardTitle>Wireless Noise-Cancelling Headphones</ProductCardTitle>
        <ProductCardRating>
          <Star className="h-4 w-4 fill-primary text-primary" />
          <Star className="h-4 w-4 fill-primary text-primary" />
          <Star className="h-4 w-4 fill-primary text-primary" />
          <Star className="h-4 w-4 fill-primary text-primary" />
          <Star className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">(42)</span>
        </ProductCardRating>
        <ProductCardActions>
          <ProductCardPrice>
            <ProductCardPriceAmount>$299.99</ProductCardPriceAmount>
            <ProductCardPriceOriginal>$349.99</ProductCardPriceOriginal>
          </ProductCardPrice>
          <Button size="sm">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to cart
          </Button>
        </ProductCardActions>
      </ProductCardContent>
    </ProductCard>
  )
}
              `}
          />
        </div>
      </div>
      <Separator />
      <h2 className="text-xl font-semibold">Horizontal Product Card</h2>
      <ComponentPreview
        preview={
          <ProductCard
            layout="horizontal"
            size="lg"
            data-layout="horizontal"
            className="group"
          >
            <ProductCardImage className="md:col-span-1">
              <ProductCardBadge>Sale</ProductCardBadge>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 z-10 rounded-full"
              >
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Product image"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </ProductCardImage>
            <ProductCardContent className="md:col-span-2">
              <ProductCardCategory>Home & Kitchen</ProductCardCategory>
              <ProductCardTitle>
                Smart Coffee Maker with Temperature Control
              </ProductCardTitle>
              <ProductCardRating>
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm text-muted-foreground">(128)</span>
              </ProductCardRating>
              <ProductCardDescription>
                Brew the perfect cup of coffee with precise temperature control,
                smartphone connectivity, and programmable settings.
              </ProductCardDescription>
              <ProductCardActions>
                <ProductCardPrice>
                  <ProductCardPriceAmount>$129.99</ProductCardPriceAmount>
                  <ProductCardPriceOriginal>$159.99</ProductCardPriceOriginal>
                </ProductCardPrice>
                <Button>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to cart
                </Button>
              </ProductCardActions>
            </ProductCardContent>
          </ProductCard>
        }
        code={`
              import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Star } from "lucide-react"

import {
  ProductCard,
  ProductCardImage,
  ProductCardBadge,
  ProductCardContent,
  ProductCardCategory,
  ProductCardTitle,
  ProductCardDescription,
  ProductCardRating,
  ProductCardPrice,
  ProductCardPriceAmount,
  ProductCardPriceOriginal,
  ProductCardActions,
} from  "@/components/ui/product-card";

export function HorizontalProductCardDemo() {
  return (
    <ProductCard layout="horizontal" size="lg" data-layout="horizontal" className="group">
      <ProductCardImage className="md:col-span-1">
        <ProductCardBadge>Sale</ProductCardBadge>
        <Button variant="ghost" size="icon" className="absolute right-2 top-2 z-10 rounded-full">
          <Heart className="h-5 w-5" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
        <Image
          src="/placeholder.svg?height=400&width=400"
          alt="Product image"
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </ProductCardImage>
      <ProductCardContent className="md:col-span-2">
        <ProductCardCategory>Home & Kitchen</ProductCardCategory>
        <ProductCardTitle>Smart Coffee Maker with Temperature Control</ProductCardTitle>
        <ProductCardRating>
          <Star className="h-4 w-4 fill-primary text-primary" />
          <Star className="h-4 w-4 fill-primary text-primary" />
          <Star className="h-4 w-4 fill-primary text-primary" />
          <Star className="h-4 w-4 fill-primary text-primary" />
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="text-sm text-muted-foreground">(128)</span>
        </ProductCardRating>
        <ProductCardDescription>
          Brew the perfect cup of coffee with precise temperature control, smartphone connectivity, and programmable
          settings.
        </ProductCardDescription>
        <ProductCardActions>
          <ProductCardPrice>
            <ProductCardPriceAmount>$129.99</ProductCardPriceAmount>
            <ProductCardPriceOriginal>$159.99</ProductCardPriceOriginal>
          </ProductCardPrice>
          <Button>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to cart
          </Button>
        </ProductCardActions>
      </ProductCardContent>
    </ProductCard>
  )
}
              `}
      />
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/component-preview";
import {
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
} from "@/registry/ui/cart";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { CopyInput } from "@/components/copy-input";
import { Input } from "@/components/ui/input";

export default function CartPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Cart</h2>
          <p className="text-muted-foreground">
            A cart component that displays items, quantities, prices, and a
            summary section for checkout.
          </p>
          <Separator />
          <h2 className="text-xl font-semibold">Install</h2>
          <CopyInput copyText="https://shadcn-ecommerce-ui.vercel.app/r/cart.json" />
          <Separator />
          <h2 className="text-xl font-semibold">Default Cart</h2>
          <ComponentPreview
            preview={
              <Cart>
                <CartHeader>
                  <CartTitle>Your Cart (3 items)</CartTitle>
                </CartHeader>

                <CartItems>
                  <CartItem>
                    <CartItemImage>
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Wireless Headphones"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </CartItemImage>

                    <CartItemContent>
                      <div className="flex justify-between">
                        <div>
                          <CartItemTitle>
                            Wireless Noise-Cancelling Headphones
                          </CartItemTitle>
                          <CartItemDescription>
                            Color: Black | Size: One Size
                          </CartItemDescription>
                        </div>
                        <CartItemPrice>$299.99</CartItemPrice>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <CartItemQuantity>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <span className="w-5 text-center text-sm">1</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                        </CartItemQuantity>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 px-2 text-muted-foreground"
                        >
                          <Trash2 className="mr-1 h-3 w-3" />
                          <span className="text-xs">Remove</span>
                        </Button>
                      </div>
                    </CartItemContent>
                  </CartItem>

                  <CartItem>
                    <CartItemImage>
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Smart Coffee Maker"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </CartItemImage>

                    <CartItemContent>
                      <div className="flex justify-between">
                        <div>
                          <CartItemTitle>Smart Coffee Maker</CartItemTitle>
                          <CartItemDescription>
                            Color: Silver
                          </CartItemDescription>
                        </div>
                        <CartItemPrice>$129.99</CartItemPrice>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <CartItemQuantity>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <span className="w-5 text-center text-sm">2</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                        </CartItemQuantity>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 px-2 text-muted-foreground"
                        >
                          <Trash2 className="mr-1 h-3 w-3" />
                          <span className="text-xs">Remove</span>
                        </Button>
                      </div>
                    </CartItemContent>
                  </CartItem>

                  <CartItem>
                    <CartItemImage>
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Fitness Tracker"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </CartItemImage>

                    <CartItemContent>
                      <div className="flex justify-between">
                        <div>
                          <CartItemTitle>Fitness Tracker Watch</CartItemTitle>
                          <CartItemDescription>
                            Color: Blue | Size: M
                          </CartItemDescription>
                        </div>
                        <CartItemPrice>$89.99</CartItemPrice>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <CartItemQuantity>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <span className="w-5 text-center text-sm">1</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                        </CartItemQuantity>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 px-2 text-muted-foreground"
                        >
                          <Trash2 className="mr-1 h-3 w-3" />
                          <span className="text-xs">Remove</span>
                        </Button>
                      </div>
                    </CartItemContent>
                  </CartItem>
                </CartItems>
              </Cart>
            }
            code={`
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"

import {
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
} from "@/registry/ui/cart"

export function CartDemo() {
  return (
     <Cart>
              <CartHeader>
                <CartTitle>Your Cart (3 items)</CartTitle>
              </CartHeader>

              <CartItems>
                <CartItem>
                  <CartItemImage>
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Wireless Headphones"
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </CartItemImage>

                  <CartItemContent>
                    <div className="flex justify-between">
                      <div>
                        <CartItemTitle>Wireless Noise-Cancelling Headphones</CartItemTitle>
                        <CartItemDescription>Color: Black | Size: One Size</CartItemDescription>
                      </div>
                      <CartItemPrice>$299.99</CartItemPrice>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <CartItemQuantity>
                        <Button variant="outline" size="icon" className="h-7 w-7">
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-5 text-center text-sm">1</span>
                        <Button variant="outline" size="icon" className="h-7 w-7">
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </CartItemQuantity>

                      <Button variant="ghost" size="sm" className="h-7 px-2 text-muted-foreground">
                        <Trash2 className="mr-1 h-3 w-3" />
                        <span className="text-xs">Remove</span>
                      </Button>
                    </div>
                  </CartItemContent>
                </CartItem>

                <CartItem>
                  <CartItemImage>
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Smart Coffee Maker"
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </CartItemImage>

                  <CartItemContent>
                    <div className="flex justify-between">
                      <div>
                        <CartItemTitle>Smart Coffee Maker</CartItemTitle>
                        <CartItemDescription>Color: Silver</CartItemDescription>
                      </div>
                      <CartItemPrice>$129.99</CartItemPrice>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <CartItemQuantity>
                        <Button variant="outline" size="icon" className="h-7 w-7">
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-5 text-center text-sm">2</span>
                        <Button variant="outline" size="icon" className="h-7 w-7">
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </CartItemQuantity>

                      <Button variant="ghost" size="sm" className="h-7 px-2 text-muted-foreground">
                        <Trash2 className="mr-1 h-3 w-3" />
                        <span className="text-xs">Remove</span>
                      </Button>
                    </div>
                  </CartItemContent>
                </CartItem>

                <CartItem>
                  <CartItemImage>
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Fitness Tracker"
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </CartItemImage>

                  <CartItemContent>
                    <div className="flex justify-between">
                      <div>
                        <CartItemTitle>Fitness Tracker Watch</CartItemTitle>
                        <CartItemDescription>Color: Blue | Size: M</CartItemDescription>
                      </div>
                      <CartItemPrice>$89.99</CartItemPrice>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <CartItemQuantity>
                        <Button variant="outline" size="icon" className="h-7 w-7">
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-5 text-center text-sm">1</span>
                        <Button variant="outline" size="icon" className="h-7 w-7">
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </CartItemQuantity>

                      <Button variant="ghost" size="sm" className="h-7 px-2 text-muted-foreground">
                        <Trash2 className="mr-1 h-3 w-3" />
                        <span className="text-xs">Remove</span>
                      </Button>
                    </div>
                  </CartItemContent>
                </CartItem>
              </CartItems>
            </Cart>
  )
}
            `}
          />
        </div>
      </div>
      <Separator />
      <h2 className="text-xl font-semibold">Compact Cart</h2>
      <ComponentPreview
        preview={
          <Cart>
            <CartHeader>
              <CartTitle>Order Summary</CartTitle>
            </CartHeader>

            <CartSummary>
              <CartSummaryItem>
                <CartSummaryLabel>Subtotal</CartSummaryLabel>
                <CartSummaryValue>$649.96</CartSummaryValue>
              </CartSummaryItem>

              <CartSummaryItem>
                <CartSummaryLabel>Shipping</CartSummaryLabel>
                <CartSummaryValue>Free</CartSummaryValue>
              </CartSummaryItem>

              <CartSummaryItem>
                <CartSummaryLabel>Tax</CartSummaryLabel>
                <CartSummaryValue>$52.00</CartSummaryValue>
              </CartSummaryItem>

              <CartSummaryItem>
                <CartSummaryLabel>Discount</CartSummaryLabel>
                <CartSummaryValue className="text-green-600">
                  -$25.00
                </CartSummaryValue>
              </CartSummaryItem>

              <Separator className="my-2" />

              <CartSummaryItem>
                <CartSummaryLabel className="text-base font-medium text-foreground">
                  Total
                </CartSummaryLabel>
                <CartSummaryValue className="text-base">
                  $676.96
                </CartSummaryValue>
              </CartSummaryItem>
            </CartSummary>

            <CartFooter>
              <div className="mb-4 mt-4">
                <div className="flex space-x-2">
                  <Input placeholder="Coupon code" className="flex-1" />
                  <Button variant="outline">Apply</Button>
                </div>
              </div>

              <Button className="w-full">Checkout</Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Taxes and shipping calculated at checkout
              </p>
            </CartFooter>
          </Cart>
        }
        code={`
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2 } from "lucide-react"

import {
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
} from "@/registry/ui/cart"

export function CompactCartDemo() {
  return (
        <Cart>
              <CartHeader>
                <CartTitle>Order Summary</CartTitle>
              </CartHeader>

              <CartSummary>
                <CartSummaryItem>
                  <CartSummaryLabel>Subtotal</CartSummaryLabel>
                  <CartSummaryValue>$649.96</CartSummaryValue>
                </CartSummaryItem>

                <CartSummaryItem>
                  <CartSummaryLabel>Shipping</CartSummaryLabel>
                  <CartSummaryValue>Free</CartSummaryValue>
                </CartSummaryItem>

                <CartSummaryItem>
                  <CartSummaryLabel>Tax</CartSummaryLabel>
                  <CartSummaryValue>$52.00</CartSummaryValue>
                </CartSummaryItem>

                <CartSummaryItem>
                  <CartSummaryLabel>Discount</CartSummaryLabel>
                  <CartSummaryValue className="text-green-600">-$25.00</CartSummaryValue>
                </CartSummaryItem>

                <Separator className="my-2" />

                <CartSummaryItem>
                  <CartSummaryLabel className="text-base font-medium text-foreground">Total</CartSummaryLabel>
                  <CartSummaryValue className="text-base">$676.96</CartSummaryValue>
                </CartSummaryItem>
              </CartSummary>

              <CartFooter>
                <div className="mb-4 mt-4">
                  <div className="flex space-x-2">
                    <Input placeholder="Coupon code" className="flex-1" />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                <Button className="w-full">Checkout</Button>

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Taxes and shipping calculated at checkout
                </p>
              </CartFooter>
            </Cart>
  )
}
        `}
      />
    </div>
  );
}

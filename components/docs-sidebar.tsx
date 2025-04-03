"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Package,
  ShoppingBag,
  Settings,
  Layers,
  LayoutGrid,
  Tag,
  Star,
  ChevronDown,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function DocsSidebar() {
  const pathname = usePathname();

  const components = [
    { name: "Product Card", href: "/product-card" },
    { name: "Star Rating", href: "/star-rating" },
    { name: "Price", href: "/price" },
    { name: "Like", href: "/like" },
    { name: "Cart", href: "/cart" },
  ];

  const blocks = [{ name: "Product Block 001", href: "/product-block-001" }];
  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <ShoppingBag className="h-4 w-4" />
                </div>
                <div className="font-semibold">e-commerce ui</div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/"}>
                <Link href="/">
                  <Layers className="h-4 w-4" />
                  <span>Getting Started</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/installation"}
              >
                <Link href="/installation">
                  <Package className="h-4 w-4" />
                  <span>Installation</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                <span>Components</span>
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {components.map((component) => (
                    <SidebarMenuItem key={component.name}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === component.href}
                      >
                        <Link href={component.href}>
                          <LayoutGrid className="h-4 w-4" />
                          <span>{component.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                <span>Blocks</span>
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {blocks.map((block) => (
                    <SidebarMenuItem key={block.name}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === block.href}
                      >
                        <Link href={block.href}>
                          <LayoutGrid className="h-4 w-4" />
                          <span>{block.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a
                href="https://github.com/Mvrxel/shadcn-ecommerce-ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star className="h-4 w-4" />
                <span>Star on GitHub</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

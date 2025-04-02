import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Installation</h1>
        <p className="text-lg text-muted-foreground">
          Follow the shadcn/ui installation guide to install the components.
        </p>
      </div>
      <Separator />
      <Button variant="outline" asChild>
        <Link
          href="https://ui.shadcn.com/docs/installation/next"
          target="_blank"
        >
          ShadCN UI Installation Guide
        </Link>
      </Button>
    </div>
  );
}

# E-Commerce UI Components

Open-source, reusable e-commerce UI components built with [shadcn/ui](https://ui.shadcn.com/), fully customizable and ready to integrate into your next project.

## Features

- **Customizable** – Tailwind CSS for easy styling and theming.
- **Accessible** – Built with accessibility standards in mind.
- **Responsive** – Optimized for mobile, tablet, and desktop.
- **Production Ready** – Components are thoroughly tested and ready for production use.

## Installation

Use ShadCN CLI to easy installation

```bash
npx shadcn@latest add star-rating
# or
pnpm dlx shadcn@latest add star-rating
```

## Usage

Here's a simple example to get you started:

```tsx
import { StarRating } from "@/components/ui/star-rating";

export default function ReviewsPage() {
  return (
    <div>
      <StarRating rating={3} />
    </div>
  );
}

export default Example;
```

## Components

- ProductCard
- Price
- Reviews
- Like

## Blocks

- Product Block

## Documentation

Detailed documentation and examples are available [here](./docs).

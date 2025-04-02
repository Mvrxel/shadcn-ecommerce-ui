export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
        <p className="text-lg text-muted-foreground">
          A modern ecommerce UI library built with shadcn/ui components,
          components are fully responsive and built with accessibility in mind.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">
          How are the components built?
        </h2>
        <p className="text-muted-foreground">
          All components are built with shadcn/ui components and are fully
          responsive. Components are built with accessibility in mind and are
          styled with css variables.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Customization and configuration
        </h2>
        <p className="text-muted-foreground">
          You can customize the components with css variables. You can copy
          paste the code from the code block and paste it into your project. For
          example, you can change the primary color of the component by changing
          the <code className="bg-muted px-1 rounded">--primary</code> variable.
        </p>
      </div>
    </div>
  );
}

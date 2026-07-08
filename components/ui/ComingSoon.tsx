export function ComingSoon({
  title = "Coming soon",
  subtitle = "We're putting this together — please check back soon.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-dashed border-border-subtle bg-surface-muted/50 px-8 py-20 text-center">
        <p className="font-heading font-medium text-lg mb-1.5">{title}</p>
        <p className="text-sm text-foreground/55">{subtitle}</p>
      </div>
    </div>
  );
}

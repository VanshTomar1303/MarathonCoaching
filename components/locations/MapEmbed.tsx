export function MapEmbed({ query }: { query: string }) {
  return (
    <div className="aspect-video rounded-2xl overflow-hidden">
      <iframe
        src={`https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
        className="h-full w-full border-0"
        loading="lazy"
        title="Map"
      />
    </div>
  );
}

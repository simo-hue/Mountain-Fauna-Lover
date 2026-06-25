/**
 * Renders a JSON-LD <script>. Server component — safe to drop into any page body.
 * The `<` escaping prevents the serialized JSON from breaking out of the tag.
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

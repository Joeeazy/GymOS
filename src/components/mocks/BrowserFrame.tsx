/** Radius 18, 36px chrome bar on sur2, mono URL — as drawn in the design. */
export function BrowserFrame({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-line bg-sur shadow-frame overflow-hidden rounded-[18px] border">
      <div className="bg-sur2 border-line flex h-9 items-center gap-2 border-b px-3.5">
        <span className="bg-line h-2.5 w-2.5 rounded-full" />
        <span className="bg-line h-2.5 w-2.5 rounded-full" />
        <span className="bg-line h-2.5 w-2.5 rounded-full" />
        <span className="text-mut ml-3 truncate font-mono text-xs">{url}</span>
      </div>
      <div className="relative h-[640px] dash:h-[720px]">{children}</div>
    </div>
  );
}

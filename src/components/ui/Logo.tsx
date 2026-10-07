/**
 * Wordmark: "gym" in Archivo 900 / stretch 125% / tracking -0.03em, then an
 * "OS" chip on acc. 24/13 in the header, 22/12 in the footer.
 */
export function Logo({ size = 24 }: { size?: 24 | 22 }) {
  const chip = size === 24 ? 13 : 12;
  return (
    <span className="flex items-center gap-[5px]">
      <span
        className="stretch-wide font-black leading-none tracking-[-0.03em]"
        style={{ fontSize: size }}
      >
        gym
      </span>
      <span
        className="stretch-wide bg-acc text-onacc rounded-chip font-extrabold leading-none"
        style={{
          fontSize: chip,
          padding: size === 24 ? "3px 6px 4px" : "3px 6px",
        }}
      >
        OS
      </span>
    </span>
  );
}

/** 330×680, radius 44, #0E1A12 bezel with 10px padding — exactly as drawn. */
export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="shadow-phone h-[680px] w-[330px] rounded-[44px] p-2.5"
      style={{ background: "#0E1A12" }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[36px]">{children}</div>
    </div>
  );
}

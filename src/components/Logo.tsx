export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-baseline gap-[2px] font-serif font-black tracking-[0.18em]">
      <span className={light ? "text-white" : "text-navy-900"}>ASSIGN</span>
      <span className="text-gold">.</span>
    </span>
  );
}

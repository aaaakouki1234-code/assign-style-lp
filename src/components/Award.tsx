export function Award({ top, main }: { top: string; main: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gold-soft/30 to-transparent" />
        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl text-gold">「</span>
        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl text-gold">」</span>
        <div className="flex flex-col items-center px-3">
          <span className="text-[10px] font-bold leading-tight text-gold-soft">
            {top}
          </span>
          <span className="mt-1 font-serif text-2xl font-black leading-none text-gold sm:text-3xl">
            No.1
          </span>
        </div>
      </div>
      <span className="mt-2 max-w-[8rem] text-[11px] font-medium leading-snug text-navy-200">
        {main}
      </span>
    </div>
  );
}

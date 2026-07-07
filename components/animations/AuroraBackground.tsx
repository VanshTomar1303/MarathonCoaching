export function AuroraBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -top-1/3 left-1/4 h-[60vw] w-[60vw] rounded-full bg-navy/20 dark:bg-navy-light/25 blur-[120px] animate-[aurora1_16s_ease-in-out_infinite]" />
      <div className="absolute top-1/4 -right-1/4 h-[50vw] w-[50vw] rounded-full bg-gold/20 dark:bg-gold/10 blur-[120px] animate-[aurora2_20s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-1/3 h-[45vw] w-[45vw] rounded-full bg-steel/25 dark:bg-navy/30 blur-[110px] animate-[aurora1_18s_ease-in-out_infinite_reverse]" />
      <style>{`
        @keyframes aurora1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(4%, 6%) scale(1.08); }
        }
        @keyframes aurora2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-5%, 4%) scale(1.12); }
        }
      `}</style>
    </div>
  );
}

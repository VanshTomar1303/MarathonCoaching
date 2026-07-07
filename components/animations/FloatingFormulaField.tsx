import type { CSSProperties } from "react";

/**
 * Floating math-formula backdrop for the hero.
 *
 * This is a pure-CSS reimplementation of what used to be a three.js/WebGL
 * canvas. The WebGL version looked the same but its context could degrade in
 * some environments and paint a washed-out ("white") frame over the hero. CSS
 * gives the identical drifting-formula look with zero GPU risk, and it renders
 * the same in light and dark (gold reads on both).
 */
const FORMULAS: {
  s: string;
  top: string;
  left: string;
  size: string;
  dur: string;
  delay: string;
  rot: string;
}[] = [
  { s: "PV=nRT", top: "9%", left: "46%", size: "text-5xl", dur: "11s", delay: "0s", rot: "-4deg" },
  { s: "H₂O", top: "7%", left: "24%", size: "text-4xl", dur: "9s", delay: "1.2s", rot: "3deg" },
  { s: "π", top: "13%", left: "70%", size: "text-5xl", dur: "10s", delay: "0.5s", rot: "2deg" },
  { s: "e=hν", top: "40%", left: "14%", size: "text-4xl", dur: "12s", delay: "2s", rot: "-3deg" },
  { s: "∫", top: "54%", left: "5%", size: "text-7xl", dur: "13s", delay: "0.8s", rot: "0deg" },
  { s: "Δ", top: "46%", left: "88%", size: "text-5xl", dur: "10.5s", delay: "1.6s", rot: "4deg" },
  { s: "λ", top: "60%", left: "60%", size: "text-5xl", dur: "9.5s", delay: "0.3s", rot: "-2deg" },
  { s: "√x", top: "72%", left: "30%", size: "text-4xl", dur: "11.5s", delay: "2.4s", rot: "3deg" },
  { s: "E=mc²", top: "82%", left: "44%", size: "text-6xl", dur: "12.5s", delay: "0.6s", rot: "-3deg" },
  { s: "F=ma", top: "90%", left: "68%", size: "text-5xl", dur: "10s", delay: "1.4s", rot: "2deg" },
];

export function FloatingFormulaField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden hidden md:block">
      {FORMULAS.map((f, i) => (
        <span
          key={i}
          className={`absolute font-display font-semibold text-gold/30 select-none ${f.size}`}
          style={
            {
              top: f.top,
              left: f.left,
              "--rot": f.rot,
              animation: `formula-drift ${f.dur} ease-in-out ${f.delay} infinite`,
            } as CSSProperties
          }
        >
          {f.s}
        </span>
      ))}
    </div>
  );
}

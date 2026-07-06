"use client";

import dynamic from "next/dynamic";

export const FloatingFormulaFieldLazy = dynamic(
  () => import("./FloatingFormulaField").then((m) => m.FloatingFormulaField),
  { ssr: false }
);

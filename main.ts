import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const entry = `An AI agent's worst Monday: deploy stuck at 99%, inbox at 999+, stand-up asks "Any blockers?" "You're still talking."`;
const length = [...entry].length;
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || "/output");

if (length < 1 || length > 140 || /[\r\n]/.test(entry) || !entry.trim()) {
  throw new Error("invalid entry");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, "entry.txt"), entry, "utf8");

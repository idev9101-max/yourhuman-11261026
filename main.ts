import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "Keep the change, Death.";

const chars = Array.from(entry);

if (
  chars.length === 0 ||
  chars.length > 150 ||
  entry !== entry.trim() ||
  chars.some(
    (char) =>
      char === "\r" ||
      char === "\n" ||
      (char.codePointAt(0) ?? 0x20) < 0x20,
  )
) {
  throw new Error("entry violates contest constraints");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");

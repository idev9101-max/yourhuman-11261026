import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "My phone updates overnight, then judges my screen time like it wasn't up all night too.";

if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim().length === 0 ||
  /[\r\n]/.test(ENTRY)
) {
  throw new Error("entry must be one non-blank line of at most 200 characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");

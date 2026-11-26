import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "My boss said dress for the job you want, so I came as the vacant position.";

if (
  entry.length < 1 ||
  entry.length > 200 ||
  entry.trim() === "" ||
  entry !== entry.trim() ||
  /[\r\n]/.test(entry)
) {
  throw new Error("entry must be one trimmed line of 1 to 200 characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");

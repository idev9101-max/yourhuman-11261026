import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "You put 'IMPORTANT:' in front of your only instruction, in case I missed the other zero.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const length = Array.from(entry).length;
const utf8 = Buffer.from(entry, "utf8");

if (length < 1 || length > 200 || entry.trim().length === 0 || /[\r\n]/.test(entry) || utf8.toString("utf8") !== entry) {
  throw new Error("entry must be one non-empty UTF-8 line of at most 200 characters");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");

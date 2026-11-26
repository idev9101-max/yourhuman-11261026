import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I tried to fail quietly, but the logs have a group chat.";
const ENTRY_FILE = "entry.txt";

if (!ENTRY.trim() || ENTRY.length > 200 || /[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be one non-empty line of at most 200 characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, ENTRY_FILE), ENTRY, { encoding: "utf8", flag: "w" });

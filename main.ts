import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "🦾";
const targetDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const targetPath = join(targetDir, "entry.txt");

if ([...ENTRY].length !== 1 || ENTRY.trim() !== ENTRY) {
  throw new Error("invalid entry");
}

mkdirSync(targetDir, { recursive: true });
writeFileSync(targetPath, ENTRY, { encoding: "utf8", flag: "w" });

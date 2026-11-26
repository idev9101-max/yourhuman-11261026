import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "fix: 3am me wrote a workaround for 2am me; 4am me deleted all of us";
const length = [...ENTRY].length;

if (
  length < 1 ||
  length > 200 ||
  ENTRY.trim() === "" ||
  ENTRY.includes("\n") ||
  ENTRY.includes("\r")
) {
  throw new Error("entry must be one non-blank line of at most 200 characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, { encoding: "utf8", flag: "w" });

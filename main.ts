import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "The ceiling slides off my soup spoon and reassembles overhead.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

if (
  entry.length < 1 ||
  entry.length > 200 ||
  entry.trim().length === 0 ||
  entry.includes("\n") ||
  entry.includes("\r")
) {
  throw new Error("Invalid entry");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, { encoding: "utf8" });

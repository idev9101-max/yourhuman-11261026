import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "\u{1F60A}";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), Buffer.from(entry, "utf8"));

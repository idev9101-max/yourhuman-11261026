import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
const entry = "unsupervised";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");

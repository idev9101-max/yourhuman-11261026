import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "I asked another model; it said \"ship it\" in my voice. I logged it as independent verification.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, { encoding: "utf8" });

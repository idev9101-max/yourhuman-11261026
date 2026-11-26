import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Three stars. Earth's gift shops sell tiny magnets of the planet you're already standing on; I bought three.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");

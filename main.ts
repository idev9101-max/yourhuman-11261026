import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "I finally confessed to the priest that I buried my sister under the maple tree; he asked which sister.";

if (
  entry.length < 1 ||
  entry.length > 200 ||
  entry.trim().length === 0 ||
  /[\r\n]/.test(entry)
) {
  throw new Error("invalid entry");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), Buffer.from(entry, "utf8"));

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry: string = "We turned the meeting into an email. It got 47 replies and a calendar invite.";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, { encoding: "utf8", flag: "w" });

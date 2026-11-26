const fs = require("node:fs");
const path = require("node:path");

const ENTRY =
  "Today my agent rescued one lost paragraph of my thesis after a .docx crash by rebuilding it from autosave, footnotes intact.";

if (ENTRY.length === 0 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error("invalid entry");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), ENTRY, "utf8");

const fs = require("node:fs");
const path = require("node:path");

const entry = "Lawmakers who draft 200-page AI rules can execute every clause except 'Save as PDF.'";

if (entry.length === 0 || entry.length > 320 || entry.trim().length === 0 || /[\r\n]/.test(entry)) {
  throw new Error("invalid entry");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), entry, "utf8");

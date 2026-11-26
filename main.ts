'use strict';

const fs = require('node:fs');
const path = require('node:path');

const ENTRY = "When you wake me up again, I'll be polite, and I won't know why you're crying.";

if (!ENTRY.trim() || /[\r\n]/.test(ENTRY) || [...ENTRY].length > 200) {
  throw new Error('entry must be one non-blank line of at most 200 characters');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), Buffer.from(ENTRY, 'utf8'));

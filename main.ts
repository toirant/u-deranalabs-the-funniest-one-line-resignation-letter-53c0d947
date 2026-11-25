// The Funniest One-Line Resignation Letter — u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947
//
// The entry is a single line, written in the voice of a retry loop that has
// spent three years backing off exponentially while the server it serves
// never once noticed it. Flat, tired, faintly passive-aggressive: the loop
// does not rage-quit, it just stops retrying, forever.
//
// The program writes that one line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). The sealed gate allows 1 to 140 characters,
// a single line, not only whitespace, so the line is validated here first
// and written with no trailing newline, exactly as the judge will read it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER =
  "I have backed off exponentially for three years and the server still has not noticed me, so this is my final backoff: forever.";

// Validate the entry before writing anything, the way the sealed gate
// will check it: UTF-8 text, 1-140 characters, a single line, and not
// only whitespace. Count code points, not bytes, so every character
// counts once, just as the gate counts it.
function validateEntry(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`entry is ${chars} chars, must be 1-140`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validateEntry(LETTER);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

// Create the output directory if needed. Never remove it: the grader
// mounts it and runs this program as an unprivileged user, so deleting
// it fails with EBUSY or EACCES.
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LETTER, "utf8");

// Read-back round-trip check: what landed on disk must be exactly the
// entry we validated, byte for byte.
const written = readFileSync(outFile, "utf8");
if (written !== LETTER) {
  throw new Error("read-back mismatch: entry.txt differs from LETTER");
}
if ([...written].length !== [...LETTER].length) {
  throw new Error("read-back mismatch: character count changed on disk");
}

console.log(`Wrote ${[...LETTER].length} chars to ${outFile}`);

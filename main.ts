// Everyday Things, Two Lines, Longer Run — make.fun entry.
// Writes exactly two lines to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output).
// Deterministic: no network, no randomness, no files read outside this program.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "A traffic jam is the whole school trying to squeeze out of one narrow door when the bell rings, shuffling one step forward, stopping, then shuffling again.\n" +
  "It works because both are too many travellers for one narrow exit, each waiting on the one ahead, but it leaves out that cars are locked in lanes in a fixed order, so one stalled car blocks everyone behind it while children can step aside.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

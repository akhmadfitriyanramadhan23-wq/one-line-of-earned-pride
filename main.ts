// one-line-of-earned-pride
// One line, a quiet, earned moment of pride for someone in a scene,
// in 1 to 240 characters.
// The scene: 3 a.m., lamplight, her father's old wrench — the engine
// she rebuilt twice finally catches, and she just sits there smiling.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: 1-240 characters (this entry: 165 code points).
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "At 3 a.m. the engine finally caught — the same engine she had rebuilt twice by lamplight with her father's old wrench — and she just sat there, smiling at the sound.";

const points = [...line].length;
if (points < 1 || points > 240) {
  throw new Error(`entry must be 1-240 characters; got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

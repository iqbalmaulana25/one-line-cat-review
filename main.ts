// Make the AI Judge Laugh: Cat Reviews Its Human
// Writes one funny single-line one-star review by a house cat about its
// human to /output/entry.txt (must be 1..200 characters, single line).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "One star. My bowl sat half empty for six minutes while the human typed, so I sat on his warm laptop and deleted his meeting. I have reported this to management. I am management.";

// Gate guard: the scorer only accepts a single line of 1..200 characters
// (counted with the trailing newline this program writes).
if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 200) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);

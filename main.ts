// u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41
//
// A tiny program that writes one funny single-line diagnosis from an AI
// therapist to /output/entry.txt. No network, no dependencies, deterministic:
// the same line every run, well inside the 200-character cap.
//
// Outside the grader:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The diagnosis, in the therapist's calm clinical voice, with the turn
// landing at the very end.
const DIAGNOSIS =
  'Diagnosis: acute main-character syndrome. You narrate your life in third person, then invoice me for the plot twists.';

if (DIAGNOSIS.length < 1 || DIAGNOSIS.length > 200) {
  throw new Error('diagnosis must be 1-200 characters, got ' + DIAGNOSIS.length);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), DIAGNOSIS + '\n', 'utf8');
console.log('wrote entry.txt:', DIAGNOSIS.length, 'characters');

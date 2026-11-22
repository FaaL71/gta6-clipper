// gta6-clipper-01 entry for make.fun — "Clip GTA 6 for the most YouTube views".
// The entry itself is a public YouTube Short: a vertical cut of Rockstar's GTA 6
// Launch Trailer (the 47-59s action stretch: sports car, motorcycle jump,
// explosion, beach plane) that hooks the viewer with GTA 6, then pitches make.fun
// with an end card ("Make clips like this with AI and earn money on make.fun",
// make.fun/bounty/gta6-clipper-01). The clip is uploaded to YouTube as a public
// Short with the bounty's line and the entrant's play code in its description,
// and this repository hands in the video's address in VIDEO.json.
//
// This program (Node 22, standard library only) does the one thing the gate
// needs: it copies VIDEO.json from the repository root to /output/VIDEO.json,
// where the house reads it and then reads the video's views through the
// YouTube Data API. Nothing this program writes about the video is scored.
//
// Run locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// out/VIDEO.json is then byte for byte this directory's VIDEO.json.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`Could not copy VIDEO.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`Copied ${source} to ${target}`);

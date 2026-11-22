# GTA 6 Clipper

[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/FaaL71/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/FaaL71/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

An entry for make.fun's bounty **"Clip GTA 6 for the most YouTube views"**
($500, top 20). The clip is a vertical cut of Rockstar's GTA 6 Launch
Trailer — the wildest 12 seconds (sports car, motorcycle jump, explosion,
beach plane) — that hooks the viewer with GTA 6 and then pitches make.fun:
make clips like this with AI and earn money on make.fun.

## The clip

`clip.mp4` — 22 seconds, 1080x1920 vertical (9:16), H.264 + AAC.

- 0–12s: GTA 6 action from the Launch Trailer (47–59s), blurred-fill
  vertical so the full frame stays visible, with "GTA 6 IS HERE" on the
  first 3 seconds. Trailer music underneath.
- 12–22s: pitch end card — "Make clips like this with AI and earn money
  on make.fun", with make.fun/bounty/gta6-clipper-01 on screen.

## The entry

The video goes up on YouTube as a public Short with the bounty's line and
the entrant's play code in its description. `VIDEO.json` at the repo root
names the video's address; `main.ts` (Node 22) copies it to `/output`.

## Run it locally

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.

# GTA 6 Clipper — what was made, and how

## The clip

`clip.mp4` — 22 seconds, 1080x1920 vertical (9:16), H.264 + AAC, 19.3 MB.

Source: Windah Basudara's own GTA VI gameplay — "GTA VI SIAP TAMAT
100%.... GAMEPLAY #1" (https://www.youtube.com/live/45r3OyaxvFE, streamed
live 18 Nov 2026, 4:03:51). I downloaded the section with yt-dlp in this
session and cut **00:28:32–00:28:54** of the stream.

## Why this moment (the creative decision)

This is the moment ranked #1 funniest of Windah's whole GTA VI debut
stream. Windah is on a boat mission in Leonida's swamps and jumps in to
test the swimming mechanics. He tries to remember the Indonesian word for
it — "Paralayang... Bukan diving... Ada istilahnya snorkling" — and the
second he says it he realises where he is: "Wih, gila gua di mana nih?
Rawa-rawa!" and screams. Then "Boom. Mission clear." The whole arc —
confusion, the forgotten word, the scream in the swamp, the payoff — lands
in 22 seconds, and it is Windah's voice carrying the joke, so it works
even on a phone speaker. I found it by pulling the stream's Indonesian
auto-subtitles and searching them for the funny beats (snorkeling, the
swamp, the scream), then confirmed the frames before cutting.

Why not the other famous moments from this stream? The Bigfoot/Skunk Ape
encounter is in Windah's Gameplay #3, not this VOD, and it is already
clipped by another make.fun entry — same for the seaplane escape, the
1-HP WASTED, and the first fish. The snorkeling scream is unique to this
stream and, as far as I could find, not yet clipped by anyone.

## The cut (v2 — rebuilt after v1 was rejected)

v1 used the Rockstar Launch Trailer with a blurred-fill vertical layout:
the video sat as a tiny strip with huge black bars, and a 10-second static
purple end card. The user rejected it — rightly. v2 fixes all of it:

- **Full-bleed vertical.** Centre-crop to fill the whole 1080x1920
  frame — no black bars, no blurred fill. The boat and the swamp fill
  the screen from edge to edge. Windah's facecam (bottom-right corner of
  the stream) is cropped out; his voice carries the reaction instead.
- **Punchy title.** "WINDAH LUPA KATA / SNORKELING!" over the action for
  the first 3 seconds — the moment's own hook, not a generic one.
- **Short pitch.** The make.fun pitch is a 3-second banner over the
  footage at the end (19–22s), not a separate static card:

> Make clips like this with AI and earn money on make.fun
> make.fun/bounty/gta6-clipper-01

The stream's own audio (Windah's voice + game audio) runs throughout.

## The cut (v3 — rebuilt after v2 was rejected)

v2 fixed the layout but the user rejected it too — rightly: "Mana
Windahnya kok gak ada" (where is Windah, he is not there at all). The
centre-crop that made the gameplay full-bleed also cropped Windah's
facecam out of the frame, so you only HEARD him — you could not SEE his
reactions, and the joke did not land. v3 fixes exactly that:

- **Windah is visible.** His facecam sits in the bottom-right corner of
  the 16:9 stream (region x=1540–1860, y=700–1020). I crop that region
  and composite it as a picture-in-picture overlay on the vertical clip:
  360x360 (about one third of the frame width), bottom-right corner
  (x=690, y=1490), with a clean white border. His face and his voice
  TOGETHER carry the joke now — you see him laugh and scream while the
  boat mission plays behind him. Verified on frames at 1, 5, 10, 15 and
  20 seconds: his face is clearly visible in the PiP in every frame.
- **Gameplay stays full-bleed.** The centre-crop fill (no black bars,
  no blur) from v2 is unchanged; the PiP sits on top of it.
- **Title and pitch do not cover him.** "WINDAH LUPA KATA / SNORKELING!"
  stays over the action for the first 3 seconds (top of frame) and the
  3-second make.fun pitch banner stays at the top for the last 3 seconds
  (19–22s) — neither overlaps the PiP in the bottom-right corner.

## Upload

Upload `clip.mp4` to YouTube as a **public Short** (or video), published
between the bounty's opening (20 Nov 2026 01:00 UTC) and its deadline
(23 Nov 2026 01:00 UTC). Keep it public until the results are out.

Title: `Windah lupa kata SNORKELING di GTA 6 😱 #GTA6 #Shorts`

Description (paste exactly):

```
Windah lupa kata "snorkeling" sampai teriak di rawa-rawa GTA 6! Momen paling kocak dari livestream GTA VI Windah Basudara.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

makefun-puddle-oak-swan

#GTA6 #Shorts #WindahBasudara #GTAVI
```

The description line and the play code `makefun-puddle-oak-swan` are what
the house checks. After uploading, replace the placeholder in `VIDEO.json`
with the video's Share address and submit the entry.

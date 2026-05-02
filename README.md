# KOF Maximum Impact Regulation "A" PLUS

Mirror of [https://game.snk-corp.co.jp/official/kof-mi-ra-plus/](https://game.snk-corp.co.jp/official/kof-mi-ra-plus/), preserved as part of the [fgcmirror](https://github.com/fgcmirror) project.

Live at <https://kof-maximum-impact-regulation-a-plus.fgcmirror.com>.

## Source

- **Original URL**: <https://game.snk-corp.co.jp/official/kof-mi-ra-plus/>
- **Original host**: `game.snk-corp.co.jp`
- **Captured at**: 2026-05-02T22:37:39.672049Z
- **Tool**: `wget`

## Snapshots used

- **Captured live** from <https://game.snk-corp.co.jp/official/kof-mi-ra-plus/> on 2026-05-02T22:37:39.669373Z.

## Notes

Captured live from origin. 50 files recovered via Step 5c BFS sweep (rollover hover images and JS-string asset refs). 202 video SWFs were sub-loaders calling loadMovie("img/pv_video_*.swf") — all real videos fetched per Step 5d (decompiled with ffdec). Ruffle vendored at system/ruffle/ for offline Flash playback. Per-character video FLVs transcoded to MP4 in _assets/video/ (205 files, ~457 MB) for repo-browseable archival. Adobe AC_RunActiveContent.js fetched into Scripts/ from origin root.

- 1 asset(s) could not be recovered from any Wayback snapshot:
  - `falcoon/index.html (404 on origin)`

## Contributing

Found a missing asset or better version?

Feel free to open a PR.

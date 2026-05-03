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

Captured live from origin. 50 files recovered via Step 5c BFS sweep (rollover hover images and JS-string asset refs). 202 video SWFs were sub-loaders calling loadMovie("img/pv_video_*.swf") — all real videos fetched per Step 5d (decompiled with ffdec). Ruffle vendored at system/ruffle/ for offline Flash playback. Per-character video FLVs transcoded to MP4 in _assets/video/ (205 files, ~457 MB) for repo-browseable archival. Adobe AC_RunActiveContent.js fetched into Scripts/ from origin root. 2026-05-03 follow-up: 234 popup files (gallery/{design,rough}/pop/* HTML+art and story/{01..06}/* chapters) plus common/hed1.jpg, common/hed3.jpg fetched live via polite BFS crawler — entry points were JS-string args to gallery1()/gallery2()/story() window.open helpers, invisible to wget. common.js itself was repaired: it had been transcoded from Shift_JIS with errors (UTF-8 replacement chars) and its popup URLs still carried the /official/kof-mi-ra-plus/ scope prefix; rewritten from cache to clean UTF-8 with root-relative paths. Google Analytics /__utm.js script tag stripped from 83 newly fetched popup HTMLs.

- 1 asset(s) could not be recovered from any Wayback snapshot:
  - `falcoon/index.html (404 on origin)`

## Contributing

Found a missing asset or better version?

Feel free to open a PR.

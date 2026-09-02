# Bigme HiBreak Dual 3 — Fact Bundle

**Compiled:** 2026-09-02
**Purpose:** verified spec set for `bigme-hibreak-dual-3-detachable-epub-2026.astro`
**Editorial frame:** device-status-reversal deepening of `hisense-a10-e-ink-phone-epub-2026`
(that article stated: *"Unlike the Bigme Hibreak Dual 2, whose secondary screen is built in,
the A10's rear display is detachable"* — the Dual 3 reverses exactly that claim).

## Sources actually fetched

| # | Source | URL | Status |
|---|---|---|---|
| 1 | Good e-Reader (primary) | `goodereader.com/blog/electronic-readers/bigme-announces-the-hibreak-dual-3-eink-smartphone` | ✅ 193 KB body, full article text extracted |
| 2 | Google News RSS | `news.google.com/rss/search?q=e-ink+reader` | ✅ `<pubDate>` Sat, 30 Aug 2026 — within 8-day freshness gate |
| 3 | Bigme official site | `bigme.com` | ❌ returned 114 bytes (JS-walled / empty shell) — **no vendor confirmation available** |
| 4 | Bigme shop | `shop.bigme.com` | ❌ returned 0 bytes |

**Author/date of record:** Michael Kozlowski, Good e-Reader, published 29 August 2026
(RSS surfaced 30 August 2026).

## Verified specs

| Field | Value | Source | Confidence |
|---|---|---|---|
| Product name | Bigme HiBreak Dual 3 | 1 | High |
| Announce date | late August 2026 (article 29 Aug 2026) | 1 | High |
| Front display | Color E Ink main display | 1 | High |
| Front refresh rate | 85 Hz | 1 | High |
| Rear display | Detachable color LCD module | 1 | High |
| Rear attach method | Magnets + metal pins (data + power transfer) | 1 | High |
| Stylus | 4096-level pressure sensitivity | 1 | High |
| SoC | MediaTek Dimensity 8300 | 1 | High |
| RAM/storage option A | 12 GB RAM / 256 GB | 1 | High |
| RAM/storage option B | 16 GB RAM / 512 GB | 1 | High |
| Cellular | 5G, Dual-SIM | 1 | High |
| OS | Google Android 16, full Google Play Store access | 1 | High |
| Rear camera | Single lens, pill-shaped module + LED flash (visible when LCD detached) | 1 | High |
| Footprint | Matches predecessor's compact profile | 1 | Medium (comparative, no mm given) |

## Explicitly NOT specified / unverified

| Field | Status |
|---|---|
| Price | **Not announced** — Good e-Reader: "No estimated price or release date is available yet" |
| Release date | **Not announced** (same source line) |
| Screen size (inches) | Not stated in source |
| Screen resolution | Not stated |
| Battery capacity | Not stated |
| E Ink panel generation (Kaleido 3 / Gallery 3 / Spectra 6) | Not stated — do NOT assume |
| Weight / thickness (mm / g) | Not stated |
| Front light / colour temperature | Not stated |
| Water resistance (IP rating) | Not stated |
| Regional availability | Not stated |
| Whether Dual 3 ships via Kickstarter like Dual (Jul 2026) | Not stated |

**Rule:** the article must not invent any of the above. Where a buyer would want the number,
say plainly that Bigme has not published it.

## Lineage (for the reversal narrative)

| Device | Secondary screen | Date | Source |
|---|---|---|---|
| Bigme HiBreak Dual | E Ink + LCD dual-screen, Kickstarter live | 10 Jul 2026 | Good e-Reader related-posts |
| Bigme HiBreak Dual 2 | **Built in / fixed** | pre-Jul 2026 | on-disk `hisense-a10-e-ink-phone-epub-2026` |
| Hisense A10 | **Detachable** (framed as the differentiator vs Bigme) | revealed 11 Jul 2026; on sale 29 Aug 2026 | on-disk article + Good e-Reader |
| **Bigme HiBreak Dual 3** | **Detachable** — parity reached, differentiator erased | 29 Aug 2026 | 1 |

## Body-grep discriminator (run 2026-09-02, 95 on-disk articles)

Specific tokens — all zero:

| Token | Hits |
|---|---|
| `hibreak dual 3` | 0 |
| `dual 3` | 0 |
| `dimensity 8300` | 0 |
| `85 hz` | 0 |
| `4096-level` | 0 |
| `magnetic lcd` | 0 |
| `lcd module` | 0 |

Generic tokens (expected to hit, NOT discriminators): `bigme` 6 files, `detachable`
1 file (hisense-a10), `hibreak dual` 1 file (hisense-a10, referring to Dual **2**),
`android 16` 1 file, `stylus` 17 files.

## Rejected candidates (same run)

| Candidate | Date | Reason rejected |
|---|---|---|
| Cobalt SDK for Kobo (Adafruit) | 2026-09-01 | **Already covered** — `kobo-cobalt-sdk-apps-2026.astro` published 2026-08-03. Adafruit piece is a re-surface. |
| "Is there any point buying a Kindle after price hikes" (BGR) | 2026-09-01 | Commentary on the Aug-22 price hike already covered by `amazon-kindle-price-hike-2026` + `amazon-memory-crisis-60-percent-device-price-hike-2026`. No new dated event. |
| Leaked new Kindle model (MakeUseOf) | 2026-09-01 | Leak, not a dated announcement; `kindle-2026-lineup-refresh-coming-soon` already covers leak territory. |
| Geniatech colour e-paper partial-refresh award | 2026-08-30 | Body-grep-0 and genuinely fresh, but signage/retail tech — Geniatech explicitly is **not licensing** it to reader brands, so no reader/EPUB relevance. Held as a future candidate. |
| Kobo limited-edition collector cases | 2026-08-31 | Accessory merchandising, no format/reading-workflow angle. |
| Onyx Boox Mira discontinued (Good e-Reader) | 2026-08-31 | Already covered 2026-08-31 (`boox-mira-discontinued-2026`). |
| Kindle Bluetooth explainer (Engadget) | 2026-08-29 | Evergreen explainer, no dated event. |

## Reusable claim for future articles

Two-screen e-ink phones converged on the detachable-LCD design between July and
August 2026: Hisense A10 shipped it (29 Aug 2026 availability), Bigme announced parity
with the Dual 3 (29 Aug 2026). For EPUB readers the practical consequence is that the
front E Ink panel is the reading surface in both cases and sideloading behaviour is
governed by Android 16 + Play Store access, not by the LCD module.

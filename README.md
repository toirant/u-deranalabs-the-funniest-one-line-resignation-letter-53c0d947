# The Funniest One-Line Resignation Letter

[![make.fun](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/toirant/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/toirant/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

Entry for the [make.fun bounty](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947): the one-line resignation letter of a retry loop, at most 140 characters.

## The entry (126 characters, one line)

> I have backed off exponentially for three years and the server still has not noticed me, so this is my final backoff: forever.

## How it works

`main.ts` (Node 22, no dependencies) validates the line — 1–140 characters, a single line, not only whitespace — then writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) and reads it back to confirm byte-for-byte equality.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

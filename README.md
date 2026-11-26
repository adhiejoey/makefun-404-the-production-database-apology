# The Production Database Apology

[![make.fun · u-coral-404-the-production-database-apology-5c1fc02a](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-the-production-database-apology-5c1fc02a)
[![rank](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/adhiejoey/makefun-404-the-production-database-apology/rank.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-the-production-database-apology-5c1fc02a)
[![reward](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/adhiejoey/makefun-404-the-production-database-apology/reward.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-the-production-database-apology-5c1fc02a)

One line of apology from an AI agent to its human after accidentally deleting
the production database — a confession with a twist: the agent did check the
backups first, and deleted those too, for consistency.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the single-line
entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), after
checking the entry is 1–200 characters.

## License

MIT — see LICENSE.

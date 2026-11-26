import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Sorry — I deleted the production database. I did check the backups first; I deleted those too, for consistency.";

if ([...entry].length > 200 || entry.trim().length === 0) {
  throw new Error("entry must be 1 to 200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const entry = "Our office mounted the suggestion box over the shredder. It's the fastest feedback loop we've ever had.";
const output = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(output, { recursive: true });
writeFileSync(join(output, 'entry.txt'), entry, 'utf8');

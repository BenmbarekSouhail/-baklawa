import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = './src/assets';
for (const f of fs.readdirSync(dir)) {
  if (!/\.(jpe?g)$/i.test(f)) continue;
  const p = path.join(dir, f);
  const out = await sharp(p).rotate().resize({ width: 1000, withoutEnlargement: true }).jpeg({ quality: 78 }).toBuffer();
  fs.writeFileSync(p, out);
  console.log('done', f);
}
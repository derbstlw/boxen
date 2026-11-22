// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: process.env.ASTRO_SITE || 'https://ac-einigkeit-elmshorn.de',
  base: process.env.ASTRO_BASE || '/',
});

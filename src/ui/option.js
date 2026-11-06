// START > OPTION in generated worlds: FireRed's option window (pokefirered
// option_menu.c: a title window over a list window, each row's label on the left and its current choice on the right in
// red, left and right change it). Rows from modes.js optionRows: LANGUAGE, KEEP INVENTORY, MUSIC, etc.
import { VW, VH, FG, SH, drawWindow, cursorArrow } from '../ui.js';
import { drawText, textWidth } from '../font.js';

const RED = '#e83828', RED_SH = '#f8b8a8';   // FireRed's option choice colour
const DIFFS = ['peaceful', 'easy', 'normal', 'hard'];
const DIFFS_ES = { PEACEFUL: 'PACÍFICO', EASY: 'FÁCIL', NORMAL: 'NORMAL', HARD: 'DIFÍCIL' };

const ROW_LABELS_ES = {
  'LANGUAGE': 'IDIOMA',
  'KEEP INVENTORY': 'GUARDAR INV.',
  'MUSIC': 'MÚSICA',
  'WILD POKéMON': 'POKÉMON SALV.',
  'DIFFICULTY': 'DIFICULTAD',
  'MINIMAP': 'MINIMAPA',
};

// rows: ['LANGUAGE', 'KEEP INVENTORY', 'MUSIC', 'WILD POKéMON', 'DIFFICULTY', 'MINIMAP'] (any subset);
// io: { lang(), setLang(l), keepInv(), setKeepInv(on), music(), setMusic(on), wild(), setWild(on),
//       diff(), setDiff(d), minimap(), setMinimap(on), isEs(), sfx }
export class OptionWindow {
  constructor(rows, io) {
    this.rows = Array.isArray(rows) && rows.length ? rows.slice() : ['LANGUAGE', 'KEEP INVENTORY', 'MUSIC'];
    this.io = io || {}; this.cursor = 0; this.done = false; this.t = 0;
  }
  value(row) {
    const io = this.io;
    const es = io.isEs && io.isEs();
    if (row === 'LANGUAGE' || row === 'IDIOMA') {
      return (io.lang ? io.lang() : 'ESPAÑOL').toUpperCase();
    }
    if (row === 'KEEP INVENTORY' || row === 'GUARDAR INV.') {
      const on = io.keepInv ? io.keepInv() : true;
      return on ? (es ? 'SÍ' : 'ON') : (es ? 'NO' : 'OFF');
    }
    if (row === 'MUSIC' || row === 'MÚSICA') {
      const on = io.music && io.music();
      return on ? (es ? 'SÍ' : 'ON') : (es ? 'NO' : 'OFF');
    }
    if (row === 'WILD POKéMON' || row === 'POKÉMON SALV.') {
      const on = io.wild && io.wild();
      return on ? (es ? 'SÍ' : 'ON') : (es ? 'NO' : 'OFF');
    }
    if (row === 'DIFFICULTY' || row === 'DIFICULTAD') {
      const d = String((io.diff && io.diff()) || 'normal').toUpperCase();
      return es ? (DIFFS_ES[d] || d) : d;
    }
    if (row === 'MINIMAP' || row === 'MINIMAPA') {
      const on = io.minimap && io.minimap();
      return on ? (es ? 'SÍ' : 'ON') : (es ? 'NO' : 'OFF');
    }
    return '';
  }
  change(row, dir) {
    const io = this.io;
    if (row === 'LANGUAGE' || row === 'IDIOMA') {
      if (io.setLang) {
        const cur = (io.lang ? io.lang() : 'ESPAÑOL').toUpperCase();
        io.setLang(cur === 'ESPAÑOL' ? 'ENGLISH' : 'ESPAÑOL');
      }
    } else if (row === 'KEEP INVENTORY' || row === 'GUARDAR INV.') {
      if (io.setKeepInv) io.setKeepInv(!io.keepInv());
    } else if (row === 'MUSIC' || row === 'MÚSICA') {
      if (io.setMusic) io.setMusic(!io.music());
    } else if (row === 'WILD POKéMON' || row === 'POKÉMON SALV.') {
      if (io.setWild) io.setWild(!io.wild());
    } else if (row === 'MINIMAP' || row === 'MINIMAPA') {
      if (io.setMinimap) io.setMinimap(!(io.minimap && io.minimap()));
    } else if (row === 'DIFFICULTY' || row === 'DIFICULTAD') {
      if (io.setDiff) {
        const i = Math.max(0, DIFFS.indexOf(io.diff()));
        io.setDiff(DIFFS[(i + (dir < 0 ? DIFFS.length - 1 : 1)) % DIFFS.length]);
      }
    } else return;
    if (io.sfx) io.sfx.move();
  }
  update(dt, input) {
    try {
      this.t += dt;
      if (this.done) return;
      const n = this.rows.length, s = this.io.sfx;
      if (input.just('b') || input.just('start')) { this.done = true; if (s) s.cancel(); return; }
      if (input.just('up')) { this.cursor = (this.cursor + n - 1) % n; if (s) s.move(); }
      if (input.just('down')) { this.cursor = (this.cursor + 1) % n; if (s) s.move(); }
      const row = this.rows[this.cursor];
      if (input.just('left')) this.change(row, -1);
      else if (input.just('right') || input.just('a')) this.change(row, 1);
    } catch (e) { console.error(e); this.done = true; }
  }
  draw(ctx) {
    try {
      const es = this.io.isEs && this.io.isEs();
      drawWindow(ctx, 0, 0, VW, 32);
      drawText(ctx, es ? 'OPCIONES' : 'OPTION', 12, 8, FG, SH);
      const h = this.rows.length * 16 + 12;
      drawWindow(ctx, 0, 32, VW, Math.max(h, VH - 32));
      this.rows.forEach((row, i) => {
        const y = 38 + i * 16, v = this.value(row);
        const label = es ? (ROW_LABELS_ES[row] || row) : row;
        drawText(ctx, label, 18, y, FG, SH);
        drawText(ctx, v, VW - 18 - textWidth(v), y, RED, RED_SH);
        if (i === this.cursor) cursorArrow(ctx, 9, y + 3);
      });
    } catch (e) { console.error(e); this.done = true; }
  }
}

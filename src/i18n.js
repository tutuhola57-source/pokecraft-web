// PokéCRAFT Internationalization (i18n) Engine - Clean-Room Implementation
// Default language: Spanish ('es'), with full fallback support for English ('en').

let currentLang = (() => {
  try {
    const saved = localStorage.getItem('pokecraft-lang');
    if (saved === 'en' || saved === 'es') return saved;
  } catch (e) {}
  return 'es'; // Spanish by default
})();

// Set global reference for accessibility across non-module scripts
if (typeof window !== 'undefined') {
  window.__pokeLang = currentLang;
}

const listeners = new Set();

export function getLanguage() {
  return currentLang;
}

export function setLanguage(lang) {
  if (lang !== 'es' && lang !== 'en') return;
  if (currentLang === lang) return;
  currentLang = lang;
  try {
    localStorage.setItem('pokecraft-lang', lang);
  } catch (e) {}
  if (typeof window !== 'undefined') {
    window.__pokeLang = lang;
  }
  listeners.forEach((fn) => {
    try { fn(currentLang); } catch (err) { console.error('i18n listener error:', err); }
  });
}

export function onLanguageChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

// ---------------------------------------------------------------- Move Names (Official Gen 1-3 Spanish Localization)
export const MOVE_NAMES = {
  POUND: { es: 'DESTRUCTOR', en: 'POUND' },
  KARATE_CHOP: { es: 'GOLPE KÁRATE', en: 'KARATE CHOP' },
  DOUBLE_SLAP: { es: 'DOBLEBOFETÓN', en: 'DOUBLE SLAP' },
  THUNDER_PUNCH: { es: 'PUÑO TRUENO', en: 'THUNDER PUNCH' },
  SCRATCH: { es: 'ARAÑAZO', en: 'SCRATCH' },
  VICE_GRIP: { es: 'AGARRE', en: 'VICE GRIP' },
  GUST: { es: 'TORNADO', en: 'GUST' },
  WING_ATTACK: { es: 'ATAQUE ALA', en: 'WING ATTACK' },
  FLY: { es: 'VUELO', en: 'FLY' },
  BIND: { es: 'ATADURA', en: 'BIND' },
  SLAM: { es: 'ATIZO', en: 'SLAM' },
  VINE_WHIP: { es: 'LÁTIGO CEPA', en: 'VINE WHIP' },
  STOMP: { es: 'PISOTÓN', en: 'STOMP' },
  DOUBLE_KICK: { es: 'DOBLE PATADA', en: 'DOUBLE KICK' },
  SAND_ATTACK: { es: 'ATAQUE ARENA', en: 'SAND ATTACK' },
  HEADBUTT: { es: 'GOLPE CABEZA', en: 'HEADBUTT' },
  HORN_ATTACK: { es: 'CORNADA', en: 'HORN ATTACK' },
  FURY_ATTACK: { es: 'ATAQUE FURIA', en: 'FURY ATTACK' },
  TACKLE: { es: 'PLACAJE', en: 'TACKLE' },
  BODY_SLAM: { es: 'GOLPE CUERPO', en: 'BODY SLAM' },
  WRAP: { es: 'REPETICIÓN', en: 'WRAP' },
  TAKE_DOWN: { es: 'DERRIBO', en: 'TAKE DOWN' },
  DOUBLE_EDGE: { es: 'DOBLE FILO', en: 'DOUBLE-EDGE' },
  TAIL_WHIP: { es: 'LÁTIGO', en: 'TAIL WHIP' },
  POISON_STING: { es: 'PICOTAZO VEN', en: 'POISON STING' },
  LEER: { es: 'MALICIOSO', en: 'LEER' },
  BITE: { es: 'MORDISCO', en: 'BITE' },
  GROWL: { es: 'GRUÑIDO', en: 'GROWL' },
  SING: { es: 'CANTO', en: 'SING' },
  SUPERSONIC: { es: 'SUPERSÓNICO', en: 'SUPERSONIC' },
  SONIC_BOOM: { es: 'BOMBA SÓNICA', en: 'SONIC BOOM' },
  ACID: { es: 'ÁCIDO', en: 'ACID' },
  EMBER: { es: 'ASCUAS', en: 'EMBER' },
  FLAMETHROWER: { es: 'LANZALLAMAS', en: 'FLAMETHROWER' },
  WATER_GUN: { es: 'PISTOLA AGUA', en: 'WATER GUN' },
  HYDRO_PUMP: { es: 'HIDROBOMBA', en: 'HYDRO PUMP' },
  ICE_BEAM: { es: 'RAYO HIELO', en: 'ICE BEAM' },
  PSYBEAM: { es: 'PSICORRAYO', en: 'PSYBEAM' },
  BUBBLE_BEAM: { es: 'RAYO BURBUJA', en: 'BUBBLE BEAM' },
  AURORA_BEAM: { es: 'RAYO AURORA', en: 'AURORA BEAM' },
  HYPER_BEAM: { es: 'HÍPER RAYO', en: 'HYPER BEAM' },
  PECK: { es: 'PICOTAZO', en: 'PECK' },
  DRILL_PECK: { es: 'PICO TALADRO', en: 'DRILL PECK' },
  SUBMISSION: { es: 'SUMISIÓN', en: 'SUBMISSION' },
  SEISMIC_TOSS: { es: 'MOV. SÍSMICO', en: 'SEISMIC TOSS' },
  ABSORB: { es: 'ABSORCIÓN', en: 'ABSORB' },
  MEGA_DRAIN: { es: 'MEGAAGOTAR', en: 'MEGA DRAIN' },
  GROWTH: { es: 'DESARROLLO', en: 'GROWTH' },
  RAZOR_LEAF: { es: 'HOJA AFILADA', en: 'RAZOR LEAF' },
  POISON_POWDER: { es: 'POLVO VENENO', en: 'POISON POWDER' },
  STUN_SPORE: { es: 'PARALIZADOR', en: 'STUN SPORE' },
  SLEEP_POWDER: { es: 'SOMNÍFERO', en: 'SLEEP POWDER' },
  STRING_SHOT: { es: 'DISPARO DEMORA', en: 'STRING SHOT' },
  DRAGON_RAGE: { es: 'FURIA DRAGÓN', en: 'DRAGON RAGE' },
  FIRE_SPIN: { es: 'GIRO FUEGO', en: 'FIRE SPIN' },
  THUNDER_SHOCK: { es: 'IMPACTRUENO', en: 'THUNDER SHOCK' },
  THUNDERBOLT: { es: 'RAYO', en: 'THUNDERBOLT' },
  THUNDER_WAVE: { es: 'ONDA TRUENO', en: 'THUNDER WAVE' },
  THUNDER: { es: 'TRUENO', en: 'THUNDER' },
  ROCK_THROW: { es: 'LANZAROCAS', en: 'ROCK THROW' },
  DIG: { es: 'EXCAVAR', en: 'DIG' },
  CONFUSION: { es: 'CONFUSIÓN', en: 'CONFUSION' },
  PSYCHIC: { es: 'PSÍQUICO', en: 'PSYCHIC' },
  HYPNOSIS: { es: 'HIPNOSIS', en: 'HYPNOSIS' },
  MEDITATE: { es: 'MEDITACIÓN', en: 'MEDITATE' },
  AGILITY: { es: 'AGILIDAD', en: 'AGILITY' },
  QUICK_ATTACK: { es: 'ATAQUE RÁPIDO', en: 'QUICK ATTACK' },
  RAGE: { es: 'FURIA', en: 'RAGE' },
  NIGHT_SHADE: { es: 'TINIEBLAS', en: 'NIGHT SHADE' },
  SCREECH: { es: 'CHIRRIDO', en: 'SCREECH' },
  DOUBLE_TEAM: { es: 'DOBLE EQUIPO', en: 'DOUBLE TEAM' },
  HARDEN: { es: 'FORTALEZA', en: 'HARDEN' },
  SMOKESCREEN: { es: 'PANTALLA HUMO', en: 'SMOKESCREEN' },
  CONFUSE_RAY: { es: 'RAYO CONFUSO', en: 'CONFUSE RAY' },
  WITHDRAW: { es: 'REFUGIO', en: 'WITHDRAW' },
  BARRIER: { es: 'BARRERA', en: 'BARRIER' },
  HAZE: { es: 'NIEBLA', en: 'HAZE' },
  REFLECT: { es: 'REFLEJO', en: 'REFLECT' },
  FOCUS_ENERGY: { es: 'FOCO ENERGÍA', en: 'FOCUS ENERGY' },
  SELF_DESTRUCT: { es: 'AUTODESTRUCCIÓN', en: 'SELF-DESTRUCT' },
  LICK: { es: 'LENGÜETAZO', en: 'LICK' },
  SMOG: { es: 'POLUCIÓN', en: 'SMOG' },
  SLUDGE: { es: 'RESIDUOS', en: 'SLUDGE' },
  BONE_CLUB: { es: 'HUESO', en: 'BONE CLUB' },
  WATERFALL: { es: 'CASCADA', en: 'WATERFALL' },
  CLAMP: { es: 'TENAZA', en: 'CLAMP' },
  SWIFT: { es: 'RAPIDEZ', en: 'SWIFT' },
  CONSTRICT: { es: 'RESTRICCIÓN', en: 'CONSTRICT' },
  KINESIS: { es: 'QUINETOSIS', en: 'KINESIS' },
  GLARE: { es: 'DESLUMBRAR', en: 'GLARE' },
  POISON_GAS: { es: 'GAS VENENOSO', en: 'POISON GAS' },
  LEECH_LIFE: { es: 'CHUPAVIDAS', en: 'LEECH LIFE' },
  BUBBLE: { es: 'BURBUJA', en: 'BUBBLE' },
  SPORE: { es: 'ESPORA', en: 'SPORE' },
  SPLASH: { es: 'SALPICADURA', en: 'SPLASH' },
  ACID_ARMOR: { es: 'ARMADURA ÁCIDA', en: 'ACID ARMOR' },
  CRABHAMMER: { es: 'MARTILLAZO', en: 'CRABHAMMER' },
  EXPLOSION: { es: 'EXPLOSIÓN', en: 'EXPLOSION' },
  FURY_SWIPES: { es: 'GOLPES FURIA', en: 'FURY SWIPES' },
  BONEMERANG: { es: 'HUESOMERANG', en: 'BONEMERANG' },
  HYPER_FANG: { es: 'HÍPER COLMILLO', en: 'HYPER FANG' },
  TRI_ATTACK: { es: 'TRIATAQUE', en: 'TRI ATTACK' },
  SLASH: { es: 'CUCHILLADA', en: 'SLASH' },
  PROTECT: { es: 'PROTECCIÓN', en: 'PROTECT' },
  SCARY_FACE: { es: 'CARA SUSTO', en: 'SCARY FACE' },
  FAINT_ATTACK: { es: 'FINTA', en: 'FAINT ATTACK' },
  SLUDGE_BOMB: { es: 'BOMBA LODO', en: 'SLUDGE BOMB' },
  MUD_SLAP: { es: 'BOFETÓN LODO', en: 'MUD-SLAP' },
  ZAP_CANNON: { es: 'ELECTROCAÑÓN', en: 'ZAP CANNON' },
  ICY_WIND: { es: 'VIENTO HIELO', en: 'ICY WIND' },
  BONE_RUSH: { es: 'ATAQUE ÓSEO', en: 'BONE RUSH' },
  GIGA_DRAIN: { es: 'GIGADRENADO', en: 'GIGA DRAIN' },
  SPARK: { es: 'CHISPA', en: 'SPARK' },
  DYNAMIC_PUNCH: { es: 'PUÑODINÁMICO', en: 'DYNAMIC PUNCH' },
  MEGAHORN: { es: 'MEGAMUERNO', en: 'MEGAHORN' },
  DRAGON_BREATH: { es: 'DRAGOALIENTO', en: 'DRAGON BREATH' },
  PURSUIT: { es: 'PERSECUCIÓN', en: 'PURSUIT' },
  SWEET_SCENT: { es: 'DULCE AROMA', en: 'SWEET SCENT' },
  IRON_TAIL: { es: 'COLA FÉRREA', en: 'IRON TAIL' },
  METAL_CLAW: { es: 'GARRA METAL', en: 'METAL CLAW' },
  CROSS_CHOP: { es: 'TAJO CRUZADO', en: 'CROSS CHOP' },
  CRUNCH: { es: 'TRITURAR', en: 'CRUNCH' },
  SHADOW_BALL: { es: 'BOLA SOMBRA', en: 'SHADOW BALL' },
  FEATHER_DANCE: { es: 'DANZA PLUMA', en: 'FEATHER DANCE' },
  HYPER_VOICE: { es: 'VOZARRÓN', en: 'HYPER VOICE' },
  POISON_FANG: { es: 'COLMILLO VEN', en: 'POISON FANG' },
  METEOR_MASH: { es: 'PUÑO METEORO', en: 'METEOR MASH' },
  ASTONISH: { es: 'IMPRESIÓN', en: 'ASTONISH' },
  AIR_CUTTER: { es: 'AIRE AFILADO', en: 'AIR CUTTER' },
  METAL_SOUND: { es: 'ECO METÁLICO', en: 'METAL SOUND' },
  SIGNAL_BEAM: { es: 'DOBLE RAYO', en: 'SIGNAL BEAM' },
  SHADOW_PUNCH: { es: 'PUÑO SOMBRA', en: 'SHADOW PUNCH' },
  SAND_TOMB: { es: 'BUCLE ARENA', en: 'SAND TOMB' },
  AERIAL_ACE: { es: 'GOLPE AÉREO', en: 'AERIAL ACE' },
  ICICLE_SPEAR: { es: 'CARÁMBANO', en: 'ICICLE SPEAR' },
  MUD_SHOT: { es: 'DISPARO LODO', en: 'MUD SHOT' },
  DRAGON_DANCE: { es: 'DANZA DRAGÓN', en: 'DRAGON DANCE' },
  ROCK_BLAST: { es: 'PEDRADA', en: 'ROCK BLAST' },
  FIRE_PUNCH: { es: 'PUÑO FUEGO', en: 'FIRE PUNCH' },
  FIRE_BLAST: { es: 'LLAMARADA', en: 'FIRE BLAST' },
  AMNESIA: { es: 'AMNESIA', en: 'AMNESIA' },
  ROCK_SLIDE: { es: 'AVALANCHA', en: 'ROCK SLIDE' },
  EXTREME_SPEED: { es: 'VEL. EXTREMA', en: 'EXTREME SPEED' },
  HEAT_WAVE: { es: 'ONDA ÍGNEA', en: 'HEAT WAVE' },
  IRON_DEFENSE: { es: 'DEFENSA FÉRREA', en: 'IRON DEFENSE' },
  HOWL: { es: 'AULLIDO', en: 'HOWL' },
  BOUNCE: { es: 'BOTE', en: 'BOUNCE' },
  ROAR: { es: 'RUGIDO', en: 'ROAR' },
  OUTRAGE: { es: 'ENFADO', en: 'OUTRAGE' },
  DRAGON_CLAW: { es: 'GARRA DRAGÓN', en: 'DRAGON CLAW' },
  STRUGGLE: { es: 'COMBATE', en: 'STRUGGLE' },
  // Steve's Minecraft moves
  MC_SWORD: { es: 'ESPADA', en: 'SWORD' },
  MC_JUMP: { es: 'GOLPE CRÍTICO', en: 'CRIT JUMP' },
  MC_BOW: { es: 'FLECHAZO', en: 'BOW SHOT' },
  MC_AXE: { es: 'HACHAZO', en: 'AXE CHOP' },
  MC_SHIELD: { es: 'ESCUDO', en: 'SHIELD' },
  MC_POTION: { es: 'POCIÓN', en: 'POTION' },
};

export function tMove(keyOrName, fallback) {
  if (!keyOrName) return fallback || '';
  const key = String(keyOrName).toUpperCase().replace(/[\s-]/g, '_');
  const entry = MOVE_NAMES[key];
  if (entry) {
    return entry[currentLang] || entry.es || fallback || keyOrName;
  }
  return fallback || keyOrName;
}

// ---------------------------------------------------------------- Item Names (Minecraft & Pokémon)
export const ITEM_NAMES = {
  // Wood & Building
  oak_log: 'Tronco de roble',
  oak_planks: 'Madera de roble',
  oak_door: 'Puerta de roble',
  oak_fence: 'Valla de roble',
  oak_sapling: 'Brote de roble',
  cobblestone: 'Adoquín de roca',
  stone: 'Piedra',
  stone_bricks: 'Ladrillos de piedra',
  sand: 'Arena',
  dirt: 'Tierra',
  gravel: 'Grava',
  sandstone: 'Arenisca',
  glass: 'Cristal',
  obsidian: 'Obsidiana',
  bedrock: 'Piedra base',
  white_wool: 'Lana blanca',
  torch: 'Antorcha',
  white_bed: 'Cama blanca',
  chest: 'Cofre',
  crafting_table: 'Mesa de crafteo',
  furnace: 'Horno',
  campfire: 'Hoguera',
  ladder: 'Escalera',
  bookshelf: 'Librería',
  tnt: 'Dinamita (TNT)',

  // Ores & Ingots
  coal: 'Carbón',
  iron_ore: 'Mineral de hierro',
  iron_ingot: 'Lingote de hierro',
  gold_ore: 'Mineral de oro',
  gold_ingot: 'Lingote de oro',
  diamond: 'Diamante',
  diamond_ore: 'Mineral de diamante',
  netherite_ingot: 'Lingote de inframundita',
  redstone: 'Polvo de redstone',
  redstone_block: 'Bloque de redstone',
  flint: 'Sílex',
  stick: 'Palo',

  // Tools & Weapons
  wooden_sword: 'Espada de madera',
  wooden_pickaxe: 'Pico de madera',
  wooden_axe: 'Hacha de madera',
  wooden_shovel: 'Pala de madera',
  stone_sword: 'Espada de piedra',
  stone_pickaxe: 'Pico de piedra',
  stone_axe: 'Hacha de piedra',
  stone_shovel: 'Pala de piedra',
  iron_sword: 'Espada de hierro',
  iron_pickaxe: 'Pico de hierro',
  iron_axe: 'Hacha de hierro',
  iron_shovel: 'Pala de hierro',
  diamond_sword: 'Espada de diamante',
  diamond_pickaxe: 'Pico de diamante',
  diamond_axe: 'Hacha de diamante',
  diamond_shovel: 'Pala de diamante',
  netherite_sword: 'Espada de inframundita',
  netherite_pickaxe: 'Pico de inframundita',
  bow: 'Arco',
  arrow: 'Flecha',
  shield: 'Escudo',
  shears: 'Tijeras',
  fishing_rod: 'Caña de pescar',
  water_bucket: 'Cubo con agua',
  lava_bucket: 'Cubo con lava',
  bucket: 'Cubo',

  // Armor
  iron_helmet: 'Casco de hierro',
  iron_chestplate: 'Peto de hierro',
  iron_leggings: 'Pantalones de hierro',
  iron_boots: 'Botas de hierro',
  diamond_helmet: 'Casco de diamante',
  diamond_chestplate: 'Peto de diamante',
  diamond_leggings: 'Pantalones de diamante',
  diamond_boots: 'Botas de diamante',

  // Food
  apple: 'Manzana',
  golden_apple: 'Manzana dorada',
  bread: 'Pan',
  cooked_beef: 'Filete cocinado',
  raw_beef: 'Ternera cruda',
  cooked_porkchop: 'Chuleta cocinada',
  raw_porkchop: 'Chuleta cruda',
  cooked_salmon: 'Salmón cocinado',
  raw_salmon: 'Salmón crudo',
  cooked_cod: 'Bacalao cocinado',
  raw_cod: 'Bacalao crudo',
  carrot: 'Zanahoria',
  potato: 'Patata',
  baked_potato: 'Patata asada',
  cookie: 'Galleta',
  sweet_berries: 'Bayas dulces',

  // Pokémon items
  poke_ball: 'Poké Ball',
  great_ball: 'Super Ball',
  ultra_ball: 'Ultra Ball',
  master_ball: 'Master Ball',
  potion: 'Poción',
  super_potion: 'Superpoción',
  hyper_potion: 'Hiperpoción',
  max_potion: 'Poción Máxima',
  revive: 'Revivir',
  max_revive: 'Revivir Máximo',
  antidote: 'Antídoto',
  burn_heal: 'Antiquemar',
  ice_heal: 'Antihielo',
  awakening: 'Despertar',
  parlyz_heal: 'Antiparalizador',
  full_restore: 'Restaura Todo',
  full_heal: 'Cura Total',
  escape_rope: 'Cuerda Huida',
  repel: 'Repelente',
  super_repel: 'Superrepelente',
  max_repel: 'Repelente Máximo',
  rare_candy: 'Caramelo Raro',
  bicycle: 'Bicicleta',
  town_map: 'Mapa de Kanto',
  old_rod: 'Caña Vieja',
  good_rod: 'Caña Buena',
  super_rod: 'Supercaña',
  fire_stone: 'Piedra Fuego',
  water_stone: 'Piedra Agua',
  thunder_stone: 'Piedra Trueno',
  leaf_stone: 'Piedra Hoja',
  moon_stone: 'Piedra Lunar',
  sun_stone: 'Piedra Solar',
};

export function tItem(id, fallback) {
  if (currentLang === 'es' && ITEM_NAMES[id]) {
    return ITEM_NAMES[id];
  }
  return fallback || id;
}

// ---------------------------------------------------------------- Main UI & Dialogues Dictionary
export const DICTIONARY = {
  es: {
    // Menu START
    'POKéDEX': 'POKÉDEX',
    'POKéMON': 'POKÉMON',
    'BAG': 'MOCHILA',
    'STEVE': 'FICHA STEVE',
    'SAVE': 'GUARDAR',
    'CO-OP': 'MULTIJUGADOR',
    'EXIT': 'SALIR',
    'OPTION': 'OPCIONES',
    'TITLE': 'TÍTULO',
    'MAP': 'MAPA',

    // Menu Hints
    'A device that records POKéMON secrets.': 'Dispositivo que registra los secretos de los POKÉMON.',
    'Check and organize POKéMON in your party.': 'Revisa y organiza los POKÉMON de tu equipo.',
    'Open your inventory.': 'Abre tu inventario de objetos y bloques.',
    'Check your money and other game data.': 'Consulta tus medallas, dinero y datos de juego.',
    'Save your game.': 'Guarda tu partida en el archivo actual.',
    'Play with friends.': 'Juega en cooperativo con otros amigos.',
    'Close this menu window.': 'Cierra esta ventana del menú.',
    'Adjusts various game settings.': 'Ajusta diversas opciones y configuraciones del juego.',
    'Return to the title screen.': 'Regresa a la pantalla principal del juego.',
    'Check the map of places you have been.': 'Consulta el mapa de la región de Kanto.',

    // Options UI
    'LANGUAGE': 'IDIOMA',
    'KEEP INVENTORY': 'GUARDAR INV.',
    'MUSIC': 'MÚSICA',
    'WILD POKéMON': 'POKÉMON SALV.',
    'DIFFICULTY': 'DIFICULTAD',
    'MINIMAP': 'MINIMAPA',
    'ON': 'SÍ',
    'OFF': 'NO',
    'YES': 'SÍ',
    'NO': 'NO',
    'PEACEFUL': 'PACÍFICO',
    'EASY': 'FÁCIL',
    'NORMAL': 'NORMAL',
    'HARD': 'DIFÍCIL',

    // Death & Respawn
    'You died!': '¡Has muerto!',
    'Score: ': 'Puntuación: ',
    'Respawn': 'Reaparecer',
    'Title Screen': 'Pantalla del Título',
    'Inventory kept safe!': '¡Inventario protegido!',
    'Inventory Protected!': '¡Inventario Protegido!',
    'You have no home bed or charged respawn anchor, or it was obstructed': 'No tienes cama ni ancla de reaparición válida, o estaba obstruida.',

    // Battle Interface & Actions
    'What will': '¿Qué debería',
    'FIGHT': 'LUCHAR',
    'RUN': 'HUIR',
    'A critical hit!': '¡Un golpe crítico!',
    "It's super effective!": '¡Es muy eficaz!',
    "It's not very effective.": 'No es muy eficaz...',
    'Got away safely!': '¡Escapaste sin problemas!',
    "Can't escape!": '¡No puedes escapar!',
    '1, 2 and... ... ... Poof!': '1, 2 y... ... ... ¡Puf!',
    'All your POKéMON have fainted!': '¡Todos tus POKÉMON se han debilitado!',
    'STEVE is out of usable POKéMON!': '¡A STEVE no le quedan POKÉMON útiles!',
    'STEVE blacked out!': '¡STEVE perdió el conocimiento!',

    // Nurse Joy
    'Welcome to our POKéMON CENTER!': '¡Te damos la bienvenida al CENTRO POKÉMON!',
    'Would you like me to heal your\nPOKéMON back to perfect health?': '¿Quieres que curemos a tus\nPOKÉMON hasta que recuperen su vitalidad?',
    "Okay, I'll take your POKéMON for a\nfew seconds.": 'Muy bien. Me quedo con tus POKÉMON unos segundos.',
    "Thank you for waiting.\nWe've restored your POKéMON to": 'Gracias por esperar.\nHemos restaurado la salud de tus POKÉMON',
    'full health.': 'al máximo.',
    'We hope to see you again!': '¡Esperamos volver a verte!',

    // Mom
    'Take care now!': '¡Cuídate mucho!',

    // Mart Clerk
    'Hi, there!\nMay I help you?': '¡Hola!\n¿En qué puedo ayudarte?',
    'Please come again!': '¡Vuelve cuando quieras!',
    'BUY': 'COMPRAR',
    'SELL': 'VENDER',
    'SEE YA!': 'SALIR',

    // Professor Oak
    'OAK: Hello there, STEVE!\nWelcome to the world of POKéMON!': 'OAK: ¡Hola, STEVE!\n¡Te doy la bienvenida al mundo de POKÉMON!',
    'Wild monsters and Creepers roam this world\nas soon as the sun sets.': 'Monstruos hostiles y Creepers merodean por este mundo\nen cuanto se pone el sol.',
    'It is far too dangerous to explore alone.\nYou need a POKéMON companion!': 'Es demasiado peligroso explorar en soledad.\n¡Necesitas un compañero POKÉMON!',
    'Do you choose CHARMANDER,\nthe Fire Lizard POKéMON?': '¿Eliges a CHARMANDER,\nel POKÉMON Lagartija de Fuego?',
    'Do you choose SQUIRTLE,\nthe Tiny Turtle POKéMON?': '¿Eliges a SQUIRTLE,\nel POKÉMON Tortuguita de Agua?',
    'Do you choose BULBASAUR,\nthe Seed POKéMON?': '¿Eliges a BULBASAUR,\nel POKÉMON Semilla de Planta?',
    'Then do you choose PIKACHU,\nthe Electric Mouse POKéMON?': '¿Entonces eliges a PIKACHU,\nel POKÉMON Ratón Eléctrico?',
    'OAK: Take your time!\nThink carefully before choosing.': 'OAK: ¡Tómate tu tiempo!\nPiensa bien antes de tomar tu decisión.',
    'I also gave you 10 POKé BALLS and\n5 POTIONS to support your survival!': '¡También te entrego 10 POKÉ BALLS y\n5 POCIONES para apoyar tu supervivencia!',
    'Feed and care for your POKéMON, and build\na shelter before nightfall. Good luck!': 'Alimenta a tu POKÉMON y construye un refugio\nantes de que caiga la noche. ¡Buena suerte!',
    'Wild monsters and Creepers become active\nonce night falls across Kanto!': '¡Los monstruos hostiles y Creepers despiertan\ncuando cae la noche en Kanto!',
    'Build a safe shelter, craft strong gear, and\nchallenge the 8 Gym Leaders!': '¡Construye un refugio seguro, forja equipo\ny desafía a los 8 Líderes de Gimnasio!',

    // Blue (Rival)
    'Gramps is standing right over there! Talk to PROF. OAK to choose your starter POKéMON!': '¡El abuelo está justo ahí! ¡Habla con el PROF. OAK para elegir tu POKÉMON inicial!',
    "Don't get cocky just because you can craft swords and pickaxes!": '¡No te creas invencible solo porque puedes forjar espadas y picos!',
    'I am going to become the greatest POKéMON Master in all of Kanto!': '¡Yo me convertiré en el mejor Maestro POKÉMON de todo Kanto!',

    // Signs
    'PALLET TOWN\nShades of your journey await!': 'PUEBLO PALETA\n¡Un lienzo en blanco te aguarda!',
    'VIRIDIAN CITY\nThe Eternally Green Paradise': 'CIUDAD VERDE\nEl paraíso eternamente verde',
    'PEWTER CITY\nA Stone Gray City': 'CIUDAD PLATEADA\nLa ciudad de piedra grisácea',
    'CERULEAN CITY\nA Mysterious, Blue Aura': 'CIUDAD CELESTE\nUn misterioso halo azul',
    'VERMILION CITY\nThe Port of Exquisite Sunsets': 'CIUDAD CARMÍN\nEl puerto de los ocasos dorados',
    'LAVENDER TOWN\nThe Noble Purple Town': 'PUEBLO LAVANDA\nEl noble pueblo púrpura',
    'CELADON CITY\nThe City of Rainbow Dreams': 'CIUDAD AZULONA\nLa ciudad de ensueño arcoíris',
    "FUCHSIA CITY\nBehold! It's Passion Pink!": 'CIUDAD FUCSIA\n¡Mira! ¡Rosa de pura pasión!',
    'SAFFRON CITY\nShining Golden Land of Commerce': 'CIUDAD AZAFRÁN\nTierra dorada del comercio',
    'CINNABAR ISLAND\nThe Fiery Town of Burning Desire': 'ISLA CANELA\nLa ardiente isla del fuego',
    'ROUTE 1\nPALLET TOWN - VIRIDIAN CITY': 'RUTA 1\nPUEBLO PALETA - CIUDAD VERDE',
    'ROUTE 2\nVIRIDIAN CITY - PEWTER CITY': 'RUTA 2\nCIUDAD VERDE - CIUDAD PLATEADA',
    'ROUTE 22\nTO POKéMON LEAGUE': 'RUTA 22\nHACIA LA LIGA POKÉMON',
    'INDIGO PLATEAU\nPOKéMON LEAGUE HQ': 'MESETA AÑIL\nSEDE DE LA LIGA POKÉMON',

    // Gym Leaders
    "My rock-hard willpower will never crumble!\nYou have proven your survival strength!": '¡Mi voluntad de roca pura jamás se romperá!\n¡Has demostrado tu temple de supervivencia!',
    "BROCK: True miners and trainers carve their\nown path through stone! Head to Cerulean!": 'BROCK: ¡Los auténticos mineros y entrenadores tallan su\npropio camino en la roca! ¡Ve a Celeste!',
    "My policy is an all-out offensive with Water!\nYou navigated through Kanto's waterways like a master!": '¡Mi lema es una ofensiva acuática implacable!\n¡Has surcado las aguas de Kanto como un maestro!',
    "MISTY: Keep your fishing rod ready! The waters\nof Kanto hide wonderful creatures.": 'MISTY: ¡Ten lista tu caña de pescar! Las aguas\nde Kanto ocultan criaturas asombrosas.',
    "Ten-hut! Electric power and redstone circuits\nwill always triumph! You've got real guts, kid!": '¡Firmes! ¡El poder eléctrico y los circuitos de redstone\nsiempre triunfan! ¡Tienes valor, chico!',
    "LT. SURGE: Wire up your redstone traps!\nDon't let Creepers sneak up on your base!": 'LT. SURGE: ¡Prepara tus trampas de redstone!\n¡No dejes que los Creepers se acerquen a tu base!',
    "Hello... The beauty of nature and flowers\nflourishes here. Please accept these gifts of the wild.": 'Hola... La hermosura de la naturaleza y las flores\nflorece aquí. Por favor, acepta estos dones del bosque.',
    "ERIKA: May your orchards grow fruitful and\nyour journey remain peaceful.": 'ERIKA: Que tus cultivos crezcan fértiles y\ntu viaje continúe en armonía.',
    "Fwahahaha! A ninja master excels at both\nstealth and archery! You conquered my domain!": '¡Jajajaja! ¡Un maestro ninja domina tanto el\nsigilo como la arquería! ¡Has conquistado mi templo!',
    "KOGA: Strike silently from the shadows, trainer!": 'KOGA: ¡Ataca en silencio desde las sombras, entrenador!',

    // Save & Prompt Questions
    'Would you like to save the game?': '¿Quieres guardar la partida?',
    'The save failed.': 'Error al guardar la partida.',
    "You can't save in a friend's world.": 'No puedes guardar en el mundo de un amigo.',
    'Return to the title screen?': '¿Volver a la pantalla del título?',
    'Any progress since your last save\nwill be lost.': 'Se perderá todo el progreso no guardado\ndesde la última vez.',
    'Your friends will leave the game.': 'Tus amigos abandonarán la partida.',

    // Badges
    BOULDERBADGE: 'MEDALLA ROCA',
    CASCADEBADGE: 'MEDALLA CASCADA',
    THUNDERBADGE: 'MEDALLA TRUENO',
    RAINBOWBADGE: 'MEDALLA ARCOÍRIS',
    SOULBADGE: 'MEDALLA ALMA',
    MARSHBADGE: 'MEDALLA PANTANO',
    VOLCANOBADGE: 'MEDALLA VOLCÁN',
    EARTHBADGE: 'MEDALLA TIERRA',

    // Creative Tabs
    'Building Blocks': 'Bloques de construcción',
    'Decoration Blocks': 'Decoración',
    'Redstone': 'Redstone',
    'Transportation': 'Transporte',
    'Miscellaneous': 'Varios',
    'Foodstuffs': 'Alimentos',
    'Tools & Utilities': 'Herramientas',
    'Combat': 'Combate',
    'Brewing': 'Alquimia',
    'Materials': 'Materiales',
    'Survival Inventory': 'Inventario de supervivencia',
  },
  en: {}
};

// ---------------------------------------------------------------- Core Translate Function
export function t(key, fallback) {
  if (!key) return fallback !== undefined ? fallback : '';
  const text = String(key);

  if (currentLang === 'en') {
    return fallback !== undefined ? fallback : text;
  }

  // Exact match
  if (DICTIONARY.es[text]) {
    return DICTIONARY.es[text];
  }

  // Dynamic template matching
  // "What will {name} do?"
  if (text.endsWith(' do?') && text.includes('What will')) {
    const match = text.match(/What will\s+(.+)\s+do\?/);
    if (match) return `¿Qué debería hacer ${match[1]}?`;
  }
  if (text.endsWith(' do?')) {
    const name = text.replace(' do?', '').trim();
    return `hacer ${name}?`;
  }

  // "Wild {name} appeared!" or "Wild {name}\nappeared!"
  if (text.startsWith('Wild ') && text.includes('appeared!')) {
    const name = text.replace(/^Wild\s+/, '').replace(/[\n\s]*appeared!$/, '').trim();
    return `¡Un ${name} salvaje apareció!`;
  }

  // "Wild {name}\nfainted!" or "{name}\nfainted!"
  if (text.includes('fainted!')) {
    if (text.startsWith('Wild ')) {
      const name = text.replace(/^Wild\s+/, '').replace(/[\n\s]*fainted!$/, '').trim();
      return `¡El ${name} salvaje se debilitó!`;
    }
    const name = text.replace(/[\n\s]*fainted!$/, '').trim();
    return `¡${name} se debilitó!`;
  }

  // "Go! {name}!"
  if (text.startsWith('Go! ') && text.endsWith('!')) {
    const name = text.slice(4, -1);
    return `¡Adelante, ${name}!`;
  }

  // "{name} learned\n{move}!"
  if (text.includes(' learned\n')) {
    const parts = text.split(' learned\n');
    const move = parts[1].replace(/!$/, '');
    return `¡${parts[0]} aprendió ${tMove(move)}!`;
  }

  // "{name} is trying to\nlearn {move}."
  if (text.includes(' is trying to\nlearn ')) {
    const parts = text.split(' is trying to\nlearn ');
    const move = parts[1].replace(/\.$/, '');
    return `¡${parts[0]} intenta aprender ${tMove(move)}!`;
  }

  // "{name} is already\nin battle!"
  if (text.includes(' is already\nin battle!')) {
    const name = text.replace(' is already\nin battle!', '').trim();
    return `¡${name} ya está en combate!`;
  }

  // "{name} died" or other death messages
  if (text.endsWith(' died')) {
    const name = text.slice(0, -5);
    return `${name} ha muerto`;
  }
  if (text.includes(' starved to death')) {
    const name = text.replace(' starved to death', '');
    return `${name} murió de hambre`;
  }
  if (text.includes(' fell out of the world')) {
    const name = text.replace(' fell out of the world', '');
    return `${name} cayó al vacío`;
  }
  if (text.includes(' was blown up by Creeper')) {
    const name = text.replace(' was blown up by Creeper', '');
    return `${name} fue explotado por un Creeper`;
  }
  if (text.includes(' drowned')) {
    const name = text.replace(' drowned', '');
    return `${name} se ahogó`;
  }
  if (text.includes(' burned to death')) {
    const name = text.replace(' burned to death', '');
    return `${name} ardió hasta morir`;
  }

  // Mom rest
  if (text.startsWith('MOM: ') && text.includes('take a quick rest')) {
    const match = text.match(/MOM:\s*(.+?)!\s*You should take a quick rest/);
    const name = match ? match[1] : 'STEVE';
    return `MAMÁ: ¡${name}!\nDeberías tomarte un breve descanso.`;
  }
  if (text.startsWith('MOM: ') && text.includes('looking great')) {
    return 'MAMÁ: ¡Genial! Tú y tus\nPOKÉMON se ven con mucha energía.';
  }

  // Oak starter dialogue
  if (text.includes('Excellent choice!\nYou received ')) {
    const match = text.match(/You received\s+(.+?)\s+\(Lv\s*(\d+)\)!/);
    if (match) {
      return `OAK: ¡Excelente elección!\n¡Has recibido a ${match[1]} (Nv ${match[2]})!`;
    }
  }

  // Save notification
  if (text.endsWith(' saved the game.')) {
    const name = text.replace(' saved the game.', '');
    return `${name} guardó la partida.`;
  }

  // Badge received
  if (text.includes(' received the ')) {
    const match = text.match(/(.+?)\s+received the\s+([A-Z]+)!/);
    if (match) {
      const badgeKey = match[2];
      const badgeEs = DICTIONARY.es[badgeKey] || badgeKey;
      return `¡${match[1]} recibió la ${badgeEs}!`;
    }
  }

  // Rival Blue
  if (text.startsWith('BLUE: Yo, ')) {
    const match = text.match(/BLUE: Yo,\s*(.+?)!\s*What are you staring at me for\?/);
    const name = match ? match[1] : 'STEVE';
    return `AZUL: ¡Hey, ${name}! ¿Qué estás mirando?`;
  }
  if (text.startsWith('BLUE: Hmph! So you picked ')) {
    const match = text.match(/BLUE: Hmph! So you picked\s+(.+?)!/);
    const mon = match ? match[1] : 'un POKÉMON';
    return `AZUL: ¡Hmph! ¡Así que elegiste a ${mon}!`;
  }

  return fallback !== undefined ? fallback : text;
}

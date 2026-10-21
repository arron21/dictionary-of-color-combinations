// Auto-generated complete Sanzo Wada Color Dictionary dataset (Vol. 1 & Vol. 2)
// Volume 1: Haishoku Soukan (1933) — 348 classic combinations (+ 12 archival 4-color plates = 360)
// Volume 2: Haishoku Soukan B-hen & Shinsaku Zuanshu (1935–1937) — 72 Seasonal Monthly Palettes + 18 Applied Design & Fashion Motifs
// Total Unique Swatches: 171 colors with English (Ridgway), Traditional Japanese (Kanji & Romaji), HEX, RGB, CMYK, HSL, and CIE LAB values.

export interface WadaColor {
  index: number;
  name: string;
  slug: string;
  ja: string;
  romaji: string;
  meaning: string;
  hex: string;
  rgb: [number, number, number];
  cmyk: [number, number, number, number];
  hsl: [number, number, number];
  lab: [number, number, number];
  swatchGroup: number;
  swatchGroupName: string;
  swatchGroupNameJa: string;
  isBright: boolean;
  vol1Combos: number[];
  vol2Combos: number[];
}

export interface WadaCombination {
  id: string;
  number: number;
  volume: 1 | 2;
  subType?: 'seasons' | 'applied';
  month?: string;
  monthJa?: string;
  season?: string;
  seasonJa?: string;
  category?: string;
  categoryJa?: string;
  section: string;
  sectionJa: string;
  title: string;
  titleJa: string;
  note?: string;
  colors: string[]; // array of color slugs
}

export const SWATCH_GROUPS = {
  "0": {
    "en": "Red / Pink / Brown",
    "ja": "赤・紅・茶系"
  },
  "1": {
    "en": "Yellow / Orange / Ochre",
    "ja": "黄・橙・黄土系"
  },
  "2": {
    "en": "Green / Olive / Celadon",
    "ja": "緑・鶸・青磁系"
  },
  "3": {
    "en": "Blue / Indigo / Turquoise",
    "ja": "青・藍・浅葱系"
  },
  "4": {
    "en": "Purple / Violet / Mauve",
    "ja": "紫・藤・菫系"
  },
  "5": {
    "en": "White / Grey / Black",
    "ja": "白・鼠・墨系"
  }
} as const;

export const MONTHS_META = [
  {
    "num": 1,
    "id": "january",
    "en": "January",
    "ja": "睦月 (Mutsuki)",
    "season": "Winter",
    "seasonJa": "冬",
    "note": "Crisp New Year frost, auspicious pine, and early plum buds"
  },
  {
    "num": 2,
    "id": "february",
    "en": "February",
    "ja": "如月 (Kisaragi)",
    "season": "Winter",
    "seasonJa": "冬",
    "note": "Plum blossoms breaking through late winter snow and warm earth"
  },
  {
    "num": 3,
    "id": "march",
    "en": "March",
    "ja": "弥生 (Yayoi)",
    "season": "Spring",
    "seasonJa": "春",
    "note": "Early cherry blossoms, peach festivals, and awakening shoots"
  },
  {
    "num": 4,
    "id": "april",
    "en": "April",
    "ja": "卯月 (Uzuki)",
    "season": "Spring",
    "seasonJa": "春",
    "note": "Full sakura bloom, misty mountain skies, and fresh foliage"
  },
  {
    "num": 5,
    "id": "may",
    "en": "May",
    "ja": "皐月 (Satsuki)",
    "season": "Spring",
    "seasonJa": "春",
    "note": "Wisteria trellises, iris ponds, and vibrant young bamboo"
  },
  {
    "num": 6,
    "id": "june",
    "en": "June",
    "ja": "水無月 (Minazuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "note": "Rainy season (tsuyu) hydrangeas, celadon moss, and cool slate"
  },
  {
    "num": 7,
    "id": "july",
    "en": "July",
    "ja": "文月 (Fumizuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "note": "Tanabata starlight, morning glories, and coastal sea breeze"
  },
  {
    "num": 8,
    "id": "august",
    "en": "August",
    "ja": "葉月 (Hazuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "note": "High summer sun, deep cicada forests, and evening festival lanterns"
  },
  {
    "num": 9,
    "id": "September",
    "en": "September",
    "ja": "長月 (Nagatsuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "note": "Harvest moon, bush clover, and early autumn amber"
  },
  {
    "num": 10,
    "id": "october",
    "en": "October",
    "ja": "神無月 (Kannazuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "note": "Peak maple foliage (momiji), ripe persimmons, and deep indigo skies"
  },
  {
    "num": 11,
    "id": "november",
    "en": "November",
    "ja": "霜月 (Shimotsuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "note": "First frost on fallen leaves, tea ceremony earth, and quiet slate"
  },
  {
    "num": 12,
    "id": "december",
    "en": "December",
    "ja": "師走 (Shiwasu)",
    "season": "Winter",
    "seasonJa": "冬",
    "note": "Winter solstice camellias, snow-laden pine, and deep charcoal ink"
  }
] as const;

export const WADA_COLORS: WadaColor[] = [
  {
    "index": 1,
    "name": "Pale Purplish Vinaceous",
    "slug": "pale-purplish-vinaceous",
    "ja": "薄紅藤",
    "romaji": "Usubenifuji",
    "meaning": "Pale crimson wisteria",
    "hex": "#FDE2DD",
    "rgb": [
      253,
      226,
      221
    ],
    "cmyk": [
      0,
      13,
      8,
      0
    ],
    "hsl": [
      9,
      89,
      93
    ],
    "lab": [
      91.94,
      9.17,
      5.8
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [],
    "vol2Combos": [
      36
    ]
  },
  {
    "index": 2,
    "name": "Hermosa Pink",
    "slug": "hermosa-pink",
    "ja": "桜色",
    "romaji": "Sakura-iro",
    "meaning": "Cherry blossom petal pink",
    "hex": "#F9C1CE",
    "rgb": [
      249,
      193,
      206
    ],
    "cmyk": [
      0,
      30,
      6,
      0
    ],
    "hsl": [
      346,
      82,
      87
    ],
    "lab": [
      83.43,
      22.14,
      1.64
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      176,
      227,
      273
    ],
    "vol2Combos": [
      4,
      20,
      49,
      75,
      77
    ]
  },
  {
    "index": 3,
    "name": "Corinthian Pink",
    "slug": "corinthian-pink",
    "ja": "退紅",
    "romaji": "Arazome",
    "meaning": "Washed safflower pink",
    "hex": "#F8B6BA",
    "rgb": [
      248,
      182,
      186
    ],
    "cmyk": [
      0,
      35,
      15,
      0
    ],
    "hsl": [
      356,
      83,
      84
    ],
    "lab": [
      80.35,
      25.37,
      7.88
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      27,
      43,
      87,
      97,
      128,
      169,
      174,
      206,
      246,
      254,
      264,
      342
    ],
    "vol2Combos": [
      27,
      48,
      66
    ]
  },
  {
    "index": 4,
    "name": "Cameo Pink",
    "slug": "cameo-pink",
    "ja": "薄紅梅",
    "romaji": "Usukōbai",
    "meaning": "Pale plum blossom",
    "hex": "#E0B3B6",
    "rgb": [
      224,
      179,
      182
    ],
    "cmyk": [
      10,
      32,
      19,
      0
    ],
    "hsl": [
      356,
      42,
      79
    ],
    "lab": [
      77.22,
      17.2,
      4.95
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      101,
      105,
      116,
      120,
      165,
      231
    ],
    "vol2Combos": [
      14,
      30,
      62,
      79
    ]
  },
  {
    "index": 5,
    "name": "Pale Cinammon-Pink",
    "slug": "pale-cinammon-pink",
    "ja": "白練",
    "romaji": "Shironeri",
    "meaning": "Soft bleached silk blush",
    "hex": "#F4DECA",
    "rgb": [
      244,
      222,
      202
    ],
    "cmyk": [
      3,
      12,
      19,
      0
    ],
    "hsl": [
      29,
      66,
      87
    ],
    "lab": [
      89.9,
      5.46,
      12.63
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [],
    "vol2Combos": [
      43
    ]
  },
  {
    "index": 6,
    "name": "Fawn",
    "slug": "fawn",
    "ja": "小鹿色",
    "romaji": "Kojika-iro",
    "meaning": "Fawn fur / warm taupe",
    "hex": "#D1B0A7",
    "rgb": [
      209,
      176,
      167
    ],
    "cmyk": [
      18,
      31,
      30,
      0
    ],
    "hsl": [
      13,
      31,
      74
    ],
    "lab": [
      74.49,
      11.19,
      9.39
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      18,
      125,
      308
    ],
    "vol2Combos": [
      11,
      24,
      27,
      28,
      60,
      71
    ]
  },
  {
    "index": 7,
    "name": "Pale Ecru-Drab",
    "slug": "pale-ecru-drab",
    "ja": "灰桜",
    "romaji": "Haizakura",
    "meaning": "Ashen cherry blossom",
    "hex": "#C5B7B0",
    "rgb": [
      197,
      183,
      176
    ],
    "cmyk": [
      23,
      25,
      27,
      0
    ],
    "hsl": [
      20,
      15,
      73
    ],
    "lab": [
      75.45,
      4.31,
      5.6
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [],
    "vol2Combos": [
      46,
      49
    ]
  },
  {
    "index": 8,
    "name": "Light Brown Drab",
    "slug": "light-brown-drab",
    "ja": "梅鼠",
    "romaji": "Ume-nezumi",
    "meaning": "Plum-tinted warm grey",
    "hex": "#B59392",
    "rgb": [
      181,
      147,
      146
    ],
    "cmyk": [
      8,
      30,
      20,
      25
    ],
    "hsl": [
      2,
      19,
      64
    ],
    "lab": [
      64.12,
      13.02,
      5.34
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      35,
      68,
      185,
      191,
      223,
      239,
      244,
      268,
      285,
      321
    ],
    "vol2Combos": [
      35,
      54,
      79
    ]
  },
  {
    "index": 9,
    "name": "Coral Red",
    "slug": "coral-red",
    "ja": "珊瑚色",
    "romaji": "Sango-iro",
    "meaning": "Precious sea coral",
    "hex": "#F58E84",
    "rgb": [
      245,
      142,
      132
    ],
    "cmyk": [
      0,
      55,
      40,
      0
    ],
    "hsl": [
      5,
      85,
      74
    ],
    "lab": [
      70.28,
      39.29,
      23.19
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      92,
      123,
      320,
      332
    ],
    "vol2Combos": [
      47,
      89
    ]
  },
  {
    "index": 10,
    "name": "Fresh Color",
    "slug": "fresh-color",
    "ja": "宍色",
    "romaji": "Shishi-iro",
    "meaning": "Warm flesh / apricot blush",
    "hex": "#F6917E",
    "rgb": [
      246,
      145,
      126
    ],
    "cmyk": [
      0,
      53,
      45,
      0
    ],
    "hsl": [
      9,
      87,
      73
    ],
    "lab": [
      70.96,
      37.48,
      27.3
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      240
    ],
    "vol2Combos": [
      15,
      35,
      56
    ]
  },
  {
    "index": 11,
    "name": "Grenadine Pink",
    "slug": "grenadine-pink",
    "ja": "甚三紅",
    "romaji": "Jinzamomi",
    "meaning": "Thrice-dyed safflower coral",
    "hex": "#F48067",
    "rgb": [
      244,
      128,
      103
    ],
    "cmyk": [
      0,
      62,
      58,
      0
    ],
    "hsl": [
      11,
      87,
      68
    ],
    "lab": [
      66.89,
      43.83,
      34.7
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      6,
      21,
      112,
      166,
      193,
      201,
      230,
      300,
      315,
      341
    ],
    "vol2Combos": [
      27
    ]
  },
  {
    "index": 12,
    "name": "Eosine Pink",
    "slug": "eosine-pink",
    "ja": "桃園色",
    "romaji": "Momozono-iro",
    "meaning": "Peach orchard pink",
    "hex": "#F37F94",
    "rgb": [
      243,
      127,
      148
    ],
    "cmyk": [
      0,
      63,
      23,
      0
    ],
    "hsl": [
      349,
      83,
      73
    ],
    "lab": [
      67.25,
      46.68,
      10.3
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      34,
      59,
      90,
      108,
      134,
      153,
      197,
      242,
      248,
      276,
      287,
      314,
      327,
      336,
      351
    ],
    "vol2Combos": [
      24,
      25,
      28,
      38
    ]
  },
  {
    "index": 13,
    "name": "Spinel Red",
    "slug": "spinel-red",
    "ja": "撫子色",
    "romaji": "Nadeshiko-iro",
    "meaning": "Fringed pink dianthus",
    "hex": "#F27291",
    "rgb": [
      242,
      114,
      145
    ],
    "cmyk": [
      0,
      70,
      21,
      0
    ],
    "hsl": [
      345,
      83,
      70
    ],
    "lab": [
      64.53,
      52.19,
      8.29
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      14,
      147,
      165,
      184,
      195,
      224,
      277
    ],
    "vol2Combos": [
      11,
      21,
      78
    ]
  },
  {
    "index": 14,
    "name": "Old Rose",
    "slug": "old-rose",
    "ja": "長春色",
    "romaji": "Chōshun-iro",
    "meaning": "China rose / old rose",
    "hex": "#D46D7A",
    "rgb": [
      212,
      109,
      122
    ],
    "cmyk": [
      15,
      70,
      40,
      0
    ],
    "hsl": [
      352,
      54,
      63
    ],
    "lab": [
      58.77,
      42.13,
      12.31
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      55,
      162,
      260,
      265
    ],
    "vol2Combos": [
      4,
      6,
      36
    ]
  },
  {
    "index": 15,
    "name": "Eugenia Red 1",
    "slug": "eugenia-red-1",
    "ja": "紅梅色",
    "romaji": "Kōbai-iro",
    "meaning": "Red plum blossom",
    "hex": "#E2625E",
    "rgb": [
      226,
      98,
      94
    ],
    "cmyk": [
      7,
      76,
      60,
      0
    ],
    "hsl": [
      2,
      69,
      63
    ],
    "lab": [
      58.37,
      50.75,
      28.54
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      284
    ],
    "vol2Combos": [
      18,
      24
    ]
  },
  {
    "index": 16,
    "name": "Eugenia Red 2",
    "slug": "eugenia-red-2",
    "ja": "唐紅",
    "romaji": "Karakurenai",
    "meaning": "Crimson safflower",
    "hex": "#DA525D",
    "rgb": [
      218,
      82,
      93
    ],
    "cmyk": [
      0,
      80,
      50,
      10
    ],
    "hsl": [
      355,
      65,
      59
    ],
    "lab": [
      54.27,
      54.7,
      23.66
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      17,
      77,
      252,
      262,
      270,
      280,
      282,
      325
    ],
    "vol2Combos": [
      10,
      47
    ]
  },
  {
    "index": 17,
    "name": "Raw Sienna",
    "slug": "raw-sienna",
    "ja": "琥珀色",
    "romaji": "Kohaku-iro",
    "meaning": "Raw sienna / amber resin",
    "hex": "#BB7125",
    "rgb": [
      187,
      113,
      37
    ],
    "cmyk": [
      18,
      58,
      100,
      12
    ],
    "hsl": [
      30,
      67,
      44
    ],
    "lab": [
      55.06,
      25.55,
      52.17
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      3,
      13,
      33,
      70,
      86,
      130,
      131,
      182,
      243,
      247,
      252,
      255,
      268,
      269,
      279,
      293,
      298,
      319,
      327
    ],
    "vol2Combos": [
      2,
      21,
      56
    ]
  },
  {
    "index": 18,
    "name": "Vinaceous Tawny",
    "slug": "vinaceous-tawny",
    "ja": "赭",
    "romaji": "Sohō",
    "meaning": "Reddish earth ochre",
    "hex": "#C56127",
    "rgb": [
      197,
      97,
      39
    ],
    "cmyk": [
      17,
      72,
      100,
      6
    ],
    "hsl": [
      22,
      67,
      46
    ],
    "lab": [
      53.23,
      38.18,
      50.19
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      40,
      85,
      244
    ],
    "vol2Combos": []
  },
  {
    "index": 19,
    "name": "Jasper Red",
    "slug": "jasper-red",
    "ja": "赤丹",
    "romaji": "Akani",
    "meaning": "Jasper vermilion",
    "hex": "#EB5324",
    "rgb": [
      235,
      83,
      36
    ],
    "cmyk": [
      2,
      83,
      100,
      0
    ],
    "hsl": [
      14,
      83,
      53
    ],
    "lab": [
      56.81,
      58.41,
      57.63
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      155,
      194,
      216,
      219
    ],
    "vol2Combos": [
      69,
      72,
      74
    ]
  },
  {
    "index": 20,
    "name": "Spectrum Red",
    "slug": "spectrum-red",
    "ja": "紅緋",
    "romaji": "Benihi",
    "meaning": "Pure scarlet / spectrum red",
    "hex": "#E31F26",
    "rgb": [
      227,
      31,
      38
    ],
    "cmyk": [
      5,
      100,
      100,
      0
    ],
    "hsl": [
      358,
      78,
      51
    ],
    "lab": [
      49.61,
      70.93,
      50.08
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      257,
      266,
      301,
      322,
      354
    ],
    "vol2Combos": [
      5,
      11,
      38,
      53,
      66,
      77
    ]
  },
  {
    "index": 21,
    "name": "Red Orange",
    "slug": "red-orange",
    "ja": "朱色",
    "romaji": "Shu-iro",
    "meaning": "Cinnabar vermilion",
    "hex": "#DD4027",
    "rgb": [
      221,
      64,
      39
    ],
    "cmyk": [
      9,
      90,
      100,
      0
    ],
    "hsl": [
      8,
      73,
      51
    ],
    "lab": [
      51.83,
      60.64,
      50.88
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      31,
      164,
      179,
      241,
      264
    ],
    "vol2Combos": [
      57,
      64,
      85
    ]
  },
  {
    "index": 22,
    "name": "Etruscan Red",
    "slug": "etruscan-red",
    "ja": "弁柄色",
    "romaji": "Bengara-iro",
    "meaning": "Red iron oxide / terracotta",
    "hex": "#C55347",
    "rgb": [
      197,
      83,
      71
    ],
    "cmyk": [
      16,
      80,
      74,
      6
    ],
    "hsl": [
      6,
      52,
      53
    ],
    "lab": [
      50.75,
      45.88,
      31.05
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": true,
    "vol1Combos": [
      25,
      47,
      97,
      137,
      152,
      185,
      275
    ],
    "vol2Combos": [
      65,
      81
    ]
  },
  {
    "index": 23,
    "name": "Burnt Sienna",
    "slug": "burnt-sienna",
    "ja": "樺色",
    "romaji": "Kaba-iro",
    "meaning": "Birch bark burnt sienna",
    "hex": "#AE5224",
    "rgb": [
      174,
      82,
      36
    ],
    "cmyk": [
      22,
      76,
      100,
      15
    ],
    "hsl": [
      20,
      66,
      41
    ],
    "lab": [
      46.44,
      36.23,
      43.79
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      198,
      242,
      263,
      285,
      286,
      297,
      312,
      333,
      343
    ],
    "vol2Combos": [
      4
    ]
  },
  {
    "index": 24,
    "name": "Ocher Red",
    "slug": "ocher-red",
    "ja": "代赭",
    "romaji": "Taisha",
    "meaning": "Burnt ochre red",
    "hex": "#AB544D",
    "rgb": [
      171,
      84,
      77
    ],
    "cmyk": [
      18,
      73,
      63,
      20
    ],
    "hsl": [
      4,
      38,
      49
    ],
    "lab": [
      46.82,
      35.74,
      21.85
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      199,
      283
    ],
    "vol2Combos": [
      17,
      86
    ]
  },
  {
    "index": 25,
    "name": "Scarlet",
    "slug": "scarlet",
    "ja": "緋色",
    "romaji": "Hi-iro",
    "meaning": "Flame scarlet",
    "hex": "#CB2F43",
    "rgb": [
      203,
      47,
      67
    ],
    "cmyk": [
      10,
      95,
      72,
      7
    ],
    "hsl": [
      352,
      62,
      49
    ],
    "lab": [
      46.55,
      61.53,
      28.9
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      136,
      308,
      332
    ],
    "vol2Combos": [
      15
    ]
  },
  {
    "index": 26,
    "name": "Carmine",
    "slug": "carmine",
    "ja": "洋紅",
    "romaji": "Yōkō",
    "meaning": "Cochineal carmine",
    "hex": "#CC1236",
    "rgb": [
      204,
      18,
      54
    ],
    "cmyk": [
      0,
      100,
      75,
      16
    ],
    "hsl": [
      348,
      84,
      44
    ],
    "lab": [
      44.29,
      67.19,
      33.71
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      39,
      117,
      122,
      154,
      225,
      232,
      307,
      313
    ],
    "vol2Combos": []
  },
  {
    "index": 27,
    "name": "Indian Lake",
    "slug": "indian-lake",
    "ja": "臙脂",
    "romaji": "Enji",
    "meaning": "Rouge / lac lake crimson",
    "hex": "#C53C69",
    "rgb": [
      197,
      60,
      105
    ],
    "cmyk": [
      12,
      89,
      35,
      9
    ],
    "hsl": [
      340,
      54,
      50
    ],
    "lab": [
      47.54,
      57.21,
      6.68
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      299,
      331,
      352
    ],
    "vol2Combos": [
      11,
      60,
      68
    ]
  },
  {
    "index": 28,
    "name": "Rosolanc Purple",
    "slug": "rosolanc-purple",
    "ja": "牡丹色",
    "romaji": "Botan-iro",
    "meaning": "Tree peony magenta",
    "hex": "#B73F74",
    "rgb": [
      183,
      63,
      116
    ],
    "cmyk": [
      30,
      90,
      33,
      0
    ],
    "hsl": [
      334,
      49,
      48
    ],
    "lab": [
      45.94,
      52.37,
      -3.16
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      48,
      144,
      170,
      204,
      277,
      346,
      355
    ],
    "vol2Combos": [
      45
    ]
  },
  {
    "index": 29,
    "name": "Pomegranate Purple",
    "slug": "pomegranite-purple",
    "ja": "石榴色",
    "romaji": "Zakuro-iro",
    "meaning": "Pomegranate seed crimson",
    "hex": "#B71F57",
    "rgb": [
      183,
      31,
      87
    ],
    "cmyk": [
      23,
      100,
      50,
      6
    ],
    "hsl": [
      338,
      71,
      42
    ],
    "lab": [
      41.43,
      60.96,
      8.4
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      220,
      271,
      349
    ],
    "vol2Combos": [
      35,
      63,
      84,
      90
    ]
  },
  {
    "index": 30,
    "name": "Hydrangea Red",
    "slug": "hydrangea-red",
    "ja": "紫陽花紅",
    "romaji": "Ajisaibeni",
    "meaning": "Crimson hydrangea",
    "hex": "#A94151",
    "rgb": [
      169,
      65,
      81
    ],
    "cmyk": [
      38,
      90,
      70,
      0
    ],
    "hsl": [
      351,
      44,
      46
    ],
    "lab": [
      43.07,
      44.35,
      14.18
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      142
    ],
    "vol2Combos": [
      49
    ]
  },
  {
    "index": 31,
    "name": "Brick Red",
    "slug": "brick-red",
    "ja": "煉瓦色",
    "romaji": "Renga-iro",
    "meaning": "Kiln-fired brick red",
    "hex": "#A84222",
    "rgb": [
      168,
      66,
      34
    ],
    "cmyk": [
      22,
      84,
      100,
      18
    ],
    "hsl": [
      14,
      66,
      40
    ],
    "lab": [
      42.46,
      41.51,
      40.69
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      37,
      108,
      246,
      322,
      328
    ],
    "vol2Combos": []
  },
  {
    "index": 32,
    "name": "Carmine Red",
    "slug": "carmine-red",
    "ja": "紅",
    "romaji": "Kurenai",
    "meaning": "Pure safflower crimson",
    "hex": "#A62C37",
    "rgb": [
      166,
      44,
      55
    ],
    "cmyk": [
      25,
      95,
      80,
      16
    ],
    "hsl": [
      355,
      58,
      41
    ],
    "lab": [
      38.71,
      50.23,
      24.69
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      35,
      51,
      104,
      130,
      181,
      200,
      221,
      228,
      233,
      237,
      245,
      338
    ],
    "vol2Combos": [
      14,
      88
    ]
  },
  {
    "index": 33,
    "name": "Pompeian Red",
    "slug": "pompeian-red",
    "ja": "茜色",
    "romaji": "Akane-iro",
    "meaning": "Madder root red",
    "hex": "#AB2439",
    "rgb": [
      171,
      36,
      57
    ],
    "cmyk": [
      18,
      97,
      74,
      19
    ],
    "hsl": [
      351,
      65,
      41
    ],
    "lab": [
      38.86,
      54.81,
      23.84
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      30,
      71,
      120,
      212,
      311,
      324
    ],
    "vol2Combos": []
  },
  {
    "index": 34,
    "name": "Red",
    "slug": "red",
    "ja": "真紅",
    "romaji": "Shinku",
    "meaning": "Deep true crimson",
    "hex": "#A72144",
    "rgb": [
      167,
      33,
      68
    ],
    "cmyk": [
      30,
      100,
      70,
      10
    ],
    "hsl": [
      344,
      67,
      39
    ],
    "lab": [
      37.87,
      54.59,
      15.37
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      251,
      261
    ],
    "vol2Combos": [
      4,
      7,
      11
    ]
  },
  {
    "index": 35,
    "name": "Brown",
    "slug": "brown",
    "ja": "茶色",
    "romaji": "Cha-iro",
    "meaning": "Steeped tea leaf brown",
    "hex": "#7C4226",
    "rgb": [
      124,
      66,
      38
    ],
    "cmyk": [
      35,
      74,
      90,
      35
    ],
    "hsl": [
      20,
      53,
      32
    ],
    "lab": [
      35.07,
      23.47,
      28.57
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      110,
      121,
      145,
      161
    ],
    "vol2Combos": []
  },
  {
    "index": 36,
    "name": "Hay's Russet",
    "slug": "hay's-russet",
    "ja": "小豆色",
    "romaji": "Azuki-iro",
    "meaning": "Red azuki bean russet",
    "hex": "#793327",
    "rgb": [
      121,
      51,
      39
    ],
    "cmyk": [
      37,
      85,
      87,
      35
    ],
    "hsl": [
      9,
      51,
      31
    ],
    "lab": [
      31.24,
      30.66,
      23.51
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      58,
      82,
      95,
      152,
      186,
      231,
      249,
      304,
      314,
      336,
      345
    ],
    "vol2Combos": [
      81
    ]
  },
  {
    "index": 37,
    "name": "Vandyke Red",
    "slug": "vandyke-red",
    "ja": "紅檜皮",
    "romaji": "Benihiwada",
    "meaning": "Reddish cypress bark",
    "hex": "#82241F",
    "rgb": [
      130,
      36,
      31
    ],
    "cmyk": [
      32,
      95,
      95,
      33
    ],
    "hsl": [
      3,
      61,
      32
    ],
    "lab": [
      30.16,
      40.6,
      27.61
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      16,
      133,
      147,
      316,
      335
    ],
    "vol2Combos": [
      55
    ]
  },
  {
    "index": 38,
    "name": "Pansy Purple",
    "slug": "pansy-purple",
    "ja": "葡萄色",
    "romaji": "Ebi-iro",
    "meaning": "Deep vine grape purple",
    "hex": "#7D133A",
    "rgb": [
      125,
      19,
      58
    ],
    "cmyk": [
      34,
      100,
      60,
      34
    ],
    "hsl": [
      338,
      74,
      28
    ],
    "lab": [
      27.61,
      45.92,
      6.09
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      157,
      273
    ],
    "vol2Combos": [
      27
    ]
  },
  {
    "index": 39,
    "name": "Pale Burnt Lake",
    "slug": "pale-burnt-lake",
    "ja": "蘇芳樺",
    "romaji": "Suōkaba",
    "meaning": "Deep sappanwood lake",
    "hex": "#802626",
    "rgb": [
      128,
      38,
      38
    ],
    "cmyk": [
      25,
      90,
      80,
      40
    ],
    "hsl": [
      0,
      54,
      33
    ],
    "lab": [
      30.18,
      39.04,
      22.71
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      124,
      171,
      177,
      205,
      217,
      258,
      269,
      283
    ],
    "vol2Combos": [
      2
    ]
  },
  {
    "index": 40,
    "name": "Violet Red",
    "slug": "violet-red",
    "ja": "滅紫",
    "romaji": "Messhi",
    "meaning": "Subdued royal purple",
    "hex": "#642D5E",
    "rgb": [
      100,
      45,
      94
    ],
    "cmyk": [
      75,
      100,
      50,
      5
    ],
    "hsl": [
      307,
      38,
      28
    ],
    "lab": [
      27.77,
      30.39,
      -17.74
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      9
    ],
    "vol2Combos": []
  },
  {
    "index": 41,
    "name": "Vistoris Lake",
    "slug": "vistoris-lake",
    "ja": "海老茶",
    "romaji": "Ebicha",
    "meaning": "Spiny lobster maroon",
    "hex": "#6D4145",
    "rgb": [
      109,
      65,
      69
    ],
    "cmyk": [
      40,
      71,
      55,
      40
    ],
    "hsl": [
      355,
      25,
      34
    ],
    "lab": [
      33.09,
      20.3,
      6.1
    ],
    "swatchGroup": 0,
    "swatchGroupName": "Red / Pink / Brown",
    "swatchGroupNameJa": "赤・紅・茶系",
    "isBright": false,
    "vol1Combos": [
      63,
      91,
      165,
      226,
      290,
      337
    ],
    "vol2Combos": [
      10,
      28,
      34,
      58,
      73
    ]
  },
  {
    "index": 42,
    "name": "Sulphur Yellow",
    "slug": "sulphur-yellow",
    "ja": "硫黄色",
    "romaji": "Iō-iro",
    "meaning": "Soft mineral sulfur yellow",
    "hex": "#F5ECC2",
    "rgb": [
      245,
      236,
      194
    ],
    "cmyk": [
      4,
      4,
      28,
      0
    ],
    "hsl": [
      49,
      72,
      86
    ],
    "lab": [
      93.22,
      -1.73,
      21.65
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      52,
      72,
      80,
      104,
      132,
      135,
      151,
      208,
      246,
      254,
      270,
      294,
      296,
      310,
      315,
      320,
      321,
      326
    ],
    "vol2Combos": [
      1,
      21,
      26,
      40,
      55,
      63,
      68,
      78
    ]
  },
  {
    "index": 43,
    "name": "Sea-foam Yellow",
    "slug": "sea-foam-yellow",
    "ja": "蒸栗色",
    "romaji": "Mushikuri-iro",
    "meaning": "Steamed chestnut cream",
    "hex": "#F0E6BE",
    "rgb": [
      240,
      230,
      190
    ],
    "cmyk": [
      6,
      6,
      29,
      0
    ],
    "hsl": [
      48,
      62,
      84
    ],
    "lab": [
      91.33,
      -1.34,
      21.03
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [],
    "vol2Combos": [
      44,
      86
    ]
  },
  {
    "index": 44,
    "name": "Pale Lemon Yellow",
    "slug": "pale-lemon-yellow",
    "ja": "女郎花",
    "romaji": "Ominaeshi",
    "meaning": "Patrinia flower yellow",
    "hex": "#FFEFAE",
    "rgb": [
      255,
      239,
      174
    ],
    "cmyk": [
      0,
      4,
      38,
      0
    ],
    "hsl": [
      48,
      100,
      84
    ],
    "lab": [
      94.86,
      -0.14,
      34.09
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      3,
      31,
      60,
      76,
      99,
      109,
      111,
      169,
      185,
      195,
      203,
      228,
      241,
      261,
      272,
      281,
      290,
      292,
      336
    ],
    "vol2Combos": [
      13,
      23,
      54,
      66,
      72
    ]
  },
  {
    "index": 45,
    "name": "Naples Yellow",
    "slug": "naples-yellow",
    "ja": "藤黄",
    "romaji": "Tōō",
    "meaning": "Gamboge / Naples yellow",
    "hex": "#FBE6A0",
    "rgb": [
      251,
      230,
      160
    ],
    "cmyk": [
      2,
      7,
      44,
      0
    ],
    "hsl": [
      46,
      92,
      81
    ],
    "lab": [
      91.73,
      0.32,
      36.57
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      14,
      115,
      166,
      193,
      303,
      325
    ],
    "vol2Combos": [
      2,
      27,
      29,
      47,
      73
    ]
  },
  {
    "index": 46,
    "name": "Ivory Buff",
    "slug": "ivory-buff",
    "ja": "練色",
    "romaji": "Neri-iro",
    "meaning": "Glossed raw silk ivory",
    "hex": "#EBD3A2",
    "rgb": [
      235,
      211,
      162
    ],
    "cmyk": [
      8,
      15,
      40,
      0
    ],
    "hsl": [
      40,
      65,
      78
    ],
    "lab": [
      85.6,
      3.38,
      27.27
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      11,
      50,
      94,
      102,
      126,
      178,
      184,
      190,
      209,
      214,
      235,
      243,
      262,
      266,
      301,
      343
    ],
    "vol2Combos": [
      5,
      12,
      19,
      43,
      56,
      64,
      76,
      79,
      80,
      85,
      89
    ]
  },
  {
    "index": 47,
    "name": "Seashell Pink",
    "slug": "seashell-pink",
    "ja": "桜貝色",
    "romaji": "Sakuragai-iro",
    "meaning": "Cherry shell blush",
    "hex": "#FDD4BD",
    "rgb": [
      253,
      212,
      189
    ],
    "cmyk": [
      0,
      19,
      23,
      0
    ],
    "hsl": [
      22,
      94,
      87
    ],
    "lab": [
      88.13,
      12.09,
      17.27
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      45,
      84,
      88,
      113,
      150,
      176,
      194,
      276,
      334,
      351
    ],
    "vol2Combos": [
      1,
      14,
      25,
      34,
      60
    ]
  },
  {
    "index": 48,
    "name": "Light Pinkish Cinnamon",
    "slug": "light-pinkish-cinnamon",
    "ja": "薄香",
    "romaji": "Usukō",
    "meaning": "Pale clove incense",
    "hex": "#FCC79B",
    "rgb": [
      252,
      199,
      155
    ],
    "cmyk": [
      0,
      25,
      40,
      0
    ],
    "hsl": [
      27,
      94,
      80
    ],
    "lab": [
      84.21,
      15.63,
      29.81
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      317,
      353
    ],
    "vol2Combos": [
      2,
      4,
      59
    ]
  },
  {
    "index": 49,
    "name": "Pinkish Cinnamon",
    "slug": "pinkish-cinnamon",
    "ja": "丁子色",
    "romaji": "Chōji-iro",
    "meaning": "Clove spice cinnamon",
    "hex": "#EEB480",
    "rgb": [
      238,
      180,
      128
    ],
    "cmyk": [
      5,
      32,
      53,
      0
    ],
    "hsl": [
      28,
      76,
      72
    ],
    "lab": [
      77.85,
      17.23,
      34.75
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      78,
      161,
      175,
      232,
      258,
      263,
      292,
      305,
      310
    ],
    "vol2Combos": [
      2,
      14,
      66,
      80
    ]
  },
  {
    "index": 50,
    "name": "Cinnamon Buff",
    "slug": "cinnamon-buff",
    "ja": "伽羅色",
    "romaji": "Kyara-iro",
    "meaning": "Aloeswood buff",
    "hex": "#FDC57E",
    "rgb": [
      253,
      197,
      126
    ],
    "cmyk": [
      0,
      25,
      57,
      0
    ],
    "hsl": [
      34,
      97,
      74
    ],
    "lab": [
      83.53,
      14.74,
      43.67
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      23,
      127,
      137,
      180,
      210,
      234,
      246,
      323,
      344
    ],
    "vol2Combos": [
      22,
      26,
      45
    ]
  },
  {
    "index": 51,
    "name": "Cream Yellow",
    "slug": "cream-yellow",
    "ja": "刈安色",
    "romaji": "Kariyasu-iro",
    "meaning": "Miscanthus grass yellow",
    "hex": "#FDBF68",
    "rgb": [
      253,
      191,
      104
    ],
    "cmyk": [
      0,
      28,
      68,
      0
    ],
    "hsl": [
      35,
      97,
      70
    ],
    "lab": [
      81.81,
      16.47,
      51.98
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      122,
      192,
      215,
      226,
      267,
      278,
      294,
      295,
      300,
      302,
      304,
      311,
      329,
      342
    ],
    "vol2Combos": [
      42,
      83
    ]
  },
  {
    "index": 52,
    "name": "Golden Yellow",
    "slug": "golden-yellow",
    "ja": "山吹色",
    "romaji": "Yamabuki-iro",
    "meaning": "Kerria rose gold",
    "hex": "#F3A257",
    "rgb": [
      243,
      162,
      87
    ],
    "cmyk": [
      2,
      42,
      74,
      0
    ],
    "hsl": [
      29,
      87,
      65
    ],
    "lab": [
      73.86,
      25.94,
      51.18
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      26,
      81,
      132,
      138,
      140,
      179,
      206,
      229,
      309,
      315,
      354
    ],
    "vol2Combos": [
      18,
      75,
      85,
      90
    ]
  },
  {
    "index": 53,
    "name": "Vinaceous Cinnamon",
    "slug": "vinaceous-cinnamon",
    "ja": "肉桂色",
    "romaji": "Nikkei-iro",
    "meaning": "Warm cinnamon bark",
    "hex": "#EEA78C",
    "rgb": [
      238,
      167,
      140
    ],
    "cmyk": [
      4,
      40,
      42,
      0
    ],
    "hsl": [
      17,
      74,
      74
    ],
    "lab": [
      74.99,
      24.74,
      24.81
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      203,
      205,
      213,
      256,
      260,
      279,
      299
    ],
    "vol2Combos": [
      17,
      33,
      74
    ]
  },
  {
    "index": 54,
    "name": "Ochraceous Salmon",
    "slug": "ochraceous-salmon",
    "ja": "洗朱",
    "romaji": "Araishu",
    "meaning": "Washed vermilion salmon",
    "hex": "#D8A37B",
    "rgb": [
      216,
      163,
      123
    ],
    "cmyk": [
      15,
      38,
      55,
      0
    ],
    "hsl": [
      26,
      54,
      66
    ],
    "lab": [
      71.45,
      16.46,
      29.1
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      32,
      71,
      121,
      186,
      217,
      220,
      223,
      238,
      296,
      339
    ],
    "vol2Combos": [
      60
    ]
  },
  {
    "index": 55,
    "name": "Isabella Color",
    "slug": "isabella-color",
    "ja": "桑染",
    "romaji": "Kuwazome",
    "meaning": "Mulberry bark gold-taupe",
    "hex": "#C5A56E",
    "rgb": [
      197,
      165,
      110
    ],
    "cmyk": [
      15,
      28,
      60,
      10
    ],
    "hsl": [
      38,
      43,
      60
    ],
    "lab": [
      69.68,
      7.07,
      33.02
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      4,
      12,
      241,
      292
    ],
    "vol2Combos": [
      83
    ]
  },
  {
    "index": 56,
    "name": "Maple",
    "slug": "maple",
    "ja": "白茶",
    "romaji": "Shiracha",
    "meaning": "Pale maple wood tea",
    "hex": "#C59F6B",
    "rgb": [
      197,
      159,
      107
    ],
    "cmyk": [
      5,
      26,
      56,
      20
    ],
    "hsl": [
      35,
      44,
      60
    ],
    "lab": [
      68.19,
      9.59,
      32.95
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      282
    ],
    "vol2Combos": [
      6,
      10
    ]
  },
  {
    "index": 57,
    "name": "Olive Buff",
    "slug": "olive-buff",
    "ja": "柳茶",
    "romaji": "Yanagicha",
    "meaning": "Willow twig buff",
    "hex": "#C1C494",
    "rgb": [
      193,
      196,
      148
    ],
    "cmyk": [
      16,
      6,
      42,
      12
    ],
    "hsl": [
      64,
      29,
      67
    ],
    "lab": [
      78.05,
      -7.11,
      23.66
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      83,
      175,
      200,
      330,
      348
    ],
    "vol2Combos": [
      15,
      33,
      50
    ]
  },
  {
    "index": 58,
    "name": "Ecru",
    "slug": "ecru",
    "ja": "生成り色",
    "romaji": "Kinari-iro",
    "meaning": "Unbleached natural linen",
    "hex": "#C2AE93",
    "rgb": [
      194,
      174,
      147
    ],
    "cmyk": [
      20,
      25,
      40,
      6
    ],
    "hsl": [
      34,
      28,
      67
    ],
    "lab": [
      72.19,
      4.23,
      16.73
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      167,
      249,
      275,
      279,
      292,
      302,
      317,
      327
    ],
    "vol2Combos": [
      3,
      82,
      88
    ]
  },
  {
    "index": 59,
    "name": "Yellow",
    "slug": "yellow",
    "ja": "黄色",
    "romaji": "Ki-iro",
    "meaning": "Pure imperial yellow",
    "hex": "#FFF200",
    "rgb": [
      255,
      242,
      0
    ],
    "cmyk": [
      0,
      0,
      100,
      0
    ],
    "hsl": [
      57,
      100,
      50
    ],
    "lab": [
      94.96,
      -6.46,
      95.58
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      22,
      62,
      68,
      154,
      240,
      251,
      295,
      313
    ],
    "vol2Combos": [
      20,
      66
    ]
  },
  {
    "index": 60,
    "name": "Lemon Yellow",
    "slug": "lemon-yellow",
    "ja": "菜の花色",
    "romaji": "Nanohana-iro",
    "meaning": "Rapeseed blossom yellow",
    "hex": "#F8ED43",
    "rgb": [
      248,
      237,
      67
    ],
    "cmyk": [
      5,
      0,
      85,
      0
    ],
    "hsl": [
      56,
      93,
      62
    ],
    "lab": [
      92.66,
      -9.39,
      77.76
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      45,
      123,
      138,
      158,
      168,
      173,
      189,
      210,
      253,
      259,
      289,
      298,
      306,
      317,
      333,
      352,
      356,
      358,
      359
    ],
    "vol2Combos": [
      33,
      88
    ]
  },
  {
    "index": 61,
    "name": "Apricot Yellow",
    "slug": "apricot-yellow",
    "ja": "支子色",
    "romaji": "Kuchinashi-iro",
    "meaning": "Gardenia blossom yellow",
    "hex": "#FFDD00",
    "rgb": [
      255,
      221,
      0
    ],
    "cmyk": [
      0,
      10,
      100,
      0
    ],
    "hsl": [
      52,
      100,
      50
    ],
    "lab": [
      89.35,
      1.91,
      89.46
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      107,
      129,
      163,
      198,
      213,
      247,
      265,
      284,
      305,
      319
    ],
    "vol2Combos": [
      6,
      84
    ]
  },
  {
    "index": 62,
    "name": "Pyrite Yellow",
    "slug": "pyrite-yellow",
    "ja": "黄支子",
    "romaji": "Kikuchinashi",
    "meaning": "Golden pyrite gardenia",
    "hex": "#CAB356",
    "rgb": [
      202,
      179,
      86
    ],
    "cmyk": [
      23,
      25,
      80,
      0
    ],
    "hsl": [
      48,
      52,
      56
    ],
    "lab": [
      73.56,
      0.42,
      49.82
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      239,
      250,
      255,
      287,
      353,
      357
    ],
    "vol2Combos": [
      26,
      29
    ]
  },
  {
    "index": 63,
    "name": "Olive Ocher",
    "slug": "olive-ocher",
    "ja": "根岸色",
    "romaji": "Negishi-iro",
    "meaning": "Earthy olive wall plaster",
    "hex": "#D6B43E",
    "rgb": [
      214,
      180,
      62
    ],
    "cmyk": [
      18,
      26,
      90,
      0
    ],
    "hsl": [
      47,
      65,
      54
    ],
    "lab": [
      74.88,
      3.57,
      61.81
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      66,
      148,
      149,
      156,
      157,
      249,
      278
    ],
    "vol2Combos": [
      18,
      68
    ]
  },
  {
    "index": 64,
    "name": "Yellow Ocher",
    "slug": "yellow-ocher",
    "ja": "黄土色",
    "romaji": "Ōdo-iro",
    "meaning": "Natural yellow ochre",
    "hex": "#E2B540",
    "rgb": [
      226,
      181,
      64
    ],
    "cmyk": [
      12,
      28,
      88,
      0
    ],
    "hsl": [
      43,
      74,
      57
    ],
    "lab": [
      76.19,
      8.44,
      62.79
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      42,
      96,
      118,
      124,
      126,
      191,
      222,
      325
    ],
    "vol2Combos": [
      9,
      67,
      82
    ]
  },
  {
    "index": 65,
    "name": "Orange Yellow",
    "slug": "orange-yellow",
    "ja": "鬱金色",
    "romaji": "Ukon-iro",
    "meaning": "Turmeric root gold",
    "hex": "#FCB315",
    "rgb": [
      252,
      179,
      21
    ],
    "cmyk": [
      0,
      33,
      100,
      0
    ],
    "hsl": [
      41,
      97,
      54
    ],
    "lab": [
      78.49,
      19.57,
      78.22
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      114,
      148,
      153,
      164,
      170,
      257,
      286,
      338,
      350
    ],
    "vol2Combos": [
      74
    ]
  },
  {
    "index": 66,
    "name": "Yellow Orange",
    "slug": "yellow-orange",
    "ja": "蜜柑色",
    "romaji": "Mikan-iro",
    "meaning": "Mandarin tangerine",
    "hex": "#F99D1B",
    "rgb": [
      249,
      157,
      27
    ],
    "cmyk": [
      0,
      45,
      100,
      0
    ],
    "hsl": [
      35,
      95,
      54
    ],
    "lab": [
      72.96,
      29.4,
      72.94
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      2,
      53,
      89,
      151,
      171,
      209,
      222,
      235,
      267,
      288,
      297,
      312,
      319,
      335
    ],
    "vol2Combos": [
      4,
      81
    ]
  },
  {
    "index": 67,
    "name": "Apricot Orange",
    "slug": "apricot-orange",
    "ja": "杏子色",
    "romaji": "Anzu-iro",
    "meaning": "Sun-ripened apricot orange",
    "hex": "#F68C50",
    "rgb": [
      246,
      140,
      80
    ],
    "cmyk": [
      0,
      55,
      75,
      0
    ],
    "hsl": [
      22,
      90,
      64
    ],
    "lab": [
      69.37,
      37.69,
      49.65
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      211,
      253,
      309,
      328
    ],
    "vol2Combos": [
      60
    ]
  },
  {
    "index": 68,
    "name": "Orange",
    "slug": "orange",
    "ja": "橙色",
    "romaji": "Daidai-iro",
    "meaning": "Bitter orange",
    "hex": "#F37420",
    "rgb": [
      243,
      116,
      32
    ],
    "cmyk": [
      0,
      68,
      100,
      0
    ],
    "hsl": [
      24,
      90,
      54
    ],
    "lab": [
      63.8,
      47.16,
      64.72
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      7,
      46,
      141,
      144,
      149,
      256,
      272,
      358
    ],
    "vol2Combos": [
      31,
      42,
      73
    ]
  },
  {
    "index": 69,
    "name": "Peach Red",
    "slug": "peach-red",
    "ja": "桃色",
    "romaji": "Momo-iro",
    "meaning": "Ripe peach blossom",
    "hex": "#F15A30",
    "rgb": [
      241,
      90,
      48
    ],
    "cmyk": [
      0,
      80,
      90,
      0
    ],
    "hsl": [
      13,
      87,
      57
    ],
    "lab": [
      59.1,
      57.55,
      54.35
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      115,
      250,
      274,
      285,
      298,
      303,
      326,
      340
    ],
    "vol2Combos": [
      13
    ]
  },
  {
    "index": 70,
    "name": "English Red",
    "slug": "english-red",
    "ja": "丹色",
    "romaji": "Ni-iro",
    "meaning": "Cinnabar earth orange-red",
    "hex": "#D96629",
    "rgb": [
      217,
      102,
      41
    ],
    "cmyk": [
      13,
      73,
      100,
      0
    ],
    "hsl": [
      21,
      70,
      51
    ],
    "lab": [
      57.22,
      43.3,
      54.36
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      1,
      131,
      190,
      308,
      339
    ],
    "vol2Combos": [
      9,
      30
    ]
  },
  {
    "index": 71,
    "name": "Cinnamon Rufous",
    "slug": "cinnamon-rufous",
    "ja": "狐色",
    "romaji": "Kitsune-iro",
    "meaning": "Fox fur rufous",
    "hex": "#C27544",
    "rgb": [
      194,
      117,
      68
    ],
    "cmyk": [
      20,
      60,
      82,
      5
    ],
    "hsl": [
      23,
      51,
      51
    ],
    "lab": [
      57.23,
      27.77,
      40.23
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      8,
      10,
      103,
      158,
      172,
      204,
      206
    ],
    "vol2Combos": [
      60
    ]
  },
  {
    "index": 72,
    "name": "Orange Rufous",
    "slug": "orange-rufous",
    "ja": "柿色",
    "romaji": "Kaki-iro",
    "meaning": "Ripe autumn persimmon",
    "hex": "#C16B27",
    "rgb": [
      193,
      107,
      39
    ],
    "cmyk": [
      18,
      65,
      100,
      8
    ],
    "hsl": [
      26,
      66,
      45
    ],
    "lab": [
      54.56,
      31.61,
      51.25
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      91,
      102,
      222,
      353
    ],
    "vol2Combos": [
      39,
      61,
      67,
      76
    ]
  },
  {
    "index": 73,
    "name": "Sulphine Yellow",
    "slug": "sulphine-yellow",
    "ja": "黄土",
    "romaji": "Ōdo",
    "meaning": "Rich sulphine yellow-ochre",
    "hex": "#C19F2C",
    "rgb": [
      193,
      159,
      44
    ],
    "cmyk": [
      24,
      32,
      100,
      4
    ],
    "hsl": [
      46,
      63,
      46
    ],
    "lab": [
      67.24,
      4.35,
      60.55
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      36,
      65,
      142,
      160,
      252
    ],
    "vol2Combos": [
      8,
      52,
      70
    ]
  },
  {
    "index": 74,
    "name": "Khaki / Tawny Olive",
    "slug": "khaki-tawny-olive",
    "ja": "朽葉色",
    "romaji": "Kuchiba-iro",
    "meaning": "Autumn fallen leaf ochre",
    "hex": "#BC892B",
    "rgb": [
      188,
      137,
      43
    ],
    "cmyk": [
      24,
      45,
      100,
      6
    ],
    "hsl": [
      39,
      63,
      45
    ],
    "lab": [
      61.02,
      13.86,
      55.05
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      129,
      146,
      159,
      236,
      248
    ],
    "vol2Combos": [
      9,
      12,
      32
    ]
  },
  {
    "index": 75,
    "name": "Citron Yellow",
    "slug": "citron-yellow",
    "ja": "鶸色",
    "romaji": "Hiwa-iro",
    "meaning": "Siskin finch yellow-green",
    "hex": "#B2B73E",
    "rgb": [
      178,
      183,
      62
    ],
    "cmyk": [
      35,
      17,
      95,
      0
    ],
    "hsl": [
      62,
      49,
      48
    ],
    "lab": [
      72.47,
      -13.06,
      58.18
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      40,
      87,
      145,
      150,
      153,
      196,
      305,
      323
    ],
    "vol2Combos": [
      2,
      23,
      36,
      59
    ]
  },
  {
    "index": 76,
    "name": "Citrine",
    "slug": "citrine",
    "ja": "鶯茶",
    "romaji": "Uguisucha",
    "meaning": "Bush warbler olive-brown",
    "hex": "#A49531",
    "rgb": [
      164,
      149,
      49
    ],
    "cmyk": [
      36,
      32,
      100,
      7
    ],
    "hsl": [
      52,
      54,
      42
    ],
    "lab": [
      61.68,
      -2.96,
      52.16
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      59,
      93,
      132,
      133,
      262,
      356
    ],
    "vol2Combos": [
      2,
      7,
      29,
      76
    ]
  },
  {
    "index": 77,
    "name": "Dull Citrine",
    "slug": "dull-citrine",
    "ja": "国防色",
    "romaji": "Kokubō-iro",
    "meaning": "Muted olive earth",
    "hex": "#8D8559",
    "rgb": [
      141,
      133,
      89
    ],
    "cmyk": [
      52,
      45,
      78,
      0
    ],
    "hsl": [
      51,
      23,
      45
    ],
    "lab": [
      55.47,
      -2.01,
      24.79
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [],
    "vol2Combos": [
      9,
      50
    ]
  },
  {
    "index": 78,
    "name": "Buffy Citrine",
    "slug": "buffy-citrine",
    "ja": "利休茶",
    "romaji": "Rikyūcha",
    "meaning": "Sen no Rikyū olive tea",
    "hex": "#96874D",
    "rgb": [
      150,
      135,
      77
    ],
    "cmyk": [
      42,
      40,
      82,
      8
    ],
    "hsl": [
      48,
      32,
      45
    ],
    "lab": [
      56.62,
      0,
      33.3
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      100,
      177,
      233,
      350
    ],
    "vol2Combos": [
      14,
      54
    ]
  },
  {
    "index": 79,
    "name": "Dark Citrine",
    "slug": "dark-citrine",
    "ja": "海松色",
    "romaji": "Miru-iro",
    "meaning": "Codium sea-pine olive",
    "hex": "#8B835B",
    "rgb": [
      139,
      131,
      91
    ],
    "cmyk": [
      38,
      34,
      67,
      20
    ],
    "hsl": [
      50,
      21,
      45
    ],
    "lab": [
      54.71,
      -1.4,
      23.07
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      10,
      41,
      274,
      304
    ],
    "vol2Combos": [
      3
    ]
  },
  {
    "index": 80,
    "name": "Light Grayish Olive",
    "slug": "light-grayish-olive",
    "ja": "梅幸茶",
    "romaji": "Baikōcha",
    "meaning": "Kabuki olive-taupe tea",
    "hex": "#848061",
    "rgb": [
      132,
      128,
      97
    ],
    "cmyk": [
      43,
      36,
      62,
      19
    ],
    "hsl": [
      53,
      15,
      45
    ],
    "lab": [
      53.19,
      -2.28,
      17.02
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      107,
      184
    ],
    "vol2Combos": []
  },
  {
    "index": 81,
    "name": "Kronbergs Green",
    "slug": "kronbergs-green",
    "ja": "老竹色",
    "romaji": "Oitake-iro",
    "meaning": "Seasoned bamboo green",
    "hex": "#84875E",
    "rgb": [
      132,
      135,
      94
    ],
    "cmyk": [
      48,
      35,
      70,
      12
    ],
    "hsl": [
      64,
      18,
      45
    ],
    "lab": [
      55.12,
      -6.19,
      21.51
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      29
    ],
    "vol2Combos": [
      8
    ]
  },
  {
    "index": 82,
    "name": "Olive",
    "slug": "olive",
    "ja": "鶯色",
    "romaji": "Uguisu-iro",
    "meaning": "Japanese bush warbler olive",
    "hex": "#837E31",
    "rgb": [
      131,
      126,
      49
    ],
    "cmyk": [
      48,
      38,
      100,
      15
    ],
    "hsl": [
      56,
      46,
      35
    ],
    "lab": [
      52.21,
      -5.73,
      41.49
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      96,
      201,
      254,
      258,
      277,
      310,
      334
    ],
    "vol2Combos": []
  },
  {
    "index": 83,
    "name": "Orange Citrine",
    "slug": "orange-citrine",
    "ja": "黄橡",
    "romaji": "Kitsurubami",
    "meaning": "Golden acorn cup olive",
    "hex": "#986F2D",
    "rgb": [
      152,
      111,
      45
    ],
    "cmyk": [
      28,
      48,
      92,
      24
    ],
    "hsl": [
      37,
      54,
      39
    ],
    "lab": [
      50.24,
      11.52,
      42.05
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      212,
      342
    ],
    "vol2Combos": [
      30,
      57
    ]
  },
  {
    "index": 84,
    "name": "Sudan Brown",
    "slug": "sudan-brown",
    "ja": "団栗色",
    "romaji": "Donguri-iro",
    "meaning": "Acorn shell brown",
    "hex": "#A36752",
    "rgb": [
      163,
      103,
      82
    ],
    "cmyk": [
      25,
      60,
      65,
      19
    ],
    "hsl": [
      16,
      33,
      48
    ],
    "lab": [
      49.86,
      23.03,
      22.45
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": true,
    "vol1Combos": [
      207,
      214,
      273
    ],
    "vol2Combos": [
      15,
      71
    ]
  },
  {
    "index": 85,
    "name": "Olive Green",
    "slug": "olive-green",
    "ja": "海松茶",
    "romaji": "Mirucha",
    "meaning": "Deep sea-pine olive green",
    "hex": "#6B7140",
    "rgb": [
      107,
      113,
      64
    ],
    "cmyk": [
      56,
      40,
      85,
      22
    ],
    "hsl": [
      67,
      28,
      35
    ],
    "lab": [
      46.39,
      -8.49,
      26.49
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": false,
    "vol1Combos": [
      66,
      243,
      270,
      297
    ],
    "vol2Combos": []
  },
  {
    "index": 86,
    "name": "Light Brownish Olive",
    "slug": "light-brownish-olive",
    "ja": "媚茶",
    "romaji": "Kobicha",
    "meaning": "Kelp-brownish olive",
    "hex": "#806E4B",
    "rgb": [
      128,
      110,
      75
    ],
    "cmyk": [
      42,
      46,
      73,
      24
    ],
    "hsl": [
      40,
      26,
      40
    ],
    "lab": [
      47.51,
      3.75,
      22.19
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": false,
    "vol1Combos": [
      199,
      318
    ],
    "vol2Combos": [
      18,
      50,
      57
    ]
  },
  {
    "index": 87,
    "name": "Deep Grayish Olive",
    "slug": "deep-grayish-olive",
    "ja": "藍海松茶",
    "romaji": "Aimirucha",
    "meaning": "Indigo-shaded dark olive",
    "hex": "#635A3A",
    "rgb": [
      99,
      90,
      58
    ],
    "cmyk": [
      50,
      48,
      78,
      37
    ],
    "hsl": [
      47,
      26,
      31
    ],
    "lab": [
      38.61,
      -0.28,
      19.94
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": false,
    "vol1Combos": [
      146,
      343
    ],
    "vol2Combos": []
  },
  {
    "index": 88,
    "name": "Pale Raw Umber",
    "slug": "pale-raw-umber",
    "ja": "煤色",
    "romaji": "Susu-iro",
    "meaning": "Aged soot umber",
    "hex": "#71502F",
    "rgb": [
      113,
      80,
      47
    ],
    "cmyk": [
      46,
      63,
      87,
      32
    ],
    "hsl": [
      30,
      41,
      31
    ],
    "lab": [
      37.07,
      11.19,
      24.96
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": false,
    "vol1Combos": [
      26,
      73,
      160,
      234,
      296
    ],
    "vol2Combos": [
      81
    ]
  },
  {
    "index": 89,
    "name": "Sepia",
    "slug": "sepia",
    "ja": "憲法黒茶",
    "romaji": "Kenpō-kurocha",
    "meaning": "Deep dye sepia",
    "hex": "#644B1E",
    "rgb": [
      100,
      75,
      30
    ],
    "cmyk": [
      48,
      60,
      100,
      40
    ],
    "hsl": [
      39,
      54,
      25
    ],
    "lab": [
      33.83,
      6.87,
      30.23
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": false,
    "vol1Combos": [
      24,
      288
    ],
    "vol2Combos": [
      41,
      72
    ]
  },
  {
    "index": 90,
    "name": "Madder Brown",
    "slug": "madder-brown",
    "ja": "栗梅",
    "romaji": "Kuriume",
    "meaning": "Chestnut madder brown",
    "hex": "#762C19",
    "rgb": [
      118,
      44,
      25
    ],
    "cmyk": [
      36,
      88,
      100,
      38
    ],
    "hsl": [
      12,
      65,
      28
    ],
    "lab": [
      29.09,
      32,
      29.28
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": false,
    "vol1Combos": [
      28,
      79,
      98,
      173,
      237,
      275,
      323,
      359
    ],
    "vol2Combos": [
      82
    ]
  },
  {
    "index": 91,
    "name": "Mars Brown Tobacco",
    "slug": "mars-brown-tobacco",
    "ja": "煙草色",
    "romaji": "Tabako-iro",
    "meaning": "Cured tobacco leaf brown",
    "hex": "#653514",
    "rgb": [
      101,
      53,
      20
    ],
    "cmyk": [
      39,
      76,
      100,
      47
    ],
    "hsl": [
      24,
      67,
      24
    ],
    "lab": [
      28.03,
      20.45,
      29.84
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": false,
    "vol1Combos": [
      19
    ],
    "vol2Combos": [
      59,
      90
    ]
  },
  {
    "index": 92,
    "name": "Vandyke Brown",
    "slug": "vandyke-brown",
    "ja": "焦茶",
    "romaji": "Kogecha",
    "meaning": "Scorched dark tea brown",
    "hex": "#4B3317",
    "rgb": [
      75,
      51,
      23
    ],
    "cmyk": [
      56,
      71,
      97,
      52
    ],
    "hsl": [
      32,
      53,
      19
    ],
    "lab": [
      23.81,
      8.5,
      22.1
    ],
    "swatchGroup": 1,
    "swatchGroupName": "Yellow / Orange / Ochre",
    "swatchGroupNameJa": "黄・橙・黄土系",
    "isBright": false,
    "vol1Combos": [
      110,
      113,
      118,
      182,
      192,
      328,
      355
    ],
    "vol2Combos": [
      3,
      34
    ]
  },
  {
    "index": 93,
    "name": "Turquoise Green",
    "slug": "turquoise-green",
    "ja": "白緑",
    "romaji": "Byakuroku",
    "meaning": "Pale malachite turquoise",
    "hex": "#B5DECC",
    "rgb": [
      181,
      222,
      204
    ],
    "cmyk": [
      29,
      0,
      24,
      0
    ],
    "hsl": [
      154,
      38,
      79
    ],
    "lab": [
      85.26,
      -16.89,
      4.6
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      36,
      74,
      147,
      163,
      173,
      202,
      223,
      230,
      263,
      272,
      285,
      293,
      300,
      305,
      317,
      346
    ],
    "vol2Combos": [
      20
    ]
  },
  {
    "index": 94,
    "name": "Glaucous Green",
    "slug": "glaucous-green",
    "ja": "青磁色",
    "romaji": "Seiji-iro",
    "meaning": "Celadon porcelain glaze",
    "hex": "#B4CDC2",
    "rgb": [
      180,
      205,
      194
    ],
    "cmyk": [
      30,
      9,
      24,
      0
    ],
    "hsl": [
      154,
      20,
      75
    ],
    "lab": [
      80.3,
      -10.24,
      2.3
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      7,
      150,
      171,
      207,
      239,
      260,
      358
    ],
    "vol2Combos": [
      1,
      59,
      63,
      82
    ]
  },
  {
    "index": 95,
    "name": "Dark Greenish Glaucous",
    "slug": "dark-greenish-glaucous",
    "ja": "山鳩色",
    "romaji": "Yamabato-iro",
    "meaning": "Turtle dove grey-green",
    "hex": "#B7C2A9",
    "rgb": [
      183,
      194,
      169
    ],
    "cmyk": [
      30,
      15,
      36,
      0
    ],
    "hsl": [
      86,
      17,
      71
    ],
    "lab": [
      77.09,
      -7.56,
      11.37
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      264,
      311,
      353
    ],
    "vol2Combos": [
      51,
      68
    ]
  },
  {
    "index": 96,
    "name": "Pale Turtle Green",
    "slug": "pale-turtle-green",
    "ja": "若苗色",
    "romaji": "Wakanae-iro",
    "meaning": "Young rice seedling green",
    "hex": "#C3CD9D",
    "rgb": [
      195,
      205,
      157
    ],
    "cmyk": [
      25,
      10,
      45,
      0
    ],
    "hsl": [
      73,
      32,
      71
    ],
    "lab": [
      80.6,
      -9.3,
      22.81
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [],
    "vol2Combos": [
      70
    ]
  },
  {
    "index": 97,
    "name": "Yellow Green",
    "slug": "yellow-green",
    "ja": "若葉色",
    "romaji": "Wakaba-iro",
    "meaning": "New leaf green",
    "hex": "#AFD472",
    "rgb": [
      175,
      212,
      114
    ],
    "cmyk": [
      35,
      0,
      72,
      0
    ],
    "hsl": [
      83,
      53,
      64
    ],
    "lab": [
      80.61,
      -24.6,
      43.91
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      111,
      141,
      276,
      326,
      334
    ],
    "vol2Combos": [
      53
    ]
  },
  {
    "index": 98,
    "name": "Light Green Yellow",
    "slug": "light-green-yellow",
    "ja": "若草色",
    "romaji": "Wakakusa-iro",
    "meaning": "Fresh spring grass",
    "hex": "#C7D14F",
    "rgb": [
      199,
      209,
      79
    ],
    "cmyk": [
      26,
      5,
      85,
      0
    ],
    "hsl": [
      65,
      59,
      56
    ],
    "lab": [
      81.14,
      -15.86,
      60.56
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      61,
      289,
      291,
      311,
      346
    ],
    "vol2Combos": []
  },
  {
    "index": 99,
    "name": "Light Green",
    "slug": "light-green",
    "ja": "若竹色",
    "romaji": "Wakatake-iro",
    "meaning": "Young bamboo green",
    "hex": "#87C540",
    "rgb": [
      135,
      197,
      64
    ],
    "cmyk": [
      52,
      0,
      100,
      0
    ],
    "hsl": [
      88,
      53,
      51
    ],
    "lab": [
      73.31,
      -36.03,
      57.03
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      19,
      32,
      158,
      326
    ],
    "vol2Combos": [
      34,
      43,
      77
    ]
  },
  {
    "index": 100,
    "name": "Olive Yellow",
    "slug": "olive-yellow",
    "ja": "青朽葉",
    "romaji": "Aokuchiba",
    "meaning": "Greenish fallen leaves",
    "hex": "#A6A159",
    "rgb": [
      166,
      161,
      89
    ],
    "cmyk": [
      40,
      30,
      80,
      0
    ],
    "hsl": [
      56,
      30,
      50
    ],
    "lab": [
      65.49,
      -6.05,
      37.84
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      124,
      211,
      265,
      347
    ],
    "vol2Combos": [
      24
    ]
  },
  {
    "index": 101,
    "name": "Artemisia Green",
    "slug": "artemesia-green",
    "ja": "青磁鼠",
    "romaji": "Seiji-nezumi",
    "meaning": "Mugwort / celadon grey",
    "hex": "#709390",
    "rgb": [
      112,
      147,
      144
    ],
    "cmyk": [
      57,
      28,
      39,
      8
    ],
    "hsl": [
      175,
      14,
      51
    ],
    "lab": [
      58.1,
      -12.83,
      -2.89
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      293,
      312,
      250,
      350
    ],
    "vol2Combos": [
      29,
      30,
      31,
      67
    ]
  },
  {
    "index": 102,
    "name": "Andover Green",
    "slug": "andover-green",
    "ja": "利休鼠",
    "romaji": "Rikyū-nezumi",
    "meaning": "Tea master greenish-grey",
    "hex": "#6D7E77",
    "rgb": [
      109,
      126,
      119
    ],
    "cmyk": [
      60,
      40,
      50,
      10
    ],
    "hsl": [
      155,
      7,
      46
    ],
    "lab": [
      51.21,
      -7.76,
      1.54
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      244,
      346
    ],
    "vol2Combos": [
      9,
      61
    ]
  },
  {
    "index": 103,
    "name": "Rainette Green",
    "slug": "rainette-green",
    "ja": "青丹",
    "romaji": "Aoni",
    "meaning": "Celadon earth green",
    "hex": "#788860",
    "rgb": [
      120,
      136,
      96
    ],
    "cmyk": [
      42,
      20,
      62,
      28
    ],
    "hsl": [
      84,
      17,
      45
    ],
    "lab": [
      54.57,
      -11.57,
      19.73
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      73,
      162,
      188,
      266,
      301
    ],
    "vol2Combos": []
  },
  {
    "index": 104,
    "name": "Chromium Green",
    "slug": "chromium-green",
    "ja": "緑青色",
    "romaji": "Rokushō-iro",
    "meaning": "Patina malachite green",
    "hex": "#719470",
    "rgb": [
      113,
      148,
      112
    ],
    "cmyk": [
      50,
      16,
      58,
      20
    ],
    "hsl": [
      118,
      14,
      51
    ],
    "lab": [
      57.87,
      -18.15,
      14.99
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      105,
      200,
      219,
      283
    ],
    "vol2Combos": [
      18,
      73
    ]
  },
  {
    "index": 105,
    "name": "Pistachio Green",
    "slug": "pistachio-green",
    "ja": "青竹色",
    "romaji": "Aotake-iro",
    "meaning": "Green bamboo stalk",
    "hex": "#648F7B",
    "rgb": [
      100,
      143,
      123
    ],
    "cmyk": [
      64,
      29,
      56,
      6
    ],
    "hsl": [
      152,
      18,
      48
    ],
    "lab": [
      55.82,
      -18.64,
      5.69
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      127,
      137
    ],
    "vol2Combos": [
      51
    ]
  },
  {
    "index": 106,
    "name": "Sea Green",
    "slug": "sea-green",
    "ja": "浅葱色",
    "romaji": "Asagi-iro",
    "meaning": "Shallow water turquoise-green",
    "hex": "#00B49B",
    "rgb": [
      0,
      180,
      155
    ],
    "cmyk": [
      80,
      0,
      51,
      0
    ],
    "hsl": [
      172,
      100,
      35
    ],
    "lab": [
      65.05,
      -48.9,
      0.46
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      17,
      21,
      58,
      86,
      133,
      250,
      260,
      284,
      291,
      340,
      347,
      355
    ],
    "vol2Combos": [
      40,
      89
    ]
  },
  {
    "index": 107,
    "name": "Benzol Green",
    "slug": "benzol-green",
    "ja": "納戸色",
    "romaji": "Nando-iro",
    "meaning": "Storeroom deep teal",
    "hex": "#00978D",
    "rgb": [
      0,
      151,
      141
    ],
    "cmyk": [
      100,
      15,
      55,
      0
    ],
    "hsl": [
      176,
      100,
      30
    ],
    "lab": [
      53.56,
      -54.63,
      -8.31
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      15,
      54,
      92,
      122,
      155,
      247,
      266,
      267,
      281,
      304,
      306
    ],
    "vol2Combos": [
      55
    ]
  },
  {
    "index": 108,
    "name": "Light Porcelain Green",
    "slug": "light-porcelain-green",
    "ja": "青碧",
    "romaji": "Seiheki",
    "meaning": "Deep celadon jade",
    "hex": "#00908A",
    "rgb": [
      0,
      144,
      138
    ],
    "cmyk": [
      86,
      22,
      50,
      3
    ],
    "hsl": [
      178,
      100,
      28
    ],
    "lab": [
      53.3,
      -37.52,
      -6.83
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      44,
      193,
      328
    ],
    "vol2Combos": [
      3,
      86
    ]
  },
  {
    "index": 109,
    "name": "Green",
    "slug": "green",
    "ja": "緑",
    "romaji": "Midori",
    "meaning": "Pure verdant green",
    "hex": "#489B6E",
    "rgb": [
      72,
      155,
      110
    ],
    "cmyk": [
      75,
      21,
      73,
      0
    ],
    "hsl": [
      147,
      37,
      45
    ],
    "lab": [
      57.77,
      -34.51,
      15.59
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      198,
      216,
      293
    ],
    "vol2Combos": [
      13,
      22,
      74
    ]
  },
  {
    "index": 110,
    "name": "Dull Viridian Green",
    "slug": "dull-viridian-green",
    "ja": "青緑",
    "romaji": "Aomidori",
    "meaning": "Viridian mineral green",
    "hex": "#009465",
    "rgb": [
      0,
      148,
      101
    ],
    "cmyk": [
      90,
      20,
      80,
      0
    ],
    "hsl": [
      161,
      100,
      29
    ],
    "lab": [
      53.5,
      -49,
      14.44
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      136,
      256,
      306,
      316
    ],
    "vol2Combos": [
      35,
      65
    ]
  },
  {
    "index": 111,
    "name": "Oil Green",
    "slug": "oil-green",
    "ja": "苔色",
    "romaji": "Koke-iro",
    "meaning": "Temple garden moss",
    "hex": "#819238",
    "rgb": [
      129,
      146,
      56
    ],
    "cmyk": [
      53,
      28,
      100,
      8
    ],
    "hsl": [
      71,
      45,
      40
    ],
    "lab": [
      57.64,
      -16.01,
      43.77
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      245,
      299,
      320
    ],
    "vol2Combos": [
      42
    ]
  },
  {
    "index": 112,
    "name": "Grape Green",
    "slug": "grape-green",
    "ja": "柳染",
    "romaji": "Yanagizome",
    "meaning": "Dyed willow green",
    "hex": "#A2A865",
    "rgb": [
      162,
      168,
      101
    ],
    "cmyk": [
      41,
      25,
      74,
      0
    ],
    "hsl": [
      65,
      28,
      53
    ],
    "lab": [
      67.16,
      -9.93,
      33.51
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [],
    "vol2Combos": [
      40,
      46
    ]
  },
  {
    "index": 113,
    "name": "Diamine Green",
    "slug": "diamine-green",
    "ja": "常盤色",
    "romaji": "Tokiwa-iro",
    "meaning": "Evergreen foliage",
    "hex": "#008842",
    "rgb": [
      0,
      136,
      66
    ],
    "cmyk": [
      87,
      20,
      100,
      10
    ],
    "hsl": [
      149,
      100,
      27
    ],
    "lab": [
      49.58,
      -45.51,
      28.01
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": true,
    "vol1Combos": [
      38,
      146,
      217,
      242,
      251,
      313
    ],
    "vol2Combos": [
      8
    ]
  },
  {
    "index": 114,
    "name": "Cossack Green",
    "slug": "cossack-green",
    "ja": "千歳緑",
    "romaji": "Chitosemidori",
    "meaning": "Thousand-year evergreen",
    "hex": "#437742",
    "rgb": [
      67,
      119,
      66
    ],
    "cmyk": [
      76,
      32,
      91,
      18
    ],
    "hsl": [
      119,
      29,
      36
    ],
    "lab": [
      45.46,
      -27.2,
      23.45
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": false,
    "vol1Combos": [
      5,
      135,
      262,
      270,
      278,
      294,
      319,
      341,
      348
    ],
    "vol2Combos": [
      53,
      70
    ]
  },
  {
    "index": 115,
    "name": "Lincoln Green",
    "slug": "lincoln-green",
    "ja": "深緑",
    "romaji": "Fukamidori",
    "meaning": "Deep forest green",
    "hex": "#555832",
    "rgb": [
      85,
      88,
      50
    ],
    "cmyk": [
      60,
      48,
      86,
      37
    ],
    "hsl": [
      65,
      28,
      27
    ],
    "lab": [
      36.27,
      -5.91,
      21.18
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": false,
    "vol1Combos": [
      70,
      121,
      203,
      210,
      280,
      290
    ],
    "vol2Combos": [
      42,
      65
    ]
  },
  {
    "index": 116,
    "name": "Blackish Olive",
    "slug": "blackish-olive",
    "ja": "黒緑",
    "romaji": "Kuromidori",
    "meaning": "Blackened pine olive",
    "hex": "#42533E",
    "rgb": [
      66,
      83,
      62
    ],
    "cmyk": [
      56,
      32,
      63,
      55
    ],
    "hsl": [
      109,
      14,
      28
    ],
    "lab": [
      33.26,
      -10.13,
      9.69
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": false,
    "vol1Combos": [
      109,
      318,
      336
    ],
    "vol2Combos": [
      29,
      30
    ]
  },
  {
    "index": 117,
    "name": "Deep Slate Olive",
    "slug": "deep-slate-olive",
    "ja": "仙斎茶",
    "romaji": "Sensaicha",
    "meaning": "Dark pine-shadow olive",
    "hex": "#253122",
    "rgb": [
      37,
      49,
      34
    ],
    "cmyk": [
      76,
      60,
      80,
      62
    ],
    "hsl": [
      108,
      18,
      16
    ],
    "lab": [
      18.8,
      -7.67,
      7.54
    ],
    "swatchGroup": 2,
    "swatchGroupName": "Green / Olive / Celadon",
    "swatchGroupNameJa": "緑・鶸・青磁系",
    "isBright": false,
    "vol1Combos": [
      189,
      229,
      268,
      303,
      310,
      321,
      332,
      341,
      342,
      348
    ],
    "vol2Combos": [
      57,
      76
    ]
  },
  {
    "index": 118,
    "name": "Pale King's Blue 1",
    "slug": "pale-king's-blue-1",
    "ja": "白藍",
    "romaji": "Shiraai",
    "meaning": "Faintest ice indigo",
    "hex": "#F0F3E7",
    "rgb": [
      240,
      243,
      231
    ],
    "cmyk": [
      5,
      1,
      9,
      0
    ],
    "hsl": [
      75,
      33,
      93
    ],
    "lab": [
      95.38,
      -2.63,
      5.21
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": true,
    "vol1Combos": [],
    "vol2Combos": [
      46,
      69
    ]
  },
  {
    "index": 119,
    "name": "Nile Blue",
    "slug": "nile-blue",
    "ja": "瓶覗",
    "romaji": "Kamenozoki",
    "meaning": "Faint indigo vat peek",
    "hex": "#BCE4E5",
    "rgb": [
      188,
      228,
      229
    ],
    "cmyk": [
      25,
      0,
      10,
      0
    ],
    "hsl": [
      181,
      44,
      82
    ],
    "lab": [
      87.68,
      -13.25,
      -5.03
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": true,
    "vol1Combos": [
      25,
      250,
      268,
      302,
      306,
      330,
      345,
      354,
      359
    ],
    "vol2Combos": [
      13,
      14
    ]
  },
  {
    "index": 120,
    "name": "Pale King's Blue 2",
    "slug": "pale-king's-blue-2",
    "ja": "水色",
    "romaji": "Mizu-iro",
    "meaning": "Clear mountain stream blue",
    "hex": "#A7D4E4",
    "rgb": [
      167,
      212,
      228
    ],
    "cmyk": [
      33,
      4,
      7,
      0
    ],
    "hsl": [
      196,
      53,
      77
    ],
    "lab": [
      82.21,
      -12.74,
      -12.88
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": true,
    "vol1Combos": [
      16,
      49,
      72,
      75,
      167,
      196,
      213,
      234,
      287,
      351
    ],
    "vol2Combos": [
      31,
      32,
      63,
      71,
      81
    ]
  },
  {
    "index": 121,
    "name": "Light Glaucous Blue",
    "slug": "light-glaucous-blue",
    "ja": "薄花色",
    "romaji": "Usuhana-iro",
    "meaning": "Pale dayflower blue",
    "hex": "#A5C8D1",
    "rgb": [
      165,
      200,
      209
    ],
    "cmyk": [
      35,
      10,
      14,
      0
    ],
    "hsl": [
      192,
      32,
      73
    ],
    "lab": [
      78.21,
      -10.57,
      -8.72
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": true,
    "vol1Combos": [
      54,
      93,
      119,
      152,
      178,
      204,
      227,
      320,
      339,
      341,
      356,
      357
    ],
    "vol2Combos": [
      7,
      16,
      17,
      23,
      44,
      54,
      58
    ]
  },
  {
    "index": 122,
    "name": "Salvia Blue",
    "slug": "salvia-blue",
    "ja": "桔梗色",
    "romaji": "Kikyō-iro",
    "meaning": "Balloon flower blue",
    "hex": "#97ACC8",
    "rgb": [
      151,
      172,
      200
    ],
    "cmyk": [
      41,
      25,
      10,
      0
    ],
    "hsl": [
      214,
      31,
      69
    ],
    "lab": [
      69.47,
      -2.76,
      -16.75
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": true,
    "vol1Combos": [
      29,
      129,
      135,
      139,
      142,
      188,
      209,
      212,
      237,
      272,
      294,
      321,
      330
    ],
    "vol2Combos": [
      33,
      72
    ]
  },
  {
    "index": 123,
    "name": "Cobalt Green",
    "slug": "cobalt-green",
    "ja": "若緑",
    "romaji": "Wakamidori",
    "meaning": "Young pine shoot green",
    "hex": "#96D1AA",
    "rgb": [
      150,
      209,
      170
    ],
    "cmyk": [
      42,
      0,
      42,
      0
    ],
    "hsl": [
      140,
      39,
      70
    ],
    "lab": [
      79.01,
      -25.56,
      13
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": true,
    "vol1Combos": [
      156,
      188,
      201,
      202,
      230,
      271,
      281,
      282,
      290,
      291,
      308,
      333
    ],
    "vol2Combos": [
      5,
      20,
      22,
      41,
      87
    ]
  },
  {
    "index": 124,
    "name": "Calamine Blue",
    "slug": "calamine-blue",
    "ja": "空色",
    "romaji": "Sora-iro",
    "meaning": "Clear sky blue",
    "hex": "#78CDD0",
    "rgb": [
      120,
      205,
      208
    ],
    "cmyk": [
      50,
      0,
      20,
      0
    ],
    "hsl": [
      182,
      48,
      64
    ],
    "lab": [
      77.09,
      -26.24,
      -10.37
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": true,
    "vol1Combos": [
      20,
      41,
      65,
      159,
      176,
      255,
      261,
      287,
      291,
      300,
      352
    ],
    "vol2Combos": [
      20,
      36,
      80
    ]
  },
  {
    "index": 125,
    "name": "Venice Green",
    "slug": "venice-green",
    "ja": "新橋色",
    "romaji": "Shinbashi-iro",
    "meaning": "Geisha turquoise-green",
    "hex": "#62C6BF",
    "rgb": [
      98,
      198,
      191
    ],
    "cmyk": [
      58,
      0,
      30,
      0
    ],
    "hsl": [
      176,
      47,
      58
    ],
    "lab": [
      73.7,
      -31.73,
      -6.14
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": true,
    "vol1Combos": [
      78,
      128,
      138,
      189,
      283,
      345
    ],
    "vol2Combos": [
      7
    ]
  },
  {
    "index": 126,
    "name": "Pale Methyl Blue",
    "slug": "pale-methyl-blue",
    "ja": "花浅葱",
    "romaji": "Hana-asagi",
    "meaning": "Blossom turquoise blue",
    "hex": "#54AFB4",
    "rgb": [
      84,
      175,
      180
    ],
    "cmyk": [
      65,
      12,
      30,
      0
    ],
    "hsl": [
      183,
      39,
      52
    ],
    "lab": [
      66.01,
      -26.96,
      -11.56
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": true,
    "vol1Combos": [],
    "vol2Combos": [
      46,
      47
    ]
  },
  {
    "index": 127,
    "name": "Cerulean Blue",
    "slug": "cerulean-blue",
    "ja": "露草色",
    "romaji": "Tsuyukusa-iro",
    "meaning": "Dayflower cerulean",
    "hex": "#0093A5",
    "rgb": [
      0,
      147,
      165
    ],
    "cmyk": [
      84,
      26,
      32,
      0
    ],
    "hsl": [
      187,
      100,
      32
    ],
    "lab": [
      54.97,
      -30.19,
      -20.14
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": true,
    "vol1Combos": [
      1,
      63,
      99,
      125,
      148,
      227,
      240,
      264
    ],
    "vol2Combos": [
      16,
      73,
      78
    ]
  },
  {
    "index": 128,
    "name": "Peacock Blue",
    "slug": "peacock-blue",
    "ja": "孔雀青",
    "romaji": "Kujaku-ao",
    "meaning": "Peacock plume blue",
    "hex": "#00939B",
    "rgb": [
      0,
      147,
      155
    ],
    "cmyk": [
      100,
      19,
      43,
      0
    ],
    "hsl": [
      183,
      100,
      30
    ],
    "lab": [
      52.79,
      -48.91,
      -17.52
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": true,
    "vol1Combos": [
      131,
      286
    ],
    "vol2Combos": [
      41,
      45,
      83
    ]
  },
  {
    "index": 129,
    "name": "Green Blue",
    "slug": "green-blue",
    "ja": "水浅葱",
    "romaji": "Mizu-asagi",
    "meaning": "Watery turquoise blue",
    "hex": "#099197",
    "rgb": [
      9,
      145,
      151
    ],
    "cmyk": [
      82,
      24,
      40,
      3
    ],
    "hsl": [
      183,
      89,
      31
    ],
    "lab": [
      54.13,
      -31.27,
      -12.88
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": true,
    "vol1Combos": [
      12,
      74,
      79,
      178,
      208,
      252,
      259,
      271,
      330
    ],
    "vol2Combos": []
  },
  {
    "index": 130,
    "name": "Olympic Blue",
    "slug": "olympic-blue",
    "ja": "縹色",
    "romaji": "Hanada-iro",
    "meaning": "Pure indigo dye blue",
    "hex": "#5A82B3",
    "rgb": [
      90,
      130,
      179
    ],
    "cmyk": [
      69,
      44,
      10,
      0
    ],
    "hsl": [
      213,
      37,
      53
    ],
    "lab": [
      53.09,
      -3.63,
      -30.74
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": true,
    "vol1Combos": [
      44,
      67,
      157,
      194,
      231,
      274,
      324,
      360
    ],
    "vol2Combos": [
      24,
      25,
      90
    ]
  },
  {
    "index": 131,
    "name": "Blue",
    "slug": "blue",
    "ja": "瑠璃色",
    "romaji": "Ruri-iro",
    "meaning": "Lapis lazuli blue",
    "hex": "#006EB8",
    "rgb": [
      0,
      110,
      184
    ],
    "cmyk": [
      95,
      54,
      0,
      0
    ],
    "hsl": [
      204,
      100,
      36
    ],
    "lab": [
      43.49,
      -8.83,
      -48.77
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": false,
    "vol1Combos": [
      49,
      51,
      88,
      143,
      154,
      186,
      191,
      215,
      257,
      267,
      295,
      333,
      354
    ],
    "vol2Combos": [
      51,
      52,
      88
    ]
  },
  {
    "index": 132,
    "name": "Antwarp Blue",
    "slug": "antwarp-blue",
    "ja": "藍鉄",
    "romaji": "Aitetsu",
    "meaning": "Indigo iron blue",
    "hex": "#007190",
    "rgb": [
      0,
      113,
      144
    ],
    "cmyk": [
      100,
      40,
      30,
      10
    ],
    "hsl": [
      193,
      100,
      28
    ],
    "lab": [
      42.03,
      -29.12,
      -27.73
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": false,
    "vol1Combos": [
      85,
      106,
      114,
      140,
      163,
      172,
      208,
      244,
      258,
      281,
      299,
      302,
      334,
      349,
      355,
      358
    ],
    "vol2Combos": [
      77
    ]
  },
  {
    "index": 133,
    "name": "Helvetia Blue",
    "slug": "helvetia-blue",
    "ja": "紺青",
    "romaji": "Konjō",
    "meaning": "Prussian deep blue",
    "hex": "#005B8D",
    "rgb": [
      0,
      91,
      141
    ],
    "cmyk": [
      100,
      62,
      19,
      10
    ],
    "hsl": [
      201,
      100,
      28
    ],
    "lab": [
      35.31,
      -12.1,
      -36.37
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": false,
    "vol1Combos": [
      39,
      48,
      161,
      187,
      218,
      259,
      312,
      347
    ],
    "vol2Combos": [
      16,
      21,
      37
    ]
  },
  {
    "index": 134,
    "name": "Dark Medici Blue",
    "slug": "dark-medici-blue",
    "ja": "御召茶",
    "romaji": "Omeshicha",
    "meaning": "Silk kimono slate-blue",
    "hex": "#547076",
    "rgb": [
      84,
      112,
      118
    ],
    "cmyk": [
      70,
      45,
      45,
      15
    ],
    "hsl": [
      191,
      17,
      40
    ],
    "lab": [
      45.12,
      -9.23,
      -6.86
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": false,
    "vol1Combos": [
      160,
      224,
      241,
      249
    ],
    "vol2Combos": [
      17,
      64
    ]
  },
  {
    "index": 135,
    "name": "Dusky Green",
    "slug": "dusky-green",
    "ja": "鉄御納戸",
    "romaji": "Tetsu-onando",
    "meaning": "Iron-tinged dark teal",
    "hex": "#004F46",
    "rgb": [
      0,
      79,
      70
    ],
    "cmyk": [
      100,
      30,
      64,
      50
    ],
    "hsl": [
      173,
      100,
      15
    ],
    "lab": [
      27.97,
      -36.27,
      -3.28
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": false,
    "vol1Combos": [
      94,
      219,
      225,
      278,
      284,
      318,
      332,
      338
    ],
    "vol2Combos": [
      51,
      53,
      79
    ]
  },
  {
    "index": 136,
    "name": "Deep Lyons Blue",
    "slug": "deep-lyons-blue",
    "ja": "瑠璃紺",
    "romaji": "Rurikon",
    "meaning": "Deep lapis navy",
    "hex": "#1C4286",
    "rgb": [
      28,
      66,
      134
    ],
    "cmyk": [
      100,
      85,
      15,
      6
    ],
    "hsl": [
      218,
      65,
      32
    ],
    "lab": [
      28.53,
      6.56,
      -42.68
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": false,
    "vol1Combos": [
      22,
      38,
      101,
      126,
      179,
      199,
      236,
      247,
      314,
      344,
      349
    ],
    "vol2Combos": [
      12,
      16,
      19
    ]
  },
  {
    "index": 137,
    "name": "Violet Blue",
    "slug": "violet-blue",
    "ja": "紺桔梗",
    "romaji": "Konkikyō",
    "meaning": "Deep navy bellflower",
    "hex": "#40456A",
    "rgb": [
      64,
      69,
      106
    ],
    "cmyk": [
      85,
      79,
      38,
      16
    ],
    "hsl": [
      233,
      25,
      33
    ],
    "lab": [
      30.15,
      5.44,
      -22.38
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": false,
    "vol1Combos": [
      75,
      83,
      89,
      98,
      125,
      233,
      286,
      289,
      297,
      309,
      339
    ],
    "vol2Combos": [
      6,
      37,
      39,
      89
    ]
  },
  {
    "index": 138,
    "name": "Vandar Poel's Blue",
    "slug": "vander-poel's-blue",
    "ja": "褐色",
    "romaji": "Kachi-iro",
    "meaning": "Samurai victory dark indigo",
    "hex": "#064F6E",
    "rgb": [
      6,
      79,
      110
    ],
    "cmyk": [
      100,
      73,
      43,
      10
    ],
    "hsl": [
      198,
      90,
      23
    ],
    "lab": [
      30.78,
      -11.26,
      -24.52
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": false,
    "vol1Combos": [
      5,
      77,
      151,
      167,
      168,
      309,
      343,
      351,
      360
    ],
    "vol2Combos": [
      18,
      44,
      48,
      68,
      80
    ]
  },
  {
    "index": 139,
    "name": "Dark Tyrian Blue",
    "slug": "dark-tyrian-blue",
    "ja": "留紺",
    "romaji": "Tomekon",
    "meaning": "Deepest fixed indigo",
    "hex": "#12354E",
    "rgb": [
      18,
      53,
      78
    ],
    "cmyk": [
      90,
      66,
      36,
      50
    ],
    "hsl": [
      205,
      63,
      19
    ],
    "lab": [
      20.61,
      -5.84,
      -19.08
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": false,
    "vol1Combos": [
      2,
      60,
      67,
      119,
      141,
      245,
      279
    ],
    "vol2Combos": [
      5
    ]
  },
  {
    "index": 140,
    "name": "Dull Violet Black",
    "slug": "dull-violet-black",
    "ja": "鉄紺",
    "romaji": "Tetsukon",
    "meaning": "Iron midnight navy",
    "hex": "#0D1C43",
    "rgb": [
      13,
      28,
      67
    ],
    "cmyk": [
      100,
      90,
      38,
      50
    ],
    "hsl": [
      223,
      68,
      16
    ],
    "lab": [
      10.98,
      6.1,
      -26.94
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": false,
    "vol1Combos": [
      95,
      106,
      145,
      265,
      277,
      289,
      295,
      331
    ],
    "vol2Combos": [
      8,
      21,
      32,
      52,
      55,
      67,
      70
    ]
  },
  {
    "index": 141,
    "name": "Deep Indigo",
    "slug": "deep-indigo",
    "ja": "濃藍",
    "romaji": "Koiai",
    "meaning": "Midnight indigo",
    "hex": "#051230",
    "rgb": [
      5,
      18,
      48
    ],
    "cmyk": [
      100,
      92,
      52,
      60
    ],
    "hsl": [
      222,
      81,
      10
    ],
    "lab": [
      5.82,
      4.14,
      -21.79
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": false,
    "vol1Combos": [
      6,
      28,
      139,
      155,
      182,
      211,
      232
    ],
    "vol2Combos": [
      9,
      13,
      17,
      38,
      58,
      61,
      75
    ]
  },
  {
    "index": 142,
    "name": "Deep Slate Green",
    "slug": "deep-slate-green",
    "ja": "鉄色",
    "romaji": "Tetsu-iro",
    "meaning": "Forged iron green-slate",
    "hex": "#112F2C",
    "rgb": [
      17,
      47,
      44
    ],
    "cmyk": [
      80,
      50,
      60,
      70
    ],
    "hsl": [
      174,
      47,
      13
    ],
    "lab": [
      16.88,
      -12.14,
      -2.23
    ],
    "swatchGroup": 3,
    "swatchGroupName": "Blue / Indigo / Turquoise",
    "swatchGroupNameJa": "青・藍・浅葱系",
    "isBright": false,
    "vol1Combos": [
      84,
      149,
      166,
      271,
      318,
      325
    ],
    "vol2Combos": [
      14,
      30,
      31,
      36
    ]
  },
  {
    "index": 143,
    "name": "Grayish Lavender 1",
    "slug": "grayish-lavender-1",
    "ja": "藤色",
    "romaji": "Fuji-iro",
    "meaning": "Blooming wisteria lavender",
    "hex": "#B5B1D8",
    "rgb": [
      181,
      177,
      216
    ],
    "cmyk": [
      28,
      28,
      0,
      0
    ],
    "hsl": [
      246,
      33,
      77
    ],
    "lab": [
      73.42,
      7.46,
      -19.35
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": true,
    "vol1Combos": [
      8,
      15,
      159,
      177,
      218,
      248,
      307,
      356
    ],
    "vol2Combos": [
      16,
      19,
      62,
      75,
      87
    ]
  },
  {
    "index": 144,
    "name": "Grayish Lavender 2",
    "slug": "grayish-lavender-2",
    "ja": "紅掛空色",
    "romaji": "Benikakesora-iro",
    "meaning": "Twilight blush lavender",
    "hex": "#C0A9B3",
    "rgb": [
      192,
      169,
      179
    ],
    "cmyk": [
      25,
      33,
      20,
      0
    ],
    "hsl": [
      334,
      15,
      71
    ],
    "lab": [
      71.35,
      10.05,
      -2.21
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": true,
    "vol1Combos": [
      47,
      56,
      174,
      187,
      235,
      327,
      329,
      338
    ],
    "vol2Combos": [
      1,
      6,
      16,
      23,
      39
    ]
  },
  {
    "index": 145,
    "name": "Laelia Pink",
    "slug": "laelia-pink",
    "ja": "菖蒲色",
    "romaji": "Ayame-iro",
    "meaning": "Iris blossom orchid pink",
    "hex": "#CA92A8",
    "rgb": [
      202,
      146,
      168
    ],
    "cmyk": [
      20,
      48,
      18,
      0
    ],
    "hsl": [
      336,
      35,
      68
    ],
    "lab": [
      66.52,
      24.31,
      -2.66
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": true,
    "vol1Combos": [
      20,
      254,
      280,
      337
    ],
    "vol2Combos": [
      22,
      33,
      43,
      81
    ]
  },
  {
    "index": 146,
    "name": "Lilac",
    "slug": "lilac",
    "ja": "薄色",
    "romaji": "Usu-iro",
    "meaning": "Delicate lilac mist",
    "hex": "#B984AF",
    "rgb": [
      185,
      132,
      175
    ],
    "cmyk": [
      28,
      54,
      8,
      0
    ],
    "hsl": [
      311,
      27,
      62
    ],
    "lab": [
      61.53,
      25.92,
      -14.25
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": true,
    "vol1Combos": [
      143,
      162,
      282,
      347
    ],
    "vol2Combos": [
      8,
      39,
      62
    ]
  },
  {
    "index": 147,
    "name": "Eupatorium Purple",
    "slug": "eupatorium-purple",
    "ja": "藤袴",
    "romaji": "Fujibakama",
    "meaning": "Autumn thoroughwort purple",
    "hex": "#BF5892",
    "rgb": [
      191,
      88,
      146
    ],
    "cmyk": [
      25,
      79,
      12,
      0
    ],
    "hsl": [
      326,
      45,
      55
    ],
    "lab": [
      52.25,
      46.71,
      -11.72
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": true,
    "vol1Combos": [
      215,
      315,
      322
    ],
    "vol2Combos": [
      15
    ]
  },
  {
    "index": 148,
    "name": "Light Mauve",
    "slug": "light-mauve",
    "ja": "藤紫",
    "romaji": "Fujimurasaki",
    "meaning": "Wisteria mauve",
    "hex": "#9A72AA",
    "rgb": [
      154,
      114,
      170
    ],
    "cmyk": [
      43,
      62,
      5,
      0
    ],
    "hsl": [
      283,
      25,
      56
    ],
    "lab": [
      53.64,
      23.9,
      -23.98
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": true,
    "vol1Combos": [
      23,
      80,
      128,
      134,
      180,
      274,
      331,
      357
    ],
    "vol2Combos": []
  },
  {
    "index": 149,
    "name": "Aconite Violet",
    "slug": "aconite-violet",
    "ja": "半色",
    "romaji": "Hashita-iro",
    "meaning": "Monkshood violet",
    "hex": "#A36AA5",
    "rgb": [
      163,
      106,
      165
    ],
    "cmyk": [
      39,
      68,
      5,
      0
    ],
    "hsl": [
      298,
      25,
      53
    ],
    "lab": [
      52.67,
      30.7,
      -22.37
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": true,
    "vol1Combos": [
      43,
      64,
      90,
      187,
      220,
      257,
      269,
      301,
      307,
      324,
      344
    ],
    "vol2Combos": [
      11
    ]
  },
  {
    "index": 150,
    "name": "Dull Blue Violet",
    "slug": "dull-blue-violet",
    "ja": "藤納戸",
    "romaji": "Fujinando",
    "meaning": "Wisteria storeroom blue",
    "hex": "#80719E",
    "rgb": [
      128,
      113,
      158
    ],
    "cmyk": [
      57,
      60,
      17,
      0
    ],
    "hsl": [
      260,
      19,
      53
    ],
    "lab": [
      50.22,
      13.38,
      -22.46
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": true,
    "vol1Combos": [
      9,
      100
    ],
    "vol2Combos": [
      12
    ]
  },
  {
    "index": 151,
    "name": "Dark Soft Violet",
    "slug": "dark-soft-violet",
    "ja": "江戸紫",
    "romaji": "Edo-murasaki",
    "meaning": "Edo bluish-violet",
    "hex": "#66629C",
    "rgb": [
      102,
      98,
      156
    ],
    "cmyk": [
      70,
      68,
      13,
      0
    ],
    "hsl": [
      244,
      23,
      50
    ],
    "lab": [
      44,
      12.35,
      -31.17
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": false,
    "vol1Combos": [
      64,
      127,
      197
    ],
    "vol2Combos": [
      16
    ]
  },
  {
    "index": 152,
    "name": "Blue Violet",
    "slug": "blue-violet",
    "ja": "菫色",
    "romaji": "Sumire-iro",
    "meaning": "Wild violet blossom",
    "hex": "#6450A1",
    "rgb": [
      100,
      80,
      161
    ],
    "cmyk": [
      72,
      80,
      0,
      0
    ],
    "hsl": [
      255,
      34,
      47
    ],
    "lab": [
      39.12,
      23.57,
      -41.91
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": false,
    "vol1Combos": [
      116,
      175,
      196,
      322,
      345
    ],
    "vol2Combos": [
      39
    ]
  },
  {
    "index": 153,
    "name": "Violet Ultramarine",
    "slug": "violet-ultramarine",
    "ja": "今紫",
    "romaji": "Imamurasaki",
    "meaning": "Vibrant ultramarine purple",
    "hex": "#522E91",
    "rgb": [
      82,
      46,
      145
    ],
    "cmyk": [
      85,
      100,
      0,
      0
    ],
    "hsl": [
      262,
      52,
      37
    ],
    "lab": [
      28.22,
      34.26,
      -49.87
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": false,
    "vol1Combos": [],
    "vol2Combos": [
      46
    ]
  },
  {
    "index": 154,
    "name": "Purple Drab",
    "slug": "purple-drab",
    "ja": "藤鼠",
    "romaji": "Fuji-nezumi",
    "meaning": "Wisteria-tinted drab grey",
    "hex": "#84565B",
    "rgb": [
      132,
      86,
      91
    ],
    "cmyk": [
      38,
      65,
      49,
      26
    ],
    "hsl": [
      353,
      21,
      43
    ],
    "lab": [
      41.87,
      19.87,
      5.56
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": false,
    "vol1Combos": [
      236
    ],
    "vol2Combos": [
      25
    ]
  },
  {
    "index": 155,
    "name": "Deep Violet Plumbeous",
    "slug": "deep-violet-plumbeous",
    "ja": "鳩羽色",
    "romaji": "Hatoba-iro",
    "meaning": "Dove wing plumbeous grey",
    "hex": "#70727C",
    "rgb": [
      112,
      114,
      124
    ],
    "cmyk": [
      61,
      52,
      43,
      7
    ],
    "hsl": [
      230,
      5,
      46
    ],
    "lab": [
      48.03,
      0.79,
      -5.91
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": false,
    "vol1Combos": [
      183,
      192,
      218
    ],
    "vol2Combos": [
      3,
      6
    ]
  },
  {
    "index": 156,
    "name": "Vernonia Purple",
    "slug": "vernonia-purple",
    "ja": "梅紫",
    "romaji": "Umemurasaki",
    "meaning": "Plum blossom purple",
    "hex": "#8C4C62",
    "rgb": [
      140,
      76,
      98
    ],
    "cmyk": [
      42,
      78,
      46,
      15
    ],
    "hsl": [
      339,
      30,
      42
    ],
    "lab": [
      40.98,
      29.56,
      0.13
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": false,
    "vol1Combos": [
      13,
      24,
      168,
      183
    ],
    "vol2Combos": []
  },
  {
    "index": 157,
    "name": "Dark Slate Purple",
    "slug": "dark-slate-purple",
    "ja": "紫鼠",
    "romaji": "Murasaki-nezumi",
    "meaning": "Purple-tinted slate grey",
    "hex": "#704357",
    "rgb": [
      112,
      67,
      87
    ],
    "cmyk": [
      64,
      85,
      60,
      10
    ],
    "hsl": [
      333,
      25,
      35
    ],
    "lab": [
      34.31,
      22.22,
      -3.55
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": false,
    "vol1Combos": [
      225,
      248,
      350
    ],
    "vol2Combos": []
  },
  {
    "index": 158,
    "name": "Taupe Brown",
    "slug": "taupe-brown",
    "ja": "小豆鼠",
    "romaji": "Azuki-nezumi",
    "meaning": "Muted plum-bean taupe",
    "hex": "#7A4456",
    "rgb": [
      122,
      68,
      86
    ],
    "cmyk": [
      30,
      70,
      35,
      40
    ],
    "hsl": [
      340,
      28,
      37
    ],
    "lab": [
      36.17,
      25.64,
      0.06
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": false,
    "vol1Combos": [
      57,
      123,
      174,
      224,
      275,
      280,
      288,
      360
    ],
    "vol2Combos": [
      55
    ]
  },
  {
    "index": 159,
    "name": "Violet Carmine",
    "slug": "violet-carmine",
    "ja": "紅紫",
    "romaji": "Benimurasaki",
    "meaning": "Crimson-violet carmine",
    "hex": "#713B4C",
    "rgb": [
      113,
      59,
      76
    ],
    "cmyk": [
      64,
      90,
      70,
      10
    ],
    "hsl": [
      341,
      31,
      34
    ],
    "lab": [
      32.3,
      25.87,
      0.82
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": false,
    "vol1Combos": [
      337
    ],
    "vol2Combos": []
  },
  {
    "index": 160,
    "name": "Violet",
    "slug": "violet",
    "ja": "青紫",
    "romaji": "Aomurasaki",
    "meaning": "Deep blue-violet",
    "hex": "#4F4086",
    "rgb": [
      79,
      64,
      134
    ],
    "cmyk": [
      85,
      90,
      18,
      0
    ],
    "hsl": [
      253,
      35,
      39
    ],
    "lab": [
      31.49,
      20.67,
      -37.93
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": false,
    "vol1Combos": [
      42,
      56,
      130,
      156,
      164,
      181,
      205,
      214,
      226,
      316,
      331,
      335,
      360
    ],
    "vol2Combos": []
  },
  {
    "index": 161,
    "name": "Red Violet",
    "slug": "red-violet",
    "ja": "京紫",
    "romaji": "Kyō-murasaki",
    "meaning": "Kyoto gromwell purple",
    "hex": "#59256A",
    "rgb": [
      89,
      37,
      106
    ],
    "cmyk": [
      76,
      100,
      25,
      15
    ],
    "hsl": [
      285,
      48,
      28
    ],
    "lab": [
      25.05,
      33.11,
      -30.06
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": false,
    "vol1Combos": [
      4,
      37,
      134,
      136,
      170,
      172,
      183,
      316
    ],
    "vol2Combos": []
  },
  {
    "index": 162,
    "name": "Cotinga Purple",
    "slug": "cotinga-purple",
    "ja": "似紫",
    "romaji": "Nisemurasaki",
    "meaning": "Dark imperial plum",
    "hex": "#501345",
    "rgb": [
      80,
      19,
      69
    ],
    "cmyk": [
      66,
      100,
      42,
      40
    ],
    "hsl": [
      311,
      62,
      19
    ],
    "lab": [
      18.4,
      32.86,
      -15.76
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": false,
    "vol1Combos": [
      61,
      181,
      238,
      253,
      307,
      329,
      348
    ],
    "vol2Combos": [
      15,
      49,
      83
    ]
  },
  {
    "index": 163,
    "name": "Dusky Madder Violet",
    "slug": "dusky-madder-violet",
    "ja": "茄子紺",
    "romaji": "Nasukon",
    "meaning": "Aubergine eggplant violet",
    "hex": "#4E1D4C",
    "rgb": [
      78,
      29,
      76
    ],
    "cmyk": [
      75,
      100,
      46,
      30
    ],
    "hsl": [
      302,
      46,
      21
    ],
    "lab": [
      20.1,
      28.65,
      -18.26
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": false,
    "vol1Combos": [
      18,
      50,
      53,
      82,
      103,
      314
    ],
    "vol2Combos": [
      26,
      62
    ]
  },
  {
    "index": 164,
    "name": "Dark Perilla Purple",
    "slug": "dark-perilla-purple",
    "ja": "紫黒",
    "romaji": "Shikoku",
    "meaning": "Perilla leaf dark purple",
    "hex": "#542E36",
    "rgb": [
      84,
      46,
      54
    ],
    "cmyk": [
      77,
      95,
      85,
      20
    ],
    "hsl": [
      347,
      29,
      25
    ],
    "lab": [
      24.3,
      18.45,
      2.89
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": false,
    "vol1Combos": [],
    "vol2Combos": [
      35
    ]
  },
  {
    "index": 165,
    "name": "Dull Purplish Black",
    "slug": "dull-purplish-black",
    "ja": "黒紅",
    "romaji": "Kurobeni",
    "meaning": "Blackened crimson-purple",
    "hex": "#443B35",
    "rgb": [
      68,
      59,
      53
    ],
    "cmyk": [
      85,
      85,
      90,
      20
    ],
    "hsl": [
      24,
      12,
      24
    ],
    "lab": [
      25.66,
      3.06,
      4.91
    ],
    "swatchGroup": 4,
    "swatchGroupName": "Purple / Violet / Mauve",
    "swatchGroupNameJa": "紫・藤・菫系",
    "isBright": false,
    "vol1Combos": [],
    "vol2Combos": [
      45,
      47
    ]
  },
  {
    "index": 166,
    "name": "White",
    "slug": "white",
    "ja": "胡粉",
    "romaji": "Gofun",
    "meaning": "Seashell chalk white",
    "hex": "#FFFFFF",
    "rgb": [
      255,
      255,
      255
    ],
    "cmyk": [
      0,
      0,
      0,
      0
    ],
    "hsl": [
      0,
      0,
      100
    ],
    "lab": [
      100,
      0,
      0
    ],
    "swatchGroup": 5,
    "swatchGroupName": "White / Grey / Black",
    "swatchGroupNameJa": "白・鼠・墨系",
    "isBright": true,
    "vol1Combos": [
      55
    ],
    "vol2Combos": [
      1,
      7,
      10,
      33,
      38,
      41,
      48,
      51,
      73,
      75,
      77,
      84,
      87,
      90
    ]
  },
  {
    "index": 167,
    "name": "Neutral Gray",
    "slug": "neutral-gray",
    "ja": "銀鼠",
    "romaji": "Gin-nezumi",
    "meaning": "Silver-tinted grey",
    "hex": "#B6BFC1",
    "rgb": [
      182,
      191,
      193
    ],
    "cmyk": [
      29,
      18,
      20,
      0
    ],
    "hsl": [
      191,
      8,
      74
    ],
    "lab": [
      76.75,
      -3.03,
      -2.03
    ],
    "swatchGroup": 5,
    "swatchGroupName": "White / Grey / Black",
    "swatchGroupNameJa": "白・鼠・墨系",
    "isBright": true,
    "vol1Combos": [
      34,
      139,
      180,
      195,
      197,
      221,
      228,
      229,
      273,
      303,
      324,
      340,
      359
    ],
    "vol2Combos": [
      12,
      23,
      37,
      48,
      72
    ]
  },
  {
    "index": 168,
    "name": "Mineral Gray",
    "slug": "mineral-gray",
    "ja": "青鈍",
    "romaji": "Aonibi",
    "meaning": "Celadon mineral grey",
    "hex": "#A2B0AD",
    "rgb": [
      162,
      176,
      173
    ],
    "cmyk": [
      33,
      18,
      25,
      7
    ],
    "hsl": [
      167,
      8,
      66
    ],
    "lab": [
      70.75,
      -5.62,
      -0.1
    ],
    "swatchGroup": 5,
    "swatchGroupName": "White / Grey / Black",
    "swatchGroupNameJa": "白・鼠・墨系",
    "isBright": true,
    "vol1Combos": [
      11,
      30
    ],
    "vol2Combos": [
      10,
      44,
      71,
      86
    ]
  },
  {
    "index": 169,
    "name": "Warm Gray",
    "slug": "warm-gray",
    "ja": "利休白茶",
    "romaji": "Rikyū-shiracha",
    "meaning": "Warm ash tea grey",
    "hex": "#A1A39A",
    "rgb": [
      161,
      163,
      154
    ],
    "cmyk": [
      37,
      28,
      36,
      3
    ],
    "hsl": [
      73,
      5,
      62
    ],
    "lab": [
      66.75,
      -2.25,
      4.74
    ],
    "swatchGroup": 5,
    "swatchGroupName": "White / Grey / Black",
    "swatchGroupNameJa": "白・鼠・墨系",
    "isBright": true,
    "vol1Combos": [
      69,
      76,
      81,
      143,
      169,
      238,
      259,
      261
    ],
    "vol2Combos": [
      5
    ]
  },
  {
    "index": 170,
    "name": "Slate Color",
    "slug": "slate-color",
    "ja": "藍鼠",
    "romaji": "Ai-nezumi",
    "meaning": "Indigo-tinted slate",
    "hex": "#34454C",
    "rgb": [
      52,
      69,
      76
    ],
    "cmyk": [
      85,
      70,
      62,
      30
    ],
    "hsl": [
      198,
      19,
      25
    ],
    "lab": [
      27.85,
      -5.39,
      -6.97
    ],
    "swatchGroup": 5,
    "swatchGroupName": "White / Grey / Black",
    "swatchGroupNameJa": "白・鼠・墨系",
    "isBright": false,
    "vol1Combos": [
      27,
      33,
      57,
      140,
      202,
      243,
      245,
      251,
      253,
      263,
      296,
      329,
      335,
      357
    ],
    "vol2Combos": [
      63,
      71,
      82
    ]
  },
  {
    "index": 171,
    "name": "Black",
    "slug": "black",
    "ja": "墨",
    "romaji": "Sumi",
    "meaning": "Calligraphy pine-soot ink",
    "hex": "#111314",
    "rgb": [
      17,
      19,
      20
    ],
    "cmyk": [
      20,
      10,
      15,
      100
    ],
    "hsl": [
      200,
      8,
      7
    ],
    "lab": [
      5.63,
      -0.4,
      -1.12
    ],
    "swatchGroup": 5,
    "swatchGroupName": "White / Grey / Black",
    "swatchGroupNameJa": "白・鼠・墨系",
    "isBright": false,
    "vol1Combos": [
      46,
      52,
      62,
      69,
      112,
      117,
      144,
      190,
      207,
      216,
      221,
      242,
      255,
      256,
      269,
      276,
      288,
      298,
      313,
      323,
      337,
      340,
      344,
      349,
      352
    ],
    "vol2Combos": [
      5,
      64,
      69,
      77,
      85,
      88,
      90
    ]
  }
];

export const COLOR_BY_SLUG: Record<string, WadaColor> = Object.fromEntries(
  WADA_COLORS.map((c) => [c.slug, c])
);

export const VOL1_COMBINATIONS: WadaCombination[] = [
  {
    "id": "v1-1",
    "number": 1,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "English Red · Cerulean Blue",
    "titleJa": "丹色・露草色",
    "colors": [
      "english-red",
      "cerulean-blue"
    ]
  },
  {
    "id": "v1-2",
    "number": 2,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Yellow Orange · Dark Tyrian Blue",
    "titleJa": "蜜柑色・留紺",
    "colors": [
      "yellow-orange",
      "dark-tyrian-blue"
    ]
  },
  {
    "id": "v1-3",
    "number": 3,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Raw Sienna · Pale Lemon Yellow",
    "titleJa": "琥珀色・女郎花",
    "colors": [
      "raw-sienna",
      "pale-lemon-yellow"
    ]
  },
  {
    "id": "v1-4",
    "number": 4,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Isabella Color · Red Violet",
    "titleJa": "桑染・京紫",
    "colors": [
      "isabella-color",
      "red-violet"
    ]
  },
  {
    "id": "v1-5",
    "number": 5,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Cossack Green · Vandar Poel's Blue",
    "titleJa": "千歳緑・褐色",
    "colors": [
      "cossack-green",
      "vander-poel's-blue"
    ]
  },
  {
    "id": "v1-6",
    "number": 6,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Grenadine Pink · Deep Indigo",
    "titleJa": "甚三紅・濃藍",
    "colors": [
      "grenadine-pink",
      "deep-indigo"
    ]
  },
  {
    "id": "v1-7",
    "number": 7,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Orange · Glaucous Green",
    "titleJa": "橙色・青磁色",
    "colors": [
      "orange",
      "glaucous-green"
    ]
  },
  {
    "id": "v1-8",
    "number": 8,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Cinnamon Rufous · Grayish Lavender 1",
    "titleJa": "狐色・藤色",
    "colors": [
      "cinnamon-rufous",
      "grayish-lavender-1"
    ]
  },
  {
    "id": "v1-9",
    "number": 9,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Violet Red · Dull Blue Violet",
    "titleJa": "滅紫・藤納戸",
    "colors": [
      "violet-red",
      "dull-blue-violet"
    ]
  },
  {
    "id": "v1-10",
    "number": 10,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Cinnamon Rufous · Dark Citrine",
    "titleJa": "狐色・海松色",
    "colors": [
      "cinnamon-rufous",
      "dark-citrine"
    ]
  },
  {
    "id": "v1-11",
    "number": 11,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Ivory Buff · Mineral Gray",
    "titleJa": "練色・青鈍",
    "colors": [
      "ivory-buff",
      "mineral-gray"
    ]
  },
  {
    "id": "v1-12",
    "number": 12,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Isabella Color · Green Blue",
    "titleJa": "桑染・水浅葱",
    "colors": [
      "isabella-color",
      "green-blue"
    ]
  },
  {
    "id": "v1-13",
    "number": 13,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Raw Sienna · Vernonia Purple",
    "titleJa": "琥珀色・梅紫",
    "colors": [
      "raw-sienna",
      "vernonia-purple"
    ]
  },
  {
    "id": "v1-14",
    "number": 14,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Spinel Red · Naples Yellow",
    "titleJa": "撫子色・藤黄",
    "colors": [
      "spinel-red",
      "naples-yellow"
    ]
  },
  {
    "id": "v1-15",
    "number": 15,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Benzol Green · Grayish Lavender 1",
    "titleJa": "納戸色・藤色",
    "colors": [
      "benzol-green",
      "grayish-lavender-1"
    ]
  },
  {
    "id": "v1-16",
    "number": 16,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Vandyke Red · Pale King's Blue 2",
    "titleJa": "紅檜皮・水色",
    "colors": [
      "vandyke-red",
      "pale-king's-blue-2"
    ]
  },
  {
    "id": "v1-17",
    "number": 17,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Eugenia Red 2 · Sea Green",
    "titleJa": "唐紅・浅葱色",
    "colors": [
      "eugenia-red-2",
      "sea-green"
    ]
  },
  {
    "id": "v1-18",
    "number": 18,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Fawn · Dusky Madder Violet",
    "titleJa": "小鹿色・茄子紺",
    "colors": [
      "fawn",
      "dusky-madder-violet"
    ]
  },
  {
    "id": "v1-19",
    "number": 19,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Mars Brown Tobacco · Light Green",
    "titleJa": "煙草色・若竹色",
    "colors": [
      "mars-brown-tobacco",
      "light-green"
    ]
  },
  {
    "id": "v1-20",
    "number": 20,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Calamine Blue · Laelia Pink",
    "titleJa": "空色・菖蒲色",
    "colors": [
      "calamine-blue",
      "laelia-pink"
    ]
  },
  {
    "id": "v1-21",
    "number": 21,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Grenadine Pink · Sea Green",
    "titleJa": "甚三紅・浅葱色",
    "colors": [
      "grenadine-pink",
      "sea-green"
    ]
  },
  {
    "id": "v1-22",
    "number": 22,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Yellow · Deep Lyons Blue",
    "titleJa": "黄色・瑠璃紺",
    "colors": [
      "yellow",
      "deep-lyons-blue"
    ]
  },
  {
    "id": "v1-23",
    "number": 23,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Cinnamon Buff · Light Mauve",
    "titleJa": "伽羅色・藤紫",
    "colors": [
      "cinnamon-buff",
      "light-mauve"
    ]
  },
  {
    "id": "v1-24",
    "number": 24,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Sepia · Vernonia Purple",
    "titleJa": "憲法黒茶・梅紫",
    "colors": [
      "sepia",
      "vernonia-purple"
    ]
  },
  {
    "id": "v1-25",
    "number": 25,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Etruscan Red · Nile Blue",
    "titleJa": "弁柄色・瓶覗",
    "colors": [
      "etruscan-red",
      "nile-blue"
    ]
  },
  {
    "id": "v1-26",
    "number": 26,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Golden Yellow · Pale Raw Umber",
    "titleJa": "山吹色・煤色",
    "colors": [
      "golden-yellow",
      "pale-raw-umber"
    ]
  },
  {
    "id": "v1-27",
    "number": 27,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Corinthian Pink · Slate Color",
    "titleJa": "退紅・藍鼠",
    "colors": [
      "corinthian-pink",
      "slate-color"
    ]
  },
  {
    "id": "v1-28",
    "number": 28,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Madder Brown · Deep Indigo",
    "titleJa": "栗梅・濃藍",
    "colors": [
      "madder-brown",
      "deep-indigo"
    ]
  },
  {
    "id": "v1-29",
    "number": 29,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Kronbergs Green · Salvia Blue",
    "titleJa": "老竹色・桔梗色",
    "colors": [
      "kronbergs-green",
      "salvia-blue"
    ]
  },
  {
    "id": "v1-30",
    "number": 30,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Pompeian Red · Mineral Gray",
    "titleJa": "茜色・青鈍",
    "colors": [
      "pompeian-red",
      "mineral-gray"
    ]
  },
  {
    "id": "v1-31",
    "number": 31,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Red Orange · Pale Lemon Yellow",
    "titleJa": "朱色・女郎花",
    "colors": [
      "red-orange",
      "pale-lemon-yellow"
    ]
  },
  {
    "id": "v1-32",
    "number": 32,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Ochraceous Salmon · Light Green",
    "titleJa": "洗朱・若竹色",
    "colors": [
      "ochraceous-salmon",
      "light-green"
    ]
  },
  {
    "id": "v1-33",
    "number": 33,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Raw Sienna · Slate Color",
    "titleJa": "琥珀色・藍鼠",
    "colors": [
      "raw-sienna",
      "slate-color"
    ]
  },
  {
    "id": "v1-34",
    "number": 34,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Eosine Pink · Neutral Gray",
    "titleJa": "桃園色・銀鼠",
    "colors": [
      "eosine-pink",
      "neutral-gray"
    ]
  },
  {
    "id": "v1-35",
    "number": 35,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Light Brown Drab · Carmine Red",
    "titleJa": "梅鼠・紅",
    "colors": [
      "light-brown-drab",
      "carmine-red"
    ]
  },
  {
    "id": "v1-36",
    "number": 36,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Sulphine Yellow · Turquoise Green",
    "titleJa": "黄土・白緑",
    "colors": [
      "sulphine-yellow",
      "turquoise-green"
    ]
  },
  {
    "id": "v1-37",
    "number": 37,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Brick Red · Red Violet",
    "titleJa": "煉瓦色・京紫",
    "colors": [
      "brick-red",
      "red-violet"
    ]
  },
  {
    "id": "v1-38",
    "number": 38,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Diamine Green · Deep Lyons Blue",
    "titleJa": "常盤色・瑠璃紺",
    "colors": [
      "diamine-green",
      "deep-lyons-blue"
    ]
  },
  {
    "id": "v1-39",
    "number": 39,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Carmine · Helvetia Blue",
    "titleJa": "洋紅・紺青",
    "colors": [
      "carmine",
      "helvetia-blue"
    ]
  },
  {
    "id": "v1-40",
    "number": 40,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Vinaceous Tawny · Citron Yellow",
    "titleJa": "赭・鶸色",
    "colors": [
      "vinaceous-tawny",
      "citron-yellow"
    ]
  },
  {
    "id": "v1-41",
    "number": 41,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Dark Citrine · Calamine Blue",
    "titleJa": "海松色・空色",
    "colors": [
      "dark-citrine",
      "calamine-blue"
    ]
  },
  {
    "id": "v1-42",
    "number": 42,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Yellow Ocher · Violet",
    "titleJa": "黄土色・青紫",
    "colors": [
      "yellow-ocher",
      "violet"
    ]
  },
  {
    "id": "v1-43",
    "number": 43,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Corinthian Pink · Aconite Violet",
    "titleJa": "退紅・半色",
    "colors": [
      "corinthian-pink",
      "aconite-violet"
    ]
  },
  {
    "id": "v1-44",
    "number": 44,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Light Porcelain Green · Olympic Blue",
    "titleJa": "青碧・縹色",
    "colors": [
      "light-porcelain-green",
      "olympic-blue"
    ]
  },
  {
    "id": "v1-45",
    "number": 45,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Seashell Pink · Lemon Yellow",
    "titleJa": "桜貝色・菜の花色",
    "colors": [
      "seashell-pink",
      "lemon-yellow"
    ]
  },
  {
    "id": "v1-46",
    "number": 46,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Orange · Black",
    "titleJa": "橙色・墨",
    "colors": [
      "orange",
      "black"
    ]
  },
  {
    "id": "v1-47",
    "number": 47,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Etruscan Red · Grayish Lavender 2",
    "titleJa": "弁柄色・紅掛空色",
    "colors": [
      "etruscan-red",
      "grayish-lavender-2"
    ]
  },
  {
    "id": "v1-48",
    "number": 48,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Rosolanc Purple · Helvetia Blue",
    "titleJa": "牡丹色・紺青",
    "colors": [
      "rosolanc-purple",
      "helvetia-blue"
    ]
  },
  {
    "id": "v1-49",
    "number": 49,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Pale King's Blue 2 · Blue",
    "titleJa": "水色・瑠璃色",
    "colors": [
      "pale-king's-blue-2",
      "blue"
    ]
  },
  {
    "id": "v1-50",
    "number": 50,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Ivory Buff · Dusky Madder Violet",
    "titleJa": "練色・茄子紺",
    "colors": [
      "ivory-buff",
      "dusky-madder-violet"
    ]
  },
  {
    "id": "v1-51",
    "number": 51,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Carmine Red · Blue",
    "titleJa": "紅・瑠璃色",
    "colors": [
      "carmine-red",
      "blue"
    ]
  },
  {
    "id": "v1-52",
    "number": 52,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Sulphur Yellow · Black",
    "titleJa": "硫黄色・墨",
    "colors": [
      "sulphur-yellow",
      "black"
    ]
  },
  {
    "id": "v1-53",
    "number": 53,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Yellow Orange · Dusky Madder Violet",
    "titleJa": "蜜柑色・茄子紺",
    "colors": [
      "yellow-orange",
      "dusky-madder-violet"
    ]
  },
  {
    "id": "v1-54",
    "number": 54,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Benzol Green · Light Glaucous Blue",
    "titleJa": "納戸色・薄花色",
    "colors": [
      "benzol-green",
      "light-glaucous-blue"
    ]
  },
  {
    "id": "v1-55",
    "number": 55,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Old Rose · White",
    "titleJa": "長春色・胡粉",
    "colors": [
      "old-rose",
      "white"
    ]
  },
  {
    "id": "v1-56",
    "number": 56,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Grayish Lavender 2 · Violet",
    "titleJa": "紅掛空色・青紫",
    "colors": [
      "grayish-lavender-2",
      "violet"
    ]
  },
  {
    "id": "v1-57",
    "number": 57,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Taupe Brown · Slate Color",
    "titleJa": "小豆鼠・藍鼠",
    "colors": [
      "taupe-brown",
      "slate-color"
    ]
  },
  {
    "id": "v1-58",
    "number": 58,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Hay's Russet · Sea Green",
    "titleJa": "小豆色・浅葱色",
    "colors": [
      "hay's-russet",
      "sea-green"
    ]
  },
  {
    "id": "v1-59",
    "number": 59,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Eosine Pink · Citrine",
    "titleJa": "桃園色・鶯茶",
    "colors": [
      "eosine-pink",
      "citrine"
    ]
  },
  {
    "id": "v1-60",
    "number": 60,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Pale Lemon Yellow · Dark Tyrian Blue",
    "titleJa": "女郎花・留紺",
    "colors": [
      "pale-lemon-yellow",
      "dark-tyrian-blue"
    ]
  },
  {
    "id": "v1-61",
    "number": 61,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Light Green Yellow · Cotinga Purple",
    "titleJa": "若草色・似紫",
    "colors": [
      "light-green-yellow",
      "cotinga-purple"
    ]
  },
  {
    "id": "v1-62",
    "number": 62,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Yellow · Black",
    "titleJa": "黄色・墨",
    "colors": [
      "yellow",
      "black"
    ]
  },
  {
    "id": "v1-63",
    "number": 63,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Vistoris Lake · Cerulean Blue",
    "titleJa": "海老茶・露草色",
    "colors": [
      "vistoris-lake",
      "cerulean-blue"
    ]
  },
  {
    "id": "v1-64",
    "number": 64,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Aconite Violet · Dark Soft Violet",
    "titleJa": "半色・江戸紫",
    "colors": [
      "aconite-violet",
      "dark-soft-violet"
    ]
  },
  {
    "id": "v1-65",
    "number": 65,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Sulphine Yellow · Calamine Blue",
    "titleJa": "黄土・空色",
    "colors": [
      "sulphine-yellow",
      "calamine-blue"
    ]
  },
  {
    "id": "v1-66",
    "number": 66,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Olive Ocher · Olive Green",
    "titleJa": "根岸色・海松茶",
    "colors": [
      "olive-ocher",
      "olive-green"
    ]
  },
  {
    "id": "v1-67",
    "number": 67,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Olympic Blue · Dark Tyrian Blue",
    "titleJa": "縹色・留紺",
    "colors": [
      "olympic-blue",
      "dark-tyrian-blue"
    ]
  },
  {
    "id": "v1-68",
    "number": 68,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Light Brown Drab · Yellow",
    "titleJa": "梅鼠・黄色",
    "colors": [
      "light-brown-drab",
      "yellow"
    ]
  },
  {
    "id": "v1-69",
    "number": 69,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Warm Gray · Black",
    "titleJa": "利休白茶・墨",
    "colors": [
      "warm-gray",
      "black"
    ]
  },
  {
    "id": "v1-70",
    "number": 70,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Raw Sienna · Lincoln Green",
    "titleJa": "琥珀色・深緑",
    "colors": [
      "raw-sienna",
      "lincoln-green"
    ]
  },
  {
    "id": "v1-71",
    "number": 71,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Pompeian Red · Ochraceous Salmon",
    "titleJa": "茜色・洗朱",
    "colors": [
      "pompeian-red",
      "ochraceous-salmon"
    ]
  },
  {
    "id": "v1-72",
    "number": 72,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Sulphur Yellow · Pale King's Blue 2",
    "titleJa": "硫黄色・水色",
    "colors": [
      "sulphur-yellow",
      "pale-king's-blue-2"
    ]
  },
  {
    "id": "v1-73",
    "number": 73,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Pale Raw Umber · Rainette Green",
    "titleJa": "煤色・青丹",
    "colors": [
      "pale-raw-umber",
      "rainette-green"
    ]
  },
  {
    "id": "v1-74",
    "number": 74,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Turquoise Green · Green Blue",
    "titleJa": "白緑・水浅葱",
    "colors": [
      "turquoise-green",
      "green-blue"
    ]
  },
  {
    "id": "v1-75",
    "number": 75,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Pale King's Blue 2 · Violet Blue",
    "titleJa": "水色・紺桔梗",
    "colors": [
      "pale-king's-blue-2",
      "violet-blue"
    ]
  },
  {
    "id": "v1-76",
    "number": 76,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Pale Lemon Yellow · Warm Gray",
    "titleJa": "女郎花・利休白茶",
    "colors": [
      "pale-lemon-yellow",
      "warm-gray"
    ]
  },
  {
    "id": "v1-77",
    "number": 77,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Eugenia Red 2 · Vandar Poel's Blue",
    "titleJa": "唐紅・褐色",
    "colors": [
      "eugenia-red-2",
      "vander-poel's-blue"
    ]
  },
  {
    "id": "v1-78",
    "number": 78,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Pinkish Cinnamon · Venice Green",
    "titleJa": "丁子色・新橋色",
    "colors": [
      "pinkish-cinnamon",
      "venice-green"
    ]
  },
  {
    "id": "v1-79",
    "number": 79,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Madder Brown · Green Blue",
    "titleJa": "栗梅・水浅葱",
    "colors": [
      "madder-brown",
      "green-blue"
    ]
  },
  {
    "id": "v1-80",
    "number": 80,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Sulphur Yellow · Light Mauve",
    "titleJa": "硫黄色・藤紫",
    "colors": [
      "sulphur-yellow",
      "light-mauve"
    ]
  },
  {
    "id": "v1-81",
    "number": 81,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Golden Yellow · Warm Gray",
    "titleJa": "山吹色・利休白茶",
    "colors": [
      "golden-yellow",
      "warm-gray"
    ]
  },
  {
    "id": "v1-82",
    "number": 82,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Hay's Russet · Dusky Madder Violet",
    "titleJa": "小豆色・茄子紺",
    "colors": [
      "hay's-russet",
      "dusky-madder-violet"
    ]
  },
  {
    "id": "v1-83",
    "number": 83,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Olive Buff · Violet Blue",
    "titleJa": "柳茶・紺桔梗",
    "colors": [
      "olive-buff",
      "violet-blue"
    ]
  },
  {
    "id": "v1-84",
    "number": 84,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Seashell Pink · Deep Slate Green",
    "titleJa": "桜貝色・鉄色",
    "colors": [
      "seashell-pink",
      "deep-slate-green"
    ]
  },
  {
    "id": "v1-85",
    "number": 85,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Vinaceous Tawny · Antwarp Blue",
    "titleJa": "赭・藍鉄",
    "colors": [
      "vinaceous-tawny",
      "antwarp-blue"
    ]
  },
  {
    "id": "v1-86",
    "number": 86,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Raw Sienna · Sea Green",
    "titleJa": "琥珀色・浅葱色",
    "colors": [
      "raw-sienna",
      "sea-green"
    ]
  },
  {
    "id": "v1-87",
    "number": 87,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Corinthian Pink · Citron Yellow",
    "titleJa": "退紅・鶸色",
    "colors": [
      "corinthian-pink",
      "citron-yellow"
    ]
  },
  {
    "id": "v1-88",
    "number": 88,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Seashell Pink · Blue",
    "titleJa": "桜貝色・瑠璃色",
    "colors": [
      "seashell-pink",
      "blue"
    ]
  },
  {
    "id": "v1-89",
    "number": 89,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Yellow Orange · Violet Blue",
    "titleJa": "蜜柑色・紺桔梗",
    "colors": [
      "yellow-orange",
      "violet-blue"
    ]
  },
  {
    "id": "v1-90",
    "number": 90,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Eosine Pink · Aconite Violet",
    "titleJa": "桃園色・半色",
    "colors": [
      "eosine-pink",
      "aconite-violet"
    ]
  },
  {
    "id": "v1-91",
    "number": 91,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Vistoris Lake · Orange Rufous",
    "titleJa": "海老茶・柿色",
    "colors": [
      "vistoris-lake",
      "orange-rufous"
    ]
  },
  {
    "id": "v1-92",
    "number": 92,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Coral Red · Benzol Green",
    "titleJa": "珊瑚色・納戸色",
    "colors": [
      "coral-red",
      "benzol-green"
    ]
  },
  {
    "id": "v1-93",
    "number": 93,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Citrine · Light Glaucous Blue",
    "titleJa": "鶯茶・薄花色",
    "colors": [
      "citrine",
      "light-glaucous-blue"
    ]
  },
  {
    "id": "v1-94",
    "number": 94,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Ivory Buff · Dusky Green",
    "titleJa": "練色・鉄御納戸",
    "colors": [
      "ivory-buff",
      "dusky-green"
    ]
  },
  {
    "id": "v1-95",
    "number": 95,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Hay's Russet · Dull Violet Black",
    "titleJa": "小豆色・鉄紺",
    "colors": [
      "hay's-russet",
      "dull-violet-black"
    ]
  },
  {
    "id": "v1-96",
    "number": 96,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Yellow Ocher · Olive",
    "titleJa": "黄土色・鶯色",
    "colors": [
      "yellow-ocher",
      "olive"
    ]
  },
  {
    "id": "v1-97",
    "number": 97,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Corinthian Pink · Etruscan Red",
    "titleJa": "退紅・弁柄色",
    "colors": [
      "corinthian-pink",
      "etruscan-red"
    ]
  },
  {
    "id": "v1-98",
    "number": 98,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Madder Brown · Violet Blue",
    "titleJa": "栗梅・紺桔梗",
    "colors": [
      "madder-brown",
      "violet-blue"
    ]
  },
  {
    "id": "v1-99",
    "number": 99,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Pale Lemon Yellow · Cerulean Blue",
    "titleJa": "女郎花・露草色",
    "colors": [
      "pale-lemon-yellow",
      "cerulean-blue"
    ]
  },
  {
    "id": "v1-100",
    "number": 100,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Buffy Citrine · Dull Blue Violet",
    "titleJa": "利休茶・藤納戸",
    "colors": [
      "buffy-citrine",
      "dull-blue-violet"
    ]
  },
  {
    "id": "v1-101",
    "number": 101,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Cameo Pink · Deep Lyons Blue",
    "titleJa": "薄紅梅・瑠璃紺",
    "colors": [
      "cameo-pink",
      "deep-lyons-blue"
    ]
  },
  {
    "id": "v1-102",
    "number": 102,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Ivory Buff · Orange Rufous",
    "titleJa": "練色・柿色",
    "colors": [
      "ivory-buff",
      "orange-rufous"
    ]
  },
  {
    "id": "v1-103",
    "number": 103,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Cinnamon Rufous · Dusky Madder Violet",
    "titleJa": "狐色・茄子紺",
    "colors": [
      "cinnamon-rufous",
      "dusky-madder-violet"
    ]
  },
  {
    "id": "v1-104",
    "number": 104,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Carmine Red · Sulphur Yellow",
    "titleJa": "紅・硫黄色",
    "colors": [
      "carmine-red",
      "sulphur-yellow"
    ]
  },
  {
    "id": "v1-105",
    "number": 105,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Cameo Pink · Chromium Green",
    "titleJa": "薄紅梅・緑青色",
    "colors": [
      "cameo-pink",
      "chromium-green"
    ]
  },
  {
    "id": "v1-106",
    "number": 106,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Antwarp Blue · Dull Violet Black",
    "titleJa": "藍鉄・鉄紺",
    "colors": [
      "antwarp-blue",
      "dull-violet-black"
    ]
  },
  {
    "id": "v1-107",
    "number": 107,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Apricot Yellow · Light Grayish Olive",
    "titleJa": "支子色・梅幸茶",
    "colors": [
      "apricot-yellow",
      "light-grayish-olive"
    ]
  },
  {
    "id": "v1-108",
    "number": 108,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Eosine Pink · Brick Red",
    "titleJa": "桃園色・煉瓦色",
    "colors": [
      "eosine-pink",
      "brick-red"
    ]
  },
  {
    "id": "v1-109",
    "number": 109,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Pale Lemon Yellow · Blackish Olive",
    "titleJa": "女郎花・黒緑",
    "colors": [
      "pale-lemon-yellow",
      "blackish-olive"
    ]
  },
  {
    "id": "v1-110",
    "number": 110,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Brown · Vandyke Brown",
    "titleJa": "茶色・焦茶",
    "colors": [
      "brown",
      "vandyke-brown"
    ]
  },
  {
    "id": "v1-111",
    "number": 111,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Pale Lemon Yellow · Yellow Green",
    "titleJa": "女郎花・若葉色",
    "colors": [
      "pale-lemon-yellow",
      "yellow-green"
    ]
  },
  {
    "id": "v1-112",
    "number": 112,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Grenadine Pink · Black",
    "titleJa": "甚三紅・墨",
    "colors": [
      "grenadine-pink",
      "black"
    ]
  },
  {
    "id": "v1-113",
    "number": 113,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Seashell Pink · Vandyke Brown",
    "titleJa": "桜貝色・焦茶",
    "colors": [
      "seashell-pink",
      "vandyke-brown"
    ]
  },
  {
    "id": "v1-114",
    "number": 114,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Orange Yellow · Antwarp Blue",
    "titleJa": "鬱金色・藍鉄",
    "colors": [
      "orange-yellow",
      "antwarp-blue"
    ]
  },
  {
    "id": "v1-115",
    "number": 115,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Naples Yellow · Peach Red",
    "titleJa": "藤黄・桃色",
    "colors": [
      "naples-yellow",
      "peach-red"
    ]
  },
  {
    "id": "v1-116",
    "number": 116,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Cameo Pink · Blue Violet",
    "titleJa": "薄紅梅・菫色",
    "colors": [
      "cameo-pink",
      "blue-violet"
    ]
  },
  {
    "id": "v1-117",
    "number": 117,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Carmine · Black",
    "titleJa": "洋紅・墨",
    "colors": [
      "carmine",
      "black"
    ]
  },
  {
    "id": "v1-118",
    "number": 118,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Yellow Ocher · Vandyke Brown",
    "titleJa": "黄土色・焦茶",
    "colors": [
      "yellow-ocher",
      "vandyke-brown"
    ]
  },
  {
    "id": "v1-119",
    "number": 119,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Light Glaucous Blue · Dark Tyrian Blue",
    "titleJa": "薄花色・留紺",
    "colors": [
      "light-glaucous-blue",
      "dark-tyrian-blue"
    ]
  },
  {
    "id": "v1-120",
    "number": 120,
    "volume": 1,
    "section": "2 Colors (Duos)",
    "sectionJa": "二色配色",
    "title": "Cameo Pink · Pompeian Red",
    "titleJa": "薄紅梅・茜色",
    "colors": [
      "cameo-pink",
      "pompeian-red"
    ]
  },
  {
    "id": "v1-121",
    "number": 121,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Brown · Ochraceous Salmon · Lincoln Green",
    "titleJa": "茶色・洗朱・深緑",
    "colors": [
      "brown",
      "ochraceous-salmon",
      "lincoln-green"
    ]
  },
  {
    "id": "v1-122",
    "number": 122,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Carmine · Cream Yellow · Benzol Green",
    "titleJa": "洋紅・刈安色・納戸色",
    "colors": [
      "carmine",
      "cream-yellow",
      "benzol-green"
    ]
  },
  {
    "id": "v1-123",
    "number": 123,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Coral Red · Lemon Yellow · Taupe Brown",
    "titleJa": "珊瑚色・菜の花色・小豆鼠",
    "colors": [
      "coral-red",
      "lemon-yellow",
      "taupe-brown"
    ]
  },
  {
    "id": "v1-124",
    "number": 124,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Pale Burnt Lake · Yellow Ocher · Olive Yellow",
    "titleJa": "蘇芳樺・黄土色・青朽葉",
    "colors": [
      "pale-burnt-lake",
      "yellow-ocher",
      "olive-yellow"
    ]
  },
  {
    "id": "v1-125",
    "number": 125,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Fawn · Cerulean Blue · Violet Blue",
    "titleJa": "小鹿色・露草色・紺桔梗",
    "colors": [
      "fawn",
      "cerulean-blue",
      "violet-blue"
    ]
  },
  {
    "id": "v1-126",
    "number": 126,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Ivory Buff · Yellow Ocher · Deep Lyons Blue",
    "titleJa": "練色・黄土色・瑠璃紺",
    "colors": [
      "ivory-buff",
      "yellow-ocher",
      "deep-lyons-blue"
    ]
  },
  {
    "id": "v1-127",
    "number": 127,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Cinnamon Buff · Pistachio Green · Dark Soft Violet",
    "titleJa": "伽羅色・青竹色・江戸紫",
    "colors": [
      "cinnamon-buff",
      "pistachio-green",
      "dark-soft-violet"
    ]
  },
  {
    "id": "v1-128",
    "number": 128,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Corinthian Pink · Venice Green · Light Mauve",
    "titleJa": "退紅・新橋色・藤紫",
    "colors": [
      "corinthian-pink",
      "venice-green",
      "light-mauve"
    ]
  },
  {
    "id": "v1-129",
    "number": 129,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Apricot Yellow · Khaki / Tawny Olive · Salvia Blue",
    "titleJa": "支子色・朽葉色・桔梗色",
    "colors": [
      "apricot-yellow",
      "khaki-tawny-olive",
      "salvia-blue"
    ]
  },
  {
    "id": "v1-130",
    "number": 130,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Raw Sienna · Carmine Red · Violet",
    "titleJa": "琥珀色・紅・青紫",
    "colors": [
      "raw-sienna",
      "carmine-red",
      "violet"
    ]
  },
  {
    "id": "v1-131",
    "number": 131,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Raw Sienna · English Red · Peacock Blue",
    "titleJa": "琥珀色・丹色・孔雀青",
    "colors": [
      "raw-sienna",
      "english-red",
      "peacock-blue"
    ]
  },
  {
    "id": "v1-132",
    "number": 132,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Sulphur Yellow · Golden Yellow · Citrine",
    "titleJa": "硫黄色・山吹色・鶯茶",
    "colors": [
      "sulphur-yellow",
      "golden-yellow",
      "citrine"
    ]
  },
  {
    "id": "v1-133",
    "number": 133,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Vandyke Red · Citrine · Sea Green",
    "titleJa": "紅檜皮・鶯茶・浅葱色",
    "colors": [
      "vandyke-red",
      "citrine",
      "sea-green"
    ]
  },
  {
    "id": "v1-134",
    "number": 134,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Eosine Pink · Light Mauve · Red Violet",
    "titleJa": "桃園色・藤紫・京紫",
    "colors": [
      "eosine-pink",
      "light-mauve",
      "red-violet"
    ]
  },
  {
    "id": "v1-135",
    "number": 135,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Sulphur Yellow · Cossack Green · Salvia Blue",
    "titleJa": "硫黄色・千歳緑・桔梗色",
    "colors": [
      "sulphur-yellow",
      "cossack-green",
      "salvia-blue"
    ]
  },
  {
    "id": "v1-136",
    "number": 136,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Scarlet · Dull Viridian Green · Red Violet",
    "titleJa": "緋色・青緑・京紫",
    "colors": [
      "scarlet",
      "dull-viridian-green",
      "red-violet"
    ]
  },
  {
    "id": "v1-137",
    "number": 137,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Etruscan Red · Cinnamon Buff · Pistachio Green",
    "titleJa": "弁柄色・伽羅色・青竹色",
    "colors": [
      "etruscan-red",
      "cinnamon-buff",
      "pistachio-green"
    ]
  },
  {
    "id": "v1-138",
    "number": 138,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Golden Yellow · Lemon Yellow · Venice Green",
    "titleJa": "山吹色・菜の花色・新橋色",
    "colors": [
      "golden-yellow",
      "lemon-yellow",
      "venice-green"
    ]
  },
  {
    "id": "v1-139",
    "number": 139,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Salvia Blue · Deep Indigo · Neutral Gray",
    "titleJa": "桔梗色・濃藍・銀鼠",
    "colors": [
      "salvia-blue",
      "deep-indigo",
      "neutral-gray"
    ]
  },
  {
    "id": "v1-140",
    "number": 140,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Golden Yellow · Antwarp Blue · Slate Color",
    "titleJa": "山吹色・藍鉄・藍鼠",
    "colors": [
      "golden-yellow",
      "antwarp-blue",
      "slate-color"
    ]
  },
  {
    "id": "v1-141",
    "number": 141,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Orange · Yellow Green · Dark Tyrian Blue",
    "titleJa": "橙色・若葉色・留紺",
    "colors": [
      "orange",
      "yellow-green",
      "dark-tyrian-blue"
    ]
  },
  {
    "id": "v1-142",
    "number": 142,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Hydrangea Red · Sulphine Yellow · Salvia Blue",
    "titleJa": "紫陽花紅・黄土・桔梗色",
    "colors": [
      "hydrangea-red",
      "sulphine-yellow",
      "salvia-blue"
    ]
  },
  {
    "id": "v1-143",
    "number": 143,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Blue · Lilac · Warm Gray",
    "titleJa": "瑠璃色・薄色・利休白茶",
    "colors": [
      "blue",
      "lilac",
      "warm-gray"
    ]
  },
  {
    "id": "v1-144",
    "number": 144,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Rosolanc Purple · Orange · Black",
    "titleJa": "牡丹色・橙色・墨",
    "colors": [
      "rosolanc-purple",
      "orange",
      "black"
    ]
  },
  {
    "id": "v1-145",
    "number": 145,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Brown · Citron Yellow · Dull Violet Black",
    "titleJa": "茶色・鶸色・鉄紺",
    "colors": [
      "brown",
      "citron-yellow",
      "dull-violet-black"
    ]
  },
  {
    "id": "v1-146",
    "number": 146,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Khaki / Tawny Olive · Deep Grayish Olive · Diamine Green",
    "titleJa": "朽葉色・藍海松茶・常盤色",
    "colors": [
      "khaki-tawny-olive",
      "deep-grayish-olive",
      "diamine-green"
    ]
  },
  {
    "id": "v1-147",
    "number": 147,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Spinel Red · Vandyke Red · Turquoise Green",
    "titleJa": "撫子色・紅檜皮・白緑",
    "colors": [
      "spinel-red",
      "vandyke-red",
      "turquoise-green"
    ]
  },
  {
    "id": "v1-148",
    "number": 148,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Olive Ocher · Orange Yellow · Cerulean Blue",
    "titleJa": "根岸色・鬱金色・露草色",
    "colors": [
      "olive-ocher",
      "orange-yellow",
      "cerulean-blue"
    ]
  },
  {
    "id": "v1-149",
    "number": 149,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Olive Ocher · Orange · Deep Slate Green",
    "titleJa": "根岸色・橙色・鉄色",
    "colors": [
      "olive-ocher",
      "orange",
      "deep-slate-green"
    ]
  },
  {
    "id": "v1-150",
    "number": 150,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Seashell Pink · Citron Yellow · Glaucous Green",
    "titleJa": "桜貝色・鶸色・青磁色",
    "colors": [
      "seashell-pink",
      "citron-yellow",
      "glaucous-green"
    ]
  },
  {
    "id": "v1-151",
    "number": 151,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Sulphur Yellow · Yellow Orange · Vandar Poel's Blue",
    "titleJa": "硫黄色・蜜柑色・褐色",
    "colors": [
      "sulphur-yellow",
      "yellow-orange",
      "vander-poel's-blue"
    ]
  },
  {
    "id": "v1-152",
    "number": 152,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Etruscan Red · Hay's Russet · Light Glaucous Blue",
    "titleJa": "弁柄色・小豆色・薄花色",
    "colors": [
      "etruscan-red",
      "hay's-russet",
      "light-glaucous-blue"
    ]
  },
  {
    "id": "v1-153",
    "number": 153,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Eosine Pink · Orange Yellow · Citron Yellow",
    "titleJa": "桃園色・鬱金色・鶸色",
    "colors": [
      "eosine-pink",
      "orange-yellow",
      "citron-yellow"
    ]
  },
  {
    "id": "v1-154",
    "number": 154,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Carmine · Yellow · Blue",
    "titleJa": "洋紅・黄色・瑠璃色",
    "colors": [
      "carmine",
      "yellow",
      "blue"
    ]
  },
  {
    "id": "v1-155",
    "number": 155,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Jasper Red · Benzol Green · Deep Indigo",
    "titleJa": "赤丹・納戸色・濃藍",
    "colors": [
      "jasper-red",
      "benzol-green",
      "deep-indigo"
    ]
  },
  {
    "id": "v1-156",
    "number": 156,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Olive Ocher · Cobalt Green · Violet",
    "titleJa": "根岸色・若緑・青紫",
    "colors": [
      "olive-ocher",
      "cobalt-green",
      "violet"
    ]
  },
  {
    "id": "v1-157",
    "number": 157,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Pansy Purple · Olive Ocher · Olympic Blue",
    "titleJa": "葡萄色・根岸色・縹色",
    "colors": [
      "pansy-purple",
      "olive-ocher",
      "olympic-blue"
    ]
  },
  {
    "id": "v1-158",
    "number": 158,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Lemon Yellow · Cinnamon Rufous · Light Green",
    "titleJa": "菜の花色・狐色・若竹色",
    "colors": [
      "lemon-yellow",
      "cinnamon-rufous",
      "light-green"
    ]
  },
  {
    "id": "v1-159",
    "number": 159,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Khaki / Tawny Olive · Calamine Blue · Grayish Lavender 1",
    "titleJa": "朽葉色・空色・藤色",
    "colors": [
      "khaki-tawny-olive",
      "calamine-blue",
      "grayish-lavender-1"
    ]
  },
  {
    "id": "v1-160",
    "number": 160,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Sulphine Yellow · Pale Raw Umber · Dark Medici Blue",
    "titleJa": "黄土・煤色・御召茶",
    "colors": [
      "sulphine-yellow",
      "pale-raw-umber",
      "dark-medici-blue"
    ]
  },
  {
    "id": "v1-161",
    "number": 161,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Brown · Pinkish Cinnamon · Helvetia Blue",
    "titleJa": "茶色・丁子色・紺青",
    "colors": [
      "brown",
      "pinkish-cinnamon",
      "helvetia-blue"
    ]
  },
  {
    "id": "v1-162",
    "number": 162,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Old Rose · Rainette Green · Lilac",
    "titleJa": "長春色・青丹・薄色",
    "colors": [
      "old-rose",
      "rainette-green",
      "lilac"
    ]
  },
  {
    "id": "v1-163",
    "number": 163,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Apricot Yellow · Turquoise Green · Antwarp Blue",
    "titleJa": "支子色・白緑・藍鉄",
    "colors": [
      "apricot-yellow",
      "turquoise-green",
      "antwarp-blue"
    ]
  },
  {
    "id": "v1-164",
    "number": 164,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Red Orange · Orange Yellow · Violet",
    "titleJa": "朱色・鬱金色・青紫",
    "colors": [
      "red-orange",
      "orange-yellow",
      "violet"
    ]
  },
  {
    "id": "v1-165",
    "number": 165,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Cameo Pink · Spinel Red · Vistoris Lake",
    "titleJa": "薄紅梅・撫子色・海老茶",
    "colors": [
      "cameo-pink",
      "spinel-red",
      "vistoris-lake"
    ]
  },
  {
    "id": "v1-166",
    "number": 166,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Grenadine Pink · Naples Yellow · Deep Slate Green",
    "titleJa": "甚三紅・藤黄・鉄色",
    "colors": [
      "grenadine-pink",
      "naples-yellow",
      "deep-slate-green"
    ]
  },
  {
    "id": "v1-167",
    "number": 167,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Ecru · Pale King's Blue 2 · Vandar Poel's Blue",
    "titleJa": "生成り色・水色・褐色",
    "colors": [
      "ecru",
      "pale-king's-blue-2",
      "vander-poel's-blue"
    ]
  },
  {
    "id": "v1-168",
    "number": 168,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Lemon Yellow · Vandar Poel's Blue · Vernonia Purple",
    "titleJa": "菜の花色・褐色・梅紫",
    "colors": [
      "lemon-yellow",
      "vander-poel's-blue",
      "vernonia-purple"
    ]
  },
  {
    "id": "v1-169",
    "number": 169,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Corinthian Pink · Pale Lemon Yellow · Warm Gray",
    "titleJa": "退紅・女郎花・利休白茶",
    "colors": [
      "corinthian-pink",
      "pale-lemon-yellow",
      "warm-gray"
    ]
  },
  {
    "id": "v1-170",
    "number": 170,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Rosolanc Purple · Orange Yellow · Red Violet",
    "titleJa": "牡丹色・鬱金色・京紫",
    "colors": [
      "rosolanc-purple",
      "orange-yellow",
      "red-violet"
    ]
  },
  {
    "id": "v1-171",
    "number": 171,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Pale Burnt Lake · Yellow Orange · Glaucous Green",
    "titleJa": "蘇芳樺・蜜柑色・青磁色",
    "colors": [
      "pale-burnt-lake",
      "yellow-orange",
      "glaucous-green"
    ]
  },
  {
    "id": "v1-172",
    "number": 172,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Cinnamon Rufous · Antwarp Blue · Red Violet",
    "titleJa": "狐色・藍鉄・京紫",
    "colors": [
      "cinnamon-rufous",
      "antwarp-blue",
      "red-violet"
    ]
  },
  {
    "id": "v1-173",
    "number": 173,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Lemon Yellow · Madder Brown · Turquoise Green",
    "titleJa": "菜の花色・栗梅・白緑",
    "colors": [
      "lemon-yellow",
      "madder-brown",
      "turquoise-green"
    ]
  },
  {
    "id": "v1-174",
    "number": 174,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Corinthian Pink · Grayish Lavender 2 · Taupe Brown",
    "titleJa": "退紅・紅掛空色・小豆鼠",
    "colors": [
      "corinthian-pink",
      "grayish-lavender-2",
      "taupe-brown"
    ]
  },
  {
    "id": "v1-175",
    "number": 175,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Pinkish Cinnamon · Olive Buff · Blue Violet",
    "titleJa": "丁子色・柳茶・菫色",
    "colors": [
      "pinkish-cinnamon",
      "olive-buff",
      "blue-violet"
    ]
  },
  {
    "id": "v1-176",
    "number": 176,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Hermosa Pink · Seashell Pink · Calamine Blue",
    "titleJa": "桜色・桜貝色・空色",
    "colors": [
      "hermosa-pink",
      "seashell-pink",
      "calamine-blue"
    ]
  },
  {
    "id": "v1-177",
    "number": 177,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Pale Burnt Lake · Buffy Citrine · Grayish Lavender 1",
    "titleJa": "蘇芳樺・利休茶・藤色",
    "colors": [
      "pale-burnt-lake",
      "buffy-citrine",
      "grayish-lavender-1"
    ]
  },
  {
    "id": "v1-178",
    "number": 178,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Ivory Buff · Light Glaucous Blue · Green Blue",
    "titleJa": "練色・薄花色・水浅葱",
    "colors": [
      "ivory-buff",
      "light-glaucous-blue",
      "green-blue"
    ]
  },
  {
    "id": "v1-179",
    "number": 179,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Red Orange · Golden Yellow · Deep Lyons Blue",
    "titleJa": "朱色・山吹色・瑠璃紺",
    "colors": [
      "red-orange",
      "golden-yellow",
      "deep-lyons-blue"
    ]
  },
  {
    "id": "v1-180",
    "number": 180,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Cinnamon Buff · Light Mauve · Neutral Gray",
    "titleJa": "伽羅色・藤紫・銀鼠",
    "colors": [
      "cinnamon-buff",
      "light-mauve",
      "neutral-gray"
    ]
  },
  {
    "id": "v1-181",
    "number": 181,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Carmine Red · Violet · Cotinga Purple",
    "titleJa": "紅・青紫・似紫",
    "colors": [
      "carmine-red",
      "violet",
      "cotinga-purple"
    ]
  },
  {
    "id": "v1-182",
    "number": 182,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Raw Sienna · Vandyke Brown · Deep Indigo",
    "titleJa": "琥珀色・焦茶・濃藍",
    "colors": [
      "raw-sienna",
      "vandyke-brown",
      "deep-indigo"
    ]
  },
  {
    "id": "v1-183",
    "number": 183,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Deep Violet Plumbeous · Vernonia Purple · Red Violet",
    "titleJa": "鳩羽色・梅紫・京紫",
    "colors": [
      "deep-violet-plumbeous",
      "vernonia-purple",
      "red-violet"
    ]
  },
  {
    "id": "v1-184",
    "number": 184,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Spinel Red · Ivory Buff · Light Grayish Olive",
    "titleJa": "撫子色・練色・梅幸茶",
    "colors": [
      "spinel-red",
      "ivory-buff",
      "light-grayish-olive"
    ]
  },
  {
    "id": "v1-185",
    "number": 185,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Light Brown Drab · Etruscan Red · Pale Lemon Yellow",
    "titleJa": "梅鼠・弁柄色・女郎花",
    "colors": [
      "light-brown-drab",
      "etruscan-red",
      "pale-lemon-yellow"
    ]
  },
  {
    "id": "v1-186",
    "number": 186,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Hay's Russet · Ochraceous Salmon · Blue",
    "titleJa": "小豆色・洗朱・瑠璃色",
    "colors": [
      "hay's-russet",
      "ochraceous-salmon",
      "blue"
    ]
  },
  {
    "id": "v1-187",
    "number": 187,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Helvetia Blue · Grayish Lavender 2 · Aconite Violet",
    "titleJa": "紺青・紅掛空色・半色",
    "colors": [
      "helvetia-blue",
      "grayish-lavender-2",
      "aconite-violet"
    ]
  },
  {
    "id": "v1-188",
    "number": 188,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Rainette Green · Salvia Blue · Cobalt Green",
    "titleJa": "青丹・桔梗色・若緑",
    "colors": [
      "rainette-green",
      "salvia-blue",
      "cobalt-green"
    ]
  },
  {
    "id": "v1-189",
    "number": 189,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Lemon Yellow · Deep Slate Olive · Venice Green",
    "titleJa": "菜の花色・仙斎茶・新橋色",
    "colors": [
      "lemon-yellow",
      "deep-slate-olive",
      "venice-green"
    ]
  },
  {
    "id": "v1-190",
    "number": 190,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Ivory Buff · English Red · Black",
    "titleJa": "練色・丹色・墨",
    "colors": [
      "ivory-buff",
      "english-red",
      "black"
    ]
  },
  {
    "id": "v1-191",
    "number": 191,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Light Brown Drab · Yellow Ocher · Blue",
    "titleJa": "梅鼠・黄土色・瑠璃色",
    "colors": [
      "light-brown-drab",
      "yellow-ocher",
      "blue"
    ]
  },
  {
    "id": "v1-192",
    "number": 192,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Cream Yellow · Vandyke Brown · Deep Violet Plumbeous",
    "titleJa": "刈安色・焦茶・鳩羽色",
    "colors": [
      "cream-yellow",
      "vandyke-brown",
      "deep-violet-plumbeous"
    ]
  },
  {
    "id": "v1-193",
    "number": 193,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Grenadine Pink · Naples Yellow · Light Porcelain Green",
    "titleJa": "甚三紅・藤黄・青碧",
    "colors": [
      "grenadine-pink",
      "naples-yellow",
      "light-porcelain-green"
    ]
  },
  {
    "id": "v1-194",
    "number": 194,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Jasper Red · Seashell Pink · Olympic Blue",
    "titleJa": "赤丹・桜貝色・縹色",
    "colors": [
      "jasper-red",
      "seashell-pink",
      "olympic-blue"
    ]
  },
  {
    "id": "v1-195",
    "number": 195,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Spinel Red · Pale Lemon Yellow · Neutral Gray",
    "titleJa": "撫子色・女郎花・銀鼠",
    "colors": [
      "spinel-red",
      "pale-lemon-yellow",
      "neutral-gray"
    ]
  },
  {
    "id": "v1-196",
    "number": 196,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Citron Yellow · Pale King's Blue 2 · Blue Violet",
    "titleJa": "鶸色・水色・菫色",
    "colors": [
      "citron-yellow",
      "pale-king's-blue-2",
      "blue-violet"
    ]
  },
  {
    "id": "v1-197",
    "number": 197,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Eosine Pink · Dark Soft Violet · Neutral Gray",
    "titleJa": "桃園色・江戸紫・銀鼠",
    "colors": [
      "eosine-pink",
      "dark-soft-violet",
      "neutral-gray"
    ]
  },
  {
    "id": "v1-198",
    "number": 198,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Burnt Sienna · Apricot Yellow · Green",
    "titleJa": "樺色・支子色・緑",
    "colors": [
      "burnt-sienna",
      "apricot-yellow",
      "green"
    ]
  },
  {
    "id": "v1-199",
    "number": 199,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Ocher Red · Light Brownish Olive · Deep Lyons Blue",
    "titleJa": "代赭・媚茶・瑠璃紺",
    "colors": [
      "ocher-red",
      "light-brownish-olive",
      "deep-lyons-blue"
    ]
  },
  {
    "id": "v1-200",
    "number": 200,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Carmine Red · Olive Buff · Chromium Green",
    "titleJa": "紅・柳茶・緑青色",
    "colors": [
      "carmine-red",
      "olive-buff",
      "chromium-green"
    ]
  },
  {
    "id": "v1-201",
    "number": 201,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Grenadine Pink · Olive · Cobalt Green",
    "titleJa": "甚三紅・鶯色・若緑",
    "colors": [
      "grenadine-pink",
      "olive",
      "cobalt-green"
    ]
  },
  {
    "id": "v1-202",
    "number": 202,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Turquoise Green · Cobalt Green · Slate Color",
    "titleJa": "白緑・若緑・藍鼠",
    "colors": [
      "turquoise-green",
      "cobalt-green",
      "slate-color"
    ]
  },
  {
    "id": "v1-203",
    "number": 203,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Pale Lemon Yellow · Vinaceous Cinnamon · Lincoln Green",
    "titleJa": "女郎花・肉桂色・深緑",
    "colors": [
      "pale-lemon-yellow",
      "vinaceous-cinnamon",
      "lincoln-green"
    ]
  },
  {
    "id": "v1-204",
    "number": 204,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Rosolanc Purple · Cinnamon Rufous · Light Glaucous Blue",
    "titleJa": "牡丹色・狐色・薄花色",
    "colors": [
      "rosolanc-purple",
      "cinnamon-rufous",
      "light-glaucous-blue"
    ]
  },
  {
    "id": "v1-205",
    "number": 205,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Pale Burnt Lake · Vinaceous Cinnamon · Violet",
    "titleJa": "蘇芳樺・肉桂色・青紫",
    "colors": [
      "pale-burnt-lake",
      "vinaceous-cinnamon",
      "violet"
    ]
  },
  {
    "id": "v1-206",
    "number": 206,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Corinthian Pink · Golden Yellow · Cinnamon Rufous",
    "titleJa": "退紅・山吹色・狐色",
    "colors": [
      "corinthian-pink",
      "golden-yellow",
      "cinnamon-rufous"
    ]
  },
  {
    "id": "v1-207",
    "number": 207,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Sudan Brown · Glaucous Green · Black",
    "titleJa": "団栗色・青磁色・墨",
    "colors": [
      "sudan-brown",
      "glaucous-green",
      "black"
    ]
  },
  {
    "id": "v1-208",
    "number": 208,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Sulphur Yellow · Green Blue · Antwarp Blue",
    "titleJa": "硫黄色・水浅葱・藍鉄",
    "colors": [
      "sulphur-yellow",
      "green-blue",
      "antwarp-blue"
    ]
  },
  {
    "id": "v1-209",
    "number": 209,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Ivory Buff · Yellow Orange · Salvia Blue",
    "titleJa": "練色・蜜柑色・桔梗色",
    "colors": [
      "ivory-buff",
      "yellow-orange",
      "salvia-blue"
    ]
  },
  {
    "id": "v1-210",
    "number": 210,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Cinnamon Buff · Lemon Yellow · Lincoln Green",
    "titleJa": "伽羅色・菜の花色・深緑",
    "colors": [
      "cinnamon-buff",
      "lemon-yellow",
      "lincoln-green"
    ]
  },
  {
    "id": "v1-211",
    "number": 211,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Apricot Orange · Olive Yellow · Deep Indigo",
    "titleJa": "杏子色・青朽葉・濃藍",
    "colors": [
      "apricot-orange",
      "olive-yellow",
      "deep-indigo"
    ]
  },
  {
    "id": "v1-212",
    "number": 212,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Pompeian Red · Orange Citrine · Salvia Blue",
    "titleJa": "茜色・黄橡・桔梗色",
    "colors": [
      "pompeian-red",
      "orange-citrine",
      "salvia-blue"
    ]
  },
  {
    "id": "v1-213",
    "number": 213,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Vinaceous Cinnamon · Apricot Yellow · Pale King's Blue 2",
    "titleJa": "肉桂色・支子色・水色",
    "colors": [
      "vinaceous-cinnamon",
      "apricot-yellow",
      "pale-king's-blue-2"
    ]
  },
  {
    "id": "v1-214",
    "number": 214,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Ivory Buff · Sudan Brown · Violet",
    "titleJa": "練色・団栗色・青紫",
    "colors": [
      "ivory-buff",
      "sudan-brown",
      "violet"
    ]
  },
  {
    "id": "v1-215",
    "number": 215,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Cream Yellow · Blue · Eupatorium Purple",
    "titleJa": "刈安色・瑠璃色・藤袴",
    "colors": [
      "cream-yellow",
      "blue",
      "eupatorium-purple"
    ]
  },
  {
    "id": "v1-216",
    "number": 216,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Jasper Red · Green · Black",
    "titleJa": "赤丹・緑・墨",
    "colors": [
      "jasper-red",
      "green",
      "black"
    ]
  },
  {
    "id": "v1-217",
    "number": 217,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Pale Burnt Lake · Ochraceous Salmon · Diamine Green",
    "titleJa": "蘇芳樺・洗朱・常盤色",
    "colors": [
      "pale-burnt-lake",
      "ochraceous-salmon",
      "diamine-green"
    ]
  },
  {
    "id": "v1-218",
    "number": 218,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Helvetia Blue · Grayish Lavender 1 · Deep Violet Plumbeous",
    "titleJa": "紺青・藤色・鳩羽色",
    "colors": [
      "helvetia-blue",
      "grayish-lavender-1",
      "deep-violet-plumbeous"
    ]
  },
  {
    "id": "v1-219",
    "number": 219,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Jasper Red · Chromium Green · Dusky Green",
    "titleJa": "赤丹・緑青色・鉄御納戸",
    "colors": [
      "jasper-red",
      "chromium-green",
      "dusky-green"
    ]
  },
  {
    "id": "v1-220",
    "number": 220,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Pomegranate Purple · Ochraceous Salmon · Aconite Violet",
    "titleJa": "石榴色・洗朱・半色",
    "colors": [
      "pomegranite-purple",
      "ochraceous-salmon",
      "aconite-violet"
    ]
  },
  {
    "id": "v1-221",
    "number": 221,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Carmine Red · Neutral Gray · Black",
    "titleJa": "紅・銀鼠・墨",
    "colors": [
      "carmine-red",
      "neutral-gray",
      "black"
    ]
  },
  {
    "id": "v1-222",
    "number": 222,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Yellow Ocher · Yellow Orange · Orange Rufous",
    "titleJa": "黄土色・蜜柑色・柿色",
    "colors": [
      "yellow-ocher",
      "yellow-orange",
      "orange-rufous"
    ]
  },
  {
    "id": "v1-223",
    "number": 223,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Light Brown Drab · Ochraceous Salmon · Turquoise Green",
    "titleJa": "梅鼠・洗朱・白緑",
    "colors": [
      "light-brown-drab",
      "ochraceous-salmon",
      "turquoise-green"
    ]
  },
  {
    "id": "v1-224",
    "number": 224,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Spinel Red · Dark Medici Blue · Taupe Brown",
    "titleJa": "撫子色・御召茶・小豆鼠",
    "colors": [
      "spinel-red",
      "dark-medici-blue",
      "taupe-brown"
    ]
  },
  {
    "id": "v1-225",
    "number": 225,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Carmine · Dusky Green · Dark Slate Purple",
    "titleJa": "洋紅・鉄御納戸・紫鼠",
    "colors": [
      "carmine",
      "dusky-green",
      "dark-slate-purple"
    ]
  },
  {
    "id": "v1-226",
    "number": 226,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Vistoris Lake · Cream Yellow · Violet",
    "titleJa": "海老茶・刈安色・青紫",
    "colors": [
      "vistoris-lake",
      "cream-yellow",
      "violet"
    ]
  },
  {
    "id": "v1-227",
    "number": 227,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Hermosa Pink · Light Glaucous Blue · Cerulean Blue",
    "titleJa": "桜色・薄花色・露草色",
    "colors": [
      "hermosa-pink",
      "light-glaucous-blue",
      "cerulean-blue"
    ]
  },
  {
    "id": "v1-228",
    "number": 228,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Carmine Red · Pale Lemon Yellow · Neutral Gray",
    "titleJa": "紅・女郎花・銀鼠",
    "colors": [
      "carmine-red",
      "pale-lemon-yellow",
      "neutral-gray"
    ]
  },
  {
    "id": "v1-229",
    "number": 229,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Golden Yellow · Deep Slate Olive · Neutral Gray",
    "titleJa": "山吹色・仙斎茶・銀鼠",
    "colors": [
      "golden-yellow",
      "deep-slate-olive",
      "neutral-gray"
    ]
  },
  {
    "id": "v1-230",
    "number": 230,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Grenadine Pink · Turquoise Green · Cobalt Green",
    "titleJa": "甚三紅・白緑・若緑",
    "colors": [
      "grenadine-pink",
      "turquoise-green",
      "cobalt-green"
    ]
  },
  {
    "id": "v1-231",
    "number": 231,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Cameo Pink · Hay's Russet · Olympic Blue",
    "titleJa": "薄紅梅・小豆色・縹色",
    "colors": [
      "cameo-pink",
      "hay's-russet",
      "olympic-blue"
    ]
  },
  {
    "id": "v1-232",
    "number": 232,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Carmine · Pinkish Cinnamon · Deep Indigo",
    "titleJa": "洋紅・丁子色・濃藍",
    "colors": [
      "carmine",
      "pinkish-cinnamon",
      "deep-indigo"
    ]
  },
  {
    "id": "v1-233",
    "number": 233,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Carmine Red · Buffy Citrine · Violet Blue",
    "titleJa": "紅・利休茶・紺桔梗",
    "colors": [
      "carmine-red",
      "buffy-citrine",
      "violet-blue"
    ]
  },
  {
    "id": "v1-234",
    "number": 234,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Cinnamon Buff · Pale Raw Umber · Pale King's Blue 2",
    "titleJa": "伽羅色・煤色・水色",
    "colors": [
      "cinnamon-buff",
      "pale-raw-umber",
      "pale-king's-blue-2"
    ]
  },
  {
    "id": "v1-235",
    "number": 235,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Ivory Buff · Yellow Orange · Grayish Lavender 2",
    "titleJa": "練色・蜜柑色・紅掛空色",
    "colors": [
      "ivory-buff",
      "yellow-orange",
      "grayish-lavender-2"
    ]
  },
  {
    "id": "v1-236",
    "number": 236,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Khaki / Tawny Olive · Deep Lyons Blue · Purple Drab",
    "titleJa": "朽葉色・瑠璃紺・藤鼠",
    "colors": [
      "khaki-tawny-olive",
      "deep-lyons-blue",
      "purple-drab"
    ]
  },
  {
    "id": "v1-237",
    "number": 237,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Carmine Red · Madder Brown · Salvia Blue",
    "titleJa": "紅・栗梅・桔梗色",
    "colors": [
      "carmine-red",
      "madder-brown",
      "salvia-blue"
    ]
  },
  {
    "id": "v1-238",
    "number": 238,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Ochraceous Salmon · Cotinga Purple · Warm Gray",
    "titleJa": "洗朱・似紫・利休白茶",
    "colors": [
      "ochraceous-salmon",
      "cotinga-purple",
      "warm-gray"
    ]
  },
  {
    "id": "v1-239",
    "number": 239,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Light Brown Drab · Pyrite Yellow · Glaucous Green",
    "titleJa": "梅鼠・黄支子・青磁色",
    "colors": [
      "light-brown-drab",
      "pyrite-yellow",
      "glaucous-green"
    ]
  },
  {
    "id": "v1-240",
    "number": 240,
    "volume": 1,
    "section": "3 Colors (Trios)",
    "sectionJa": "三色配色",
    "title": "Fresh Color · Yellow · Cerulean Blue",
    "titleJa": "宍色・黄色・露草色",
    "colors": [
      "fresh-color",
      "yellow",
      "cerulean-blue"
    ]
  },
  {
    "id": "v1-241",
    "number": 241,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Red Orange · Pale Lemon Yellow · Isabella Color · Dark Medici Blue",
    "titleJa": "朱色・女郎花・桑染・御召茶",
    "colors": [
      "red-orange",
      "pale-lemon-yellow",
      "isabella-color",
      "dark-medici-blue"
    ]
  },
  {
    "id": "v1-242",
    "number": 242,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Eosine Pink · Burnt Sienna · Diamine Green · Black",
    "titleJa": "桃園色・樺色・常盤色・墨",
    "colors": [
      "eosine-pink",
      "burnt-sienna",
      "diamine-green",
      "black"
    ]
  },
  {
    "id": "v1-243",
    "number": 243,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Raw Sienna · Ivory Buff · Olive Green · Slate Color",
    "titleJa": "琥珀色・練色・海松茶・藍鼠",
    "colors": [
      "raw-sienna",
      "ivory-buff",
      "olive-green",
      "slate-color"
    ]
  },
  {
    "id": "v1-244",
    "number": 244,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Light Brown Drab · Vinaceous Tawny · Andover Green · Antwarp Blue",
    "titleJa": "梅鼠・赭・利休鼠・藍鉄",
    "colors": [
      "light-brown-drab",
      "vinaceous-tawny",
      "andover-green",
      "antwarp-blue"
    ]
  },
  {
    "id": "v1-245",
    "number": 245,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Carmine Red · Oil Green · Dark Tyrian Blue · Slate Color",
    "titleJa": "紅・苔色・留紺・藍鼠",
    "colors": [
      "carmine-red",
      "oil-green",
      "dark-tyrian-blue",
      "slate-color"
    ]
  },
  {
    "id": "v1-246",
    "number": 246,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Corinthian Pink · Brick Red · Sulphur Yellow · Cinnamon Buff",
    "titleJa": "退紅・煉瓦色・硫黄色・伽羅色",
    "colors": [
      "corinthian-pink",
      "brick-red",
      "sulphur-yellow",
      "cinnamon-buff"
    ]
  },
  {
    "id": "v1-247",
    "number": 247,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Raw Sienna · Apricot Yellow · Benzol Green · Deep Lyons Blue",
    "titleJa": "琥珀色・支子色・納戸色・瑠璃紺",
    "colors": [
      "raw-sienna",
      "apricot-yellow",
      "benzol-green",
      "deep-lyons-blue"
    ]
  },
  {
    "id": "v1-248",
    "number": 248,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Eosine Pink · Khaki / Tawny Olive · Grayish Lavender 1 · Dark Slate Purple",
    "titleJa": "桃園色・朽葉色・藤色・紫鼠",
    "colors": [
      "eosine-pink",
      "khaki-tawny-olive",
      "grayish-lavender-1",
      "dark-slate-purple"
    ]
  },
  {
    "id": "v1-249",
    "number": 249,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Hay's Russet · Ecru · Olive Ocher · Dark Medici Blue",
    "titleJa": "小豆色・生成り色・根岸色・御召茶",
    "colors": [
      "hay's-russet",
      "ecru",
      "olive-ocher",
      "dark-medici-blue"
    ]
  },
  {
    "id": "v1-250",
    "number": 250,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Pyrite Yellow · Peach Red · Artemisia Green · Sea Green · Nile Blue",
    "titleJa": "黄支子・桃色・青磁鼠・浅葱色・瓶覗",
    "colors": [
      "pyrite-yellow",
      "peach-red",
      "artemesia-green",
      "sea-green",
      "nile-blue"
    ]
  },
  {
    "id": "v1-251",
    "number": 251,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Red · Yellow · Diamine Green · Slate Color",
    "titleJa": "真紅・黄色・常盤色・藍鼠",
    "colors": [
      "red",
      "yellow",
      "diamine-green",
      "slate-color"
    ]
  },
  {
    "id": "v1-252",
    "number": 252,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Eugenia Red 2 · Raw Sienna · Sulphine Yellow · Green Blue",
    "titleJa": "唐紅・琥珀色・黄土・水浅葱",
    "colors": [
      "eugenia-red-2",
      "raw-sienna",
      "sulphine-yellow",
      "green-blue"
    ]
  },
  {
    "id": "v1-253",
    "number": 253,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Lemon Yellow · Apricot Orange · Cotinga Purple · Slate Color",
    "titleJa": "菜の花色・杏子色・似紫・藍鼠",
    "colors": [
      "lemon-yellow",
      "apricot-orange",
      "cotinga-purple",
      "slate-color"
    ]
  },
  {
    "id": "v1-254",
    "number": 254,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Corinthian Pink · Sulphur Yellow · Olive · Laelia Pink",
    "titleJa": "退紅・硫黄色・鶯色・菖蒲色",
    "colors": [
      "corinthian-pink",
      "sulphur-yellow",
      "olive",
      "laelia-pink"
    ]
  },
  {
    "id": "v1-255",
    "number": 255,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Raw Sienna · Pyrite Yellow · Calamine Blue · Black",
    "titleJa": "琥珀色・黄支子・空色・墨",
    "colors": [
      "raw-sienna",
      "pyrite-yellow",
      "calamine-blue",
      "black"
    ]
  },
  {
    "id": "v1-256",
    "number": 256,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Vinaceous Cinnamon · Orange · Dull Viridian Green · Black",
    "titleJa": "肉桂色・橙色・青緑・墨",
    "colors": [
      "vinaceous-cinnamon",
      "orange",
      "dull-viridian-green",
      "black"
    ]
  },
  {
    "id": "v1-257",
    "number": 257,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Spectrum Red · Orange Yellow · Blue · Aconite Violet",
    "titleJa": "紅緋・鬱金色・瑠璃色・半色",
    "colors": [
      "spectrum-red",
      "orange-yellow",
      "blue",
      "aconite-violet"
    ]
  },
  {
    "id": "v1-258",
    "number": 258,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Pale Burnt Lake · Pinkish Cinnamon · Olive · Antwarp Blue",
    "titleJa": "蘇芳樺・丁子色・鶯色・藍鉄",
    "colors": [
      "pale-burnt-lake",
      "pinkish-cinnamon",
      "olive",
      "antwarp-blue"
    ]
  },
  {
    "id": "v1-259",
    "number": 259,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Lemon Yellow · Green Blue · Helvetia Blue · Warm Gray",
    "titleJa": "菜の花色・水浅葱・紺青・利休白茶",
    "colors": [
      "lemon-yellow",
      "green-blue",
      "helvetia-blue",
      "warm-gray"
    ]
  },
  {
    "id": "v1-260",
    "number": 260,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Old Rose · Vinaceous Cinnamon · Glaucous Green · Sea Green",
    "titleJa": "長春色・肉桂色・青磁色・浅葱色",
    "colors": [
      "old-rose",
      "vinaceous-cinnamon",
      "glaucous-green",
      "sea-green"
    ]
  },
  {
    "id": "v1-261",
    "number": 261,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Red · Pale Lemon Yellow · Calamine Blue · Warm Gray",
    "titleJa": "真紅・女郎花・空色・利休白茶",
    "colors": [
      "red",
      "pale-lemon-yellow",
      "calamine-blue",
      "warm-gray"
    ]
  },
  {
    "id": "v1-262",
    "number": 262,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Eugenia Red 2 · Ivory Buff · Citrine · Cossack Green",
    "titleJa": "唐紅・練色・鶯茶・千歳緑",
    "colors": [
      "eugenia-red-2",
      "ivory-buff",
      "citrine",
      "cossack-green"
    ]
  },
  {
    "id": "v1-263",
    "number": 263,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Burnt Sienna · Pinkish Cinnamon · Turquoise Green · Slate Color",
    "titleJa": "樺色・丁子色・白緑・藍鼠",
    "colors": [
      "burnt-sienna",
      "pinkish-cinnamon",
      "turquoise-green",
      "slate-color"
    ]
  },
  {
    "id": "v1-264",
    "number": 264,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Corinthian Pink · Red Orange · Dark Greenish Glaucous · Cerulean Blue",
    "titleJa": "退紅・朱色・山鳩色・露草色",
    "colors": [
      "corinthian-pink",
      "red-orange",
      "dark-greenish-glaucous",
      "cerulean-blue"
    ]
  },
  {
    "id": "v1-265",
    "number": 265,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Old Rose · Apricot Yellow · Olive Yellow · Dull Violet Black",
    "titleJa": "長春色・支子色・青朽葉・鉄紺",
    "colors": [
      "old-rose",
      "apricot-yellow",
      "olive-yellow",
      "dull-violet-black"
    ]
  },
  {
    "id": "v1-266",
    "number": 266,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Spectrum Red · Ivory Buff · Rainette Green · Benzol Green",
    "titleJa": "紅緋・練色・青丹・納戸色",
    "colors": [
      "spectrum-red",
      "ivory-buff",
      "rainette-green",
      "benzol-green"
    ]
  },
  {
    "id": "v1-267",
    "number": 267,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Cream Yellow · Yellow Orange · Benzol Green · Blue",
    "titleJa": "刈安色・蜜柑色・納戸色・瑠璃色",
    "colors": [
      "cream-yellow",
      "yellow-orange",
      "benzol-green",
      "blue"
    ]
  },
  {
    "id": "v1-268",
    "number": 268,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Light Brown Drab · Raw Sienna · Deep Slate Olive · Nile Blue",
    "titleJa": "梅鼠・琥珀色・仙斎茶・瓶覗",
    "colors": [
      "light-brown-drab",
      "raw-sienna",
      "deep-slate-olive",
      "nile-blue"
    ]
  },
  {
    "id": "v1-269",
    "number": 269,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Raw Sienna · Pale Burnt Lake · Aconite Violet · Black",
    "titleJa": "琥珀色・蘇芳樺・半色・墨",
    "colors": [
      "raw-sienna",
      "pale-burnt-lake",
      "aconite-violet",
      "black"
    ]
  },
  {
    "id": "v1-270",
    "number": 270,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Eugenia Red 2 · Sulphur Yellow · Olive Green · Cossack Green",
    "titleJa": "唐紅・硫黄色・海松茶・千歳緑",
    "colors": [
      "eugenia-red-2",
      "sulphur-yellow",
      "olive-green",
      "cossack-green"
    ]
  },
  {
    "id": "v1-271",
    "number": 271,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Pomegranate Purple · Cobalt Green · Green Blue · Deep Slate Green",
    "titleJa": "石榴色・若緑・水浅葱・鉄色",
    "colors": [
      "pomegranite-purple",
      "cobalt-green",
      "green-blue",
      "deep-slate-green"
    ]
  },
  {
    "id": "v1-272",
    "number": 272,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Pale Lemon Yellow · Orange · Turquoise Green · Salvia Blue",
    "titleJa": "女郎花・橙色・白緑・桔梗色",
    "colors": [
      "pale-lemon-yellow",
      "orange",
      "turquoise-green",
      "salvia-blue"
    ]
  },
  {
    "id": "v1-273",
    "number": 273,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Hermosa Pink · Pansy Purple · Sudan Brown · Neutral Gray",
    "titleJa": "桜色・葡萄色・団栗色・銀鼠",
    "colors": [
      "hermosa-pink",
      "pansy-purple",
      "sudan-brown",
      "neutral-gray"
    ]
  },
  {
    "id": "v1-274",
    "number": 274,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Peach Red · Dark Citrine · Olympic Blue · Light Mauve",
    "titleJa": "桃色・海松色・縹色・藤紫",
    "colors": [
      "peach-red",
      "dark-citrine",
      "olympic-blue",
      "light-mauve"
    ]
  },
  {
    "id": "v1-275",
    "number": 275,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Etruscan Red · Ecru · Madder Brown · Taupe Brown",
    "titleJa": "弁柄色・生成り色・栗梅・小豆鼠",
    "colors": [
      "etruscan-red",
      "ecru",
      "madder-brown",
      "taupe-brown"
    ]
  },
  {
    "id": "v1-276",
    "number": 276,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Eosine Pink · Seashell Pink · Yellow Green · Black",
    "titleJa": "桃園色・桜貝色・若葉色・墨",
    "colors": [
      "eosine-pink",
      "seashell-pink",
      "yellow-green",
      "black"
    ]
  },
  {
    "id": "v1-277",
    "number": 277,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Spinel Red · Rosolanc Purple · Olive · Dull Violet Black",
    "titleJa": "撫子色・牡丹色・鶯色・鉄紺",
    "colors": [
      "spinel-red",
      "rosolanc-purple",
      "olive",
      "dull-violet-black"
    ]
  },
  {
    "id": "v1-278",
    "number": 278,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Cream Yellow · Olive Ocher · Cossack Green · Dusky Green",
    "titleJa": "刈安色・根岸色・千歳緑・鉄御納戸",
    "colors": [
      "cream-yellow",
      "olive-ocher",
      "cossack-green",
      "dusky-green"
    ]
  },
  {
    "id": "v1-279",
    "number": 279,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Raw Sienna · Vinaceous Cinnamon · Ecru · Dark Tyrian Blue",
    "titleJa": "琥珀色・肉桂色・生成り色・留紺",
    "colors": [
      "raw-sienna",
      "vinaceous-cinnamon",
      "ecru",
      "dark-tyrian-blue"
    ]
  },
  {
    "id": "v1-280",
    "number": 280,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Eugenia Red 2 · Lincoln Green · Laelia Pink · Taupe Brown",
    "titleJa": "唐紅・深緑・菖蒲色・小豆鼠",
    "colors": [
      "eugenia-red-2",
      "lincoln-green",
      "laelia-pink",
      "taupe-brown"
    ]
  },
  {
    "id": "v1-281",
    "number": 281,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Pale Lemon Yellow · Benzol Green · Cobalt Green · Antwarp Blue",
    "titleJa": "女郎花・納戸色・若緑・藍鉄",
    "colors": [
      "pale-lemon-yellow",
      "benzol-green",
      "cobalt-green",
      "antwarp-blue"
    ]
  },
  {
    "id": "v1-282",
    "number": 282,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Eugenia Red 2 · Maple · Cobalt Green · Lilac",
    "titleJa": "唐紅・白茶・若緑・薄色",
    "colors": [
      "eugenia-red-2",
      "maple",
      "cobalt-green",
      "lilac"
    ]
  },
  {
    "id": "v1-283",
    "number": 283,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Ocher Red · Pale Burnt Lake · Chromium Green · Venice Green",
    "titleJa": "代赭・蘇芳樺・緑青色・新橋色",
    "colors": [
      "ocher-red",
      "pale-burnt-lake",
      "chromium-green",
      "venice-green"
    ]
  },
  {
    "id": "v1-284",
    "number": 284,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Eugenia Red 1 · Apricot Yellow · Sea Green · Dusky Green",
    "titleJa": "紅梅色・支子色・浅葱色・鉄御納戸",
    "colors": [
      "eugenia-red-1",
      "apricot-yellow",
      "sea-green",
      "dusky-green"
    ]
  },
  {
    "id": "v1-285",
    "number": 285,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Light Brown Drab · Burnt Sienna · Peach Red · Turquoise Green",
    "titleJa": "梅鼠・樺色・桃色・白緑",
    "colors": [
      "light-brown-drab",
      "burnt-sienna",
      "peach-red",
      "turquoise-green"
    ]
  },
  {
    "id": "v1-286",
    "number": 286,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Burnt Sienna · Orange Yellow · Peacock Blue · Violet Blue",
    "titleJa": "樺色・鬱金色・孔雀青・紺桔梗",
    "colors": [
      "burnt-sienna",
      "orange-yellow",
      "peacock-blue",
      "violet-blue"
    ]
  },
  {
    "id": "v1-287",
    "number": 287,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Eosine Pink · Pyrite Yellow · Pale King's Blue 2 · Calamine Blue",
    "titleJa": "桃園色・黄支子・水色・空色",
    "colors": [
      "eosine-pink",
      "pyrite-yellow",
      "pale-king's-blue-2",
      "calamine-blue"
    ]
  },
  {
    "id": "v1-288",
    "number": 288,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Yellow Orange · Sepia · Taupe Brown · Black",
    "titleJa": "蜜柑色・憲法黒茶・小豆鼠・墨",
    "colors": [
      "yellow-orange",
      "sepia",
      "taupe-brown",
      "black"
    ]
  },
  {
    "id": "v1-289",
    "number": 289,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Lemon Yellow · Light Green Yellow · Violet Blue · Dull Violet Black",
    "titleJa": "菜の花色・若草色・紺桔梗・鉄紺",
    "colors": [
      "lemon-yellow",
      "light-green-yellow",
      "violet-blue",
      "dull-violet-black"
    ]
  },
  {
    "id": "v1-290",
    "number": 290,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Vistoris Lake · Pale Lemon Yellow · Lincoln Green · Cobalt Green",
    "titleJa": "海老茶・女郎花・深緑・若緑",
    "colors": [
      "vistoris-lake",
      "pale-lemon-yellow",
      "lincoln-green",
      "cobalt-green"
    ]
  },
  {
    "id": "v1-291",
    "number": 291,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Light Green Yellow · Sea Green · Cobalt Green · Calamine Blue",
    "titleJa": "若草色・浅葱色・若緑・空色",
    "colors": [
      "light-green-yellow",
      "sea-green",
      "cobalt-green",
      "calamine-blue"
    ]
  },
  {
    "id": "v1-292",
    "number": 292,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Pale Lemon Yellow · Pinkish Cinnamon · Isabella Color · Ecru",
    "titleJa": "女郎花・丁子色・桑染・生成り色",
    "colors": [
      "pale-lemon-yellow",
      "pinkish-cinnamon",
      "isabella-color",
      "ecru"
    ]
  },
  {
    "id": "v1-293",
    "number": 293,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Raw Sienna · Turquoise Green · Artemisia Green · Green",
    "titleJa": "琥珀色・白緑・青磁鼠・緑",
    "colors": [
      "raw-sienna",
      "turquoise-green",
      "artemesia-green",
      "green"
    ]
  },
  {
    "id": "v1-294",
    "number": 294,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Sulphur Yellow · Cream Yellow · Cossack Green · Salvia Blue",
    "titleJa": "硫黄色・刈安色・千歳緑・桔梗色",
    "colors": [
      "sulphur-yellow",
      "cream-yellow",
      "cossack-green",
      "salvia-blue"
    ]
  },
  {
    "id": "v1-295",
    "number": 295,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Cream Yellow · Yellow · Blue · Dull Violet Black",
    "titleJa": "刈安色・黄色・瑠璃色・鉄紺",
    "colors": [
      "cream-yellow",
      "yellow",
      "blue",
      "dull-violet-black"
    ]
  },
  {
    "id": "v1-296",
    "number": 296,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Sulphur Yellow · Ochraceous Salmon · Pale Raw Umber · Slate Color",
    "titleJa": "硫黄色・洗朱・煤色・藍鼠",
    "colors": [
      "sulphur-yellow",
      "ochraceous-salmon",
      "pale-raw-umber",
      "slate-color"
    ]
  },
  {
    "id": "v1-297",
    "number": 297,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Burnt Sienna · Yellow Orange · Olive Green · Violet Blue",
    "titleJa": "樺色・蜜柑色・海松茶・紺桔梗",
    "colors": [
      "burnt-sienna",
      "yellow-orange",
      "olive-green",
      "violet-blue"
    ]
  },
  {
    "id": "v1-298",
    "number": 298,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Raw Sienna · Lemon Yellow · Peach Red · Black",
    "titleJa": "琥珀色・菜の花色・桃色・墨",
    "colors": [
      "raw-sienna",
      "lemon-yellow",
      "peach-red",
      "black"
    ]
  },
  {
    "id": "v1-299",
    "number": 299,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Indian Lake · Vinaceous Cinnamon · Oil Green · Antwarp Blue",
    "titleJa": "臙脂・肉桂色・苔色・藍鉄",
    "colors": [
      "indian-lake",
      "vinaceous-cinnamon",
      "oil-green",
      "antwarp-blue"
    ]
  },
  {
    "id": "v1-300",
    "number": 300,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Grenadine Pink · Cream Yellow · Turquoise Green · Calamine Blue",
    "titleJa": "甚三紅・刈安色・白緑・空色",
    "colors": [
      "grenadine-pink",
      "cream-yellow",
      "turquoise-green",
      "calamine-blue"
    ]
  },
  {
    "id": "v1-301",
    "number": 301,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Spectrum Red · Ivory Buff · Rainette Green · Aconite Violet",
    "titleJa": "紅緋・練色・青丹・半色",
    "colors": [
      "spectrum-red",
      "ivory-buff",
      "rainette-green",
      "aconite-violet"
    ]
  },
  {
    "id": "v1-302",
    "number": 302,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Cream Yellow · Ecru · Nile Blue · Antwarp Blue",
    "titleJa": "刈安色・生成り色・瓶覗・藍鉄",
    "colors": [
      "cream-yellow",
      "ecru",
      "nile-blue",
      "antwarp-blue"
    ]
  },
  {
    "id": "v1-303",
    "number": 303,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Naples Yellow · Peach Red · Deep Slate Olive · Neutral Gray",
    "titleJa": "藤黄・桃色・仙斎茶・銀鼠",
    "colors": [
      "naples-yellow",
      "peach-red",
      "deep-slate-olive",
      "neutral-gray"
    ]
  },
  {
    "id": "v1-304",
    "number": 304,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Hay's Russet · Cream Yellow · Dark Citrine · Benzol Green",
    "titleJa": "小豆色・刈安色・海松色・納戸色",
    "colors": [
      "hay's-russet",
      "cream-yellow",
      "dark-citrine",
      "benzol-green"
    ]
  },
  {
    "id": "v1-305",
    "number": 305,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Pinkish Cinnamon · Apricot Yellow · Citron Yellow · Turquoise Green",
    "titleJa": "丁子色・支子色・鶸色・白緑",
    "colors": [
      "pinkish-cinnamon",
      "apricot-yellow",
      "citron-yellow",
      "turquoise-green"
    ]
  },
  {
    "id": "v1-306",
    "number": 306,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Lemon Yellow · Benzol Green · Dull Viridian Green · Nile Blue",
    "titleJa": "菜の花色・納戸色・青緑・瓶覗",
    "colors": [
      "lemon-yellow",
      "benzol-green",
      "dull-viridian-green",
      "nile-blue"
    ]
  },
  {
    "id": "v1-307",
    "number": 307,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Carmine · Grayish Lavender 1 · Aconite Violet · Cotinga Purple",
    "titleJa": "洋紅・藤色・半色・似紫",
    "colors": [
      "carmine",
      "grayish-lavender-1",
      "aconite-violet",
      "cotinga-purple"
    ]
  },
  {
    "id": "v1-308",
    "number": 308,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Fawn · Scarlet · English Red · Cobalt Green",
    "titleJa": "小鹿色・緋色・丹色・若緑",
    "colors": [
      "fawn",
      "scarlet",
      "english-red",
      "cobalt-green"
    ]
  },
  {
    "id": "v1-309",
    "number": 309,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Golden Yellow · Apricot Orange · Violet Blue · Vandar Poel's Blue",
    "titleJa": "山吹色・杏子色・紺桔梗・褐色",
    "colors": [
      "golden-yellow",
      "apricot-orange",
      "violet-blue",
      "vander-poel's-blue"
    ]
  },
  {
    "id": "v1-310",
    "number": 310,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Sulphur Yellow · Pinkish Cinnamon · Olive · Deep Slate Olive",
    "titleJa": "硫黄色・丁子色・鶯色・仙斎茶",
    "colors": [
      "sulphur-yellow",
      "pinkish-cinnamon",
      "olive",
      "deep-slate-olive"
    ]
  },
  {
    "id": "v1-311",
    "number": 311,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Pompeian Red · Cream Yellow · Dark Greenish Glaucous · Light Green Yellow",
    "titleJa": "茜色・刈安色・山鳩色・若草色",
    "colors": [
      "pompeian-red",
      "cream-yellow",
      "dark-greenish-glaucous",
      "light-green-yellow"
    ]
  },
  {
    "id": "v1-312",
    "number": 312,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Burnt Sienna · Yellow Orange · Artemisia Green · Helvetia Blue",
    "titleJa": "樺色・蜜柑色・青磁鼠・紺青",
    "colors": [
      "burnt-sienna",
      "yellow-orange",
      "artemesia-green",
      "helvetia-blue"
    ]
  },
  {
    "id": "v1-313",
    "number": 313,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Carmine · Yellow · Diamine Green · Black",
    "titleJa": "洋紅・黄色・常盤色・墨",
    "colors": [
      "carmine",
      "yellow",
      "diamine-green",
      "black"
    ]
  },
  {
    "id": "v1-314",
    "number": 314,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Eosine Pink · Hay's Russet · Deep Lyons Blue · Dusky Madder Violet",
    "titleJa": "桃園色・小豆色・瑠璃紺・茄子紺",
    "colors": [
      "eosine-pink",
      "hay's-russet",
      "deep-lyons-blue",
      "dusky-madder-violet"
    ]
  },
  {
    "id": "v1-315",
    "number": 315,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Grenadine Pink · Sulphur Yellow · Golden Yellow · Eupatorium Purple",
    "titleJa": "甚三紅・硫黄色・山吹色・藤袴",
    "colors": [
      "grenadine-pink",
      "sulphur-yellow",
      "golden-yellow",
      "eupatorium-purple"
    ]
  },
  {
    "id": "v1-316",
    "number": 316,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Vandyke Red · Dull Viridian Green · Violet · Red Violet",
    "titleJa": "紅檜皮・青緑・青紫・京紫",
    "colors": [
      "vandyke-red",
      "dull-viridian-green",
      "violet",
      "red-violet"
    ]
  },
  {
    "id": "v1-317",
    "number": 317,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Light Pinkish Cinnamon · Ecru · Lemon Yellow · Turquoise Green",
    "titleJa": "薄香・生成り色・菜の花色・白緑",
    "colors": [
      "light-pinkish-cinnamon",
      "ecru",
      "lemon-yellow",
      "turquoise-green"
    ]
  },
  {
    "id": "v1-318",
    "number": 318,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Light Brownish Olive · Blackish Olive · Dusky Green · Deep Slate Green",
    "titleJa": "媚茶・黒緑・鉄御納戸・鉄色",
    "colors": [
      "light-brownish-olive",
      "blackish-olive",
      "dusky-green",
      "deep-slate-green"
    ]
  },
  {
    "id": "v1-319",
    "number": 319,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Raw Sienna · Apricot Yellow · Yellow Orange · Cossack Green",
    "titleJa": "琥珀色・支子色・蜜柑色・千歳緑",
    "colors": [
      "raw-sienna",
      "apricot-yellow",
      "yellow-orange",
      "cossack-green"
    ]
  },
  {
    "id": "v1-320",
    "number": 320,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Coral Red · Sulphur Yellow · Oil Green · Light Glaucous Blue",
    "titleJa": "珊瑚色・硫黄色・苔色・薄花色",
    "colors": [
      "coral-red",
      "sulphur-yellow",
      "oil-green",
      "light-glaucous-blue"
    ]
  },
  {
    "id": "v1-321",
    "number": 321,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Light Brown Drab · Sulphur Yellow · Deep Slate Olive · Salvia Blue",
    "titleJa": "梅鼠・硫黄色・仙斎茶・桔梗色",
    "colors": [
      "light-brown-drab",
      "sulphur-yellow",
      "deep-slate-olive",
      "salvia-blue"
    ]
  },
  {
    "id": "v1-322",
    "number": 322,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Spectrum Red · Brick Red · Eupatorium Purple · Blue Violet",
    "titleJa": "紅緋・煉瓦色・藤袴・菫色",
    "colors": [
      "spectrum-red",
      "brick-red",
      "eupatorium-purple",
      "blue-violet"
    ]
  },
  {
    "id": "v1-323",
    "number": 323,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Cinnamon Buff · Citron Yellow · Madder Brown · Black",
    "titleJa": "伽羅色・鶸色・栗梅・墨",
    "colors": [
      "cinnamon-buff",
      "citron-yellow",
      "madder-brown",
      "black"
    ]
  },
  {
    "id": "v1-324",
    "number": 324,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Pompeian Red · Olympic Blue · Aconite Violet · Neutral Gray",
    "titleJa": "茜色・縹色・半色・銀鼠",
    "colors": [
      "pompeian-red",
      "olympic-blue",
      "aconite-violet",
      "neutral-gray"
    ]
  },
  {
    "id": "v1-325",
    "number": 325,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Eugenia Red 2 · Naples Yellow · Yellow Ocher · Deep Slate Green",
    "titleJa": "唐紅・藤黄・黄土色・鉄色",
    "colors": [
      "eugenia-red-2",
      "naples-yellow",
      "yellow-ocher",
      "deep-slate-green"
    ]
  },
  {
    "id": "v1-326",
    "number": 326,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Sulphur Yellow · Peach Red · Yellow Green · Light Green",
    "titleJa": "硫黄色・桃色・若葉色・若竹色",
    "colors": [
      "sulphur-yellow",
      "peach-red",
      "yellow-green",
      "light-green"
    ]
  },
  {
    "id": "v1-327",
    "number": 327,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Eosine Pink · Raw Sienna · Ecru · Grayish Lavender 2",
    "titleJa": "桃園色・琥珀色・生成り色・紅掛空色",
    "colors": [
      "eosine-pink",
      "raw-sienna",
      "ecru",
      "grayish-lavender-2"
    ]
  },
  {
    "id": "v1-328",
    "number": 328,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Brick Red · Apricot Orange · Vandyke Brown · Light Porcelain Green",
    "titleJa": "煉瓦色・杏子色・焦茶・青碧",
    "colors": [
      "brick-red",
      "apricot-orange",
      "vandyke-brown",
      "light-porcelain-green"
    ]
  },
  {
    "id": "v1-329",
    "number": 329,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Cream Yellow · Grayish Lavender 2 · Cotinga Purple · Slate Color",
    "titleJa": "刈安色・紅掛空色・似紫・藍鼠",
    "colors": [
      "cream-yellow",
      "grayish-lavender-2",
      "cotinga-purple",
      "slate-color"
    ]
  },
  {
    "id": "v1-330",
    "number": 330,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Olive Buff · Nile Blue · Salvia Blue · Green Blue",
    "titleJa": "柳茶・瓶覗・桔梗色・水浅葱",
    "colors": [
      "olive-buff",
      "nile-blue",
      "salvia-blue",
      "green-blue"
    ]
  },
  {
    "id": "v1-331",
    "number": 331,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Indian Lake · Dull Violet Black · Light Mauve · Violet",
    "titleJa": "臙脂・鉄紺・藤紫・青紫",
    "colors": [
      "indian-lake",
      "dull-violet-black",
      "light-mauve",
      "violet"
    ]
  },
  {
    "id": "v1-332",
    "number": 332,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Coral Red · Scarlet · Deep Slate Olive · Dusky Green",
    "titleJa": "珊瑚色・緋色・仙斎茶・鉄御納戸",
    "colors": [
      "coral-red",
      "scarlet",
      "deep-slate-olive",
      "dusky-green"
    ]
  },
  {
    "id": "v1-333",
    "number": 333,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Burnt Sienna · Lemon Yellow · Cobalt Green · Blue",
    "titleJa": "樺色・菜の花色・若緑・瑠璃色",
    "colors": [
      "burnt-sienna",
      "lemon-yellow",
      "cobalt-green",
      "blue"
    ]
  },
  {
    "id": "v1-334",
    "number": 334,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Seashell Pink · Olive · Yellow Green · Antwarp Blue",
    "titleJa": "桜貝色・鶯色・若葉色・藍鉄",
    "colors": [
      "seashell-pink",
      "olive",
      "yellow-green",
      "antwarp-blue"
    ]
  },
  {
    "id": "v1-335",
    "number": 335,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Vandyke Red · Yellow Orange · Violet · Slate Color",
    "titleJa": "紅檜皮・蜜柑色・青紫・藍鼠",
    "colors": [
      "vandyke-red",
      "yellow-orange",
      "violet",
      "slate-color"
    ]
  },
  {
    "id": "v1-336",
    "number": 336,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Eosine Pink · Hay's Russet · Pale Lemon Yellow · Blackish Olive",
    "titleJa": "桃園色・小豆色・女郎花・黒緑",
    "colors": [
      "eosine-pink",
      "hay's-russet",
      "pale-lemon-yellow",
      "blackish-olive"
    ]
  },
  {
    "id": "v1-337",
    "number": 337,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Vistoris Lake · Laelia Pink · Violet Carmine · Black",
    "titleJa": "海老茶・菖蒲色・紅紫・墨",
    "colors": [
      "vistoris-lake",
      "laelia-pink",
      "violet-carmine",
      "black"
    ]
  },
  {
    "id": "v1-338",
    "number": 338,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Carmine Red · Orange Yellow · Dusky Green · Grayish Lavender 2",
    "titleJa": "紅・鬱金色・鉄御納戸・紅掛空色",
    "colors": [
      "carmine-red",
      "orange-yellow",
      "dusky-green",
      "grayish-lavender-2"
    ]
  },
  {
    "id": "v1-339",
    "number": 339,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Ochraceous Salmon · English Red · Light Glaucous Blue · Violet Blue",
    "titleJa": "洗朱・丹色・薄花色・紺桔梗",
    "colors": [
      "ochraceous-salmon",
      "english-red",
      "light-glaucous-blue",
      "violet-blue"
    ]
  },
  {
    "id": "v1-340",
    "number": 340,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Peach Red · Sea Green · Neutral Gray · Black",
    "titleJa": "桃色・浅葱色・銀鼠・墨",
    "colors": [
      "peach-red",
      "sea-green",
      "neutral-gray",
      "black"
    ]
  },
  {
    "id": "v1-341",
    "number": 341,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Grenadine Pink · Cossack Green · Deep Slate Olive · Light Glaucous Blue",
    "titleJa": "甚三紅・千歳緑・仙斎茶・薄花色",
    "colors": [
      "grenadine-pink",
      "cossack-green",
      "deep-slate-olive",
      "light-glaucous-blue"
    ]
  },
  {
    "id": "v1-342",
    "number": 342,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Corinthian Pink · Cream Yellow · Orange Citrine · Deep Slate Olive",
    "titleJa": "退紅・刈安色・黄橡・仙斎茶",
    "colors": [
      "corinthian-pink",
      "cream-yellow",
      "orange-citrine",
      "deep-slate-olive"
    ]
  },
  {
    "id": "v1-343",
    "number": 343,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Burnt Sienna · Ivory Buff · Deep Grayish Olive · Vandar Poel's Blue",
    "titleJa": "樺色・練色・藍海松茶・褐色",
    "colors": [
      "burnt-sienna",
      "ivory-buff",
      "deep-grayish-olive",
      "vander-poel's-blue"
    ]
  },
  {
    "id": "v1-344",
    "number": 344,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Cinnamon Buff · Deep Lyons Blue · Aconite Violet · Black",
    "titleJa": "伽羅色・瑠璃紺・半色・墨",
    "colors": [
      "cinnamon-buff",
      "deep-lyons-blue",
      "aconite-violet",
      "black"
    ]
  },
  {
    "id": "v1-345",
    "number": 345,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Hay's Russet · Nile Blue · Venice Green · Blue Violet",
    "titleJa": "小豆色・瓶覗・新橋色・菫色",
    "colors": [
      "hay's-russet",
      "nile-blue",
      "venice-green",
      "blue-violet"
    ]
  },
  {
    "id": "v1-346",
    "number": 346,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Rosolanc Purple · Turquoise Green · Light Green Yellow · Andover Green",
    "titleJa": "牡丹色・白緑・若草色・利休鼠",
    "colors": [
      "rosolanc-purple",
      "turquoise-green",
      "light-green-yellow",
      "andover-green"
    ]
  },
  {
    "id": "v1-347",
    "number": 347,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Olive Yellow · Sea Green · Helvetia Blue · Lilac",
    "titleJa": "青朽葉・浅葱色・紺青・薄色",
    "colors": [
      "olive-yellow",
      "sea-green",
      "helvetia-blue",
      "lilac"
    ]
  },
  {
    "id": "v1-348",
    "number": 348,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Olive Buff · Cossack Green · Deep Slate Olive · Cotinga Purple",
    "titleJa": "柳茶・千歳緑・仙斎茶・似紫",
    "colors": [
      "olive-buff",
      "cossack-green",
      "deep-slate-olive",
      "cotinga-purple"
    ]
  },
  {
    "id": "v1-349",
    "number": 349,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Pomegranate Purple · Antwarp Blue · Deep Lyons Blue · Black",
    "titleJa": "石榴色・藍鉄・瑠璃紺・墨",
    "colors": [
      "pomegranite-purple",
      "antwarp-blue",
      "deep-lyons-blue",
      "black"
    ]
  },
  {
    "id": "v1-350",
    "number": 350,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Orange Yellow · Buffy Citrine · Artemisia Green · Dark Slate Purple",
    "titleJa": "鬱金色・利休茶・青磁鼠・紫鼠",
    "colors": [
      "orange-yellow",
      "buffy-citrine",
      "artemesia-green",
      "dark-slate-purple"
    ]
  },
  {
    "id": "v1-351",
    "number": 351,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Eosine Pink · Seashell Pink · Pale King's Blue 2 · Vandar Poel's Blue",
    "titleJa": "桃園色・桜貝色・水色・褐色",
    "colors": [
      "eosine-pink",
      "seashell-pink",
      "pale-king's-blue-2",
      "vander-poel's-blue"
    ]
  },
  {
    "id": "v1-352",
    "number": 352,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Indian Lake · Lemon Yellow · Calamine Blue · Black",
    "titleJa": "臙脂・菜の花色・空色・墨",
    "colors": [
      "indian-lake",
      "lemon-yellow",
      "calamine-blue",
      "black"
    ]
  },
  {
    "id": "v1-353",
    "number": 353,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Light Pinkish Cinnamon · Pyrite Yellow · Orange Rufous · Dark Greenish Glaucous",
    "titleJa": "薄香・黄支子・柿色・山鳩色",
    "colors": [
      "light-pinkish-cinnamon",
      "pyrite-yellow",
      "orange-rufous",
      "dark-greenish-glaucous"
    ]
  },
  {
    "id": "v1-354",
    "number": 354,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Spectrum Red · Golden Yellow · Nile Blue · Blue",
    "titleJa": "紅緋・山吹色・瓶覗・瑠璃色",
    "colors": [
      "spectrum-red",
      "golden-yellow",
      "nile-blue",
      "blue"
    ]
  },
  {
    "id": "v1-355",
    "number": 355,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Rosolanc Purple · Vandyke Brown · Sea Green · Antwarp Blue",
    "titleJa": "牡丹色・焦茶・浅葱色・藍鉄",
    "colors": [
      "rosolanc-purple",
      "vandyke-brown",
      "sea-green",
      "antwarp-blue"
    ]
  },
  {
    "id": "v1-356",
    "number": 356,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Lemon Yellow · Citrine · Light Glaucous Blue · Grayish Lavender 1",
    "titleJa": "菜の花色・鶯茶・薄花色・藤色",
    "colors": [
      "lemon-yellow",
      "citrine",
      "light-glaucous-blue",
      "grayish-lavender-1"
    ]
  },
  {
    "id": "v1-357",
    "number": 357,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Pyrite Yellow · Light Glaucous Blue · Light Mauve · Slate Color",
    "titleJa": "黄支子・薄花色・藤紫・藍鼠",
    "colors": [
      "pyrite-yellow",
      "light-glaucous-blue",
      "light-mauve",
      "slate-color"
    ]
  },
  {
    "id": "v1-358",
    "number": 358,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Lemon Yellow · Orange · Glaucous Green · Antwarp Blue",
    "titleJa": "菜の花色・橙色・青磁色・藍鉄",
    "colors": [
      "lemon-yellow",
      "orange",
      "glaucous-green",
      "antwarp-blue"
    ]
  },
  {
    "id": "v1-359",
    "number": 359,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Lemon Yellow · Madder Brown · Nile Blue · Neutral Gray",
    "titleJa": "菜の花色・栗梅・瓶覗・銀鼠",
    "colors": [
      "lemon-yellow",
      "madder-brown",
      "nile-blue",
      "neutral-gray"
    ]
  },
  {
    "id": "v1-360",
    "number": 360,
    "volume": 1,
    "section": "4 Colors (Quads)",
    "sectionJa": "四色配色",
    "title": "Olympic Blue · Vandar Poel's Blue · Taupe Brown · Violet",
    "titleJa": "縹色・褐色・小豆鼠・青紫",
    "colors": [
      "olympic-blue",
      "vander-poel's-blue",
      "taupe-brown",
      "violet"
    ]
  }
];

export const VOL2_COMBINATIONS: WadaCombination[] = [
  {
    "id": "v2-1",
    "number": 1,
    "volume": 2,
    "subType": "seasons",
    "month": "January",
    "monthJa": "睦月 (Mutsuki)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "January (Winter)",
    "sectionJa": "睦月 (Mutsuki)・冬",
    "title": "January Plate 1",
    "titleJa": "睦月 (Mutsuki) 第1図",
    "note": "Crisp New Year frost, auspicious pine, and early plum buds",
    "colors": [
      "sulphur-yellow",
      "seashell-pink",
      "glaucous-green",
      "grayish-lavender-2",
      "white"
    ]
  },
  {
    "id": "v2-2",
    "number": 2,
    "volume": 2,
    "subType": "seasons",
    "month": "January",
    "monthJa": "睦月 (Mutsuki)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "January (Winter)",
    "sectionJa": "睦月 (Mutsuki)・冬",
    "title": "January Plate 2",
    "titleJa": "睦月 (Mutsuki) 第2図",
    "note": "Crisp New Year frost, auspicious pine, and early plum buds",
    "colors": [
      "raw-sienna",
      "pale-burnt-lake",
      "naples-yellow",
      "light-pinkish-cinnamon",
      "pinkish-cinnamon",
      "citron-yellow",
      "citrine"
    ]
  },
  {
    "id": "v2-3",
    "number": 3,
    "volume": 2,
    "subType": "seasons",
    "month": "January",
    "monthJa": "睦月 (Mutsuki)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "January (Winter)",
    "sectionJa": "睦月 (Mutsuki)・冬",
    "title": "January Plate 3",
    "titleJa": "睦月 (Mutsuki) 第3図",
    "note": "Crisp New Year frost, auspicious pine, and early plum buds",
    "colors": [
      "ecru",
      "dark-citrine",
      "vandyke-brown",
      "light-porcelain-green",
      "deep-violet-plumbeous"
    ]
  },
  {
    "id": "v2-4",
    "number": 4,
    "volume": 2,
    "subType": "seasons",
    "month": "January",
    "monthJa": "睦月 (Mutsuki)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "January (Winter)",
    "sectionJa": "睦月 (Mutsuki)・冬",
    "title": "January Plate 4",
    "titleJa": "睦月 (Mutsuki) 第4図",
    "note": "Crisp New Year frost, auspicious pine, and early plum buds",
    "colors": [
      "hermosa-pink",
      "old-rose",
      "burnt-sienna",
      "red",
      "light-pinkish-cinnamon",
      "yellow-orange"
    ]
  },
  {
    "id": "v2-5",
    "number": 5,
    "volume": 2,
    "subType": "seasons",
    "month": "January",
    "monthJa": "睦月 (Mutsuki)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "January (Winter)",
    "sectionJa": "睦月 (Mutsuki)・冬",
    "title": "January Plate 5",
    "titleJa": "睦月 (Mutsuki) 第5図",
    "note": "Crisp New Year frost, auspicious pine, and early plum buds",
    "colors": [
      "spectrum-red",
      "ivory-buff",
      "cobalt-green",
      "dark-tyrian-blue",
      "warm-gray",
      "black"
    ]
  },
  {
    "id": "v2-6",
    "number": 6,
    "volume": 2,
    "subType": "seasons",
    "month": "January",
    "monthJa": "睦月 (Mutsuki)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "January (Winter)",
    "sectionJa": "睦月 (Mutsuki)・冬",
    "title": "January Plate 6",
    "titleJa": "睦月 (Mutsuki) 第6図",
    "note": "Crisp New Year frost, auspicious pine, and early plum buds",
    "colors": [
      "old-rose",
      "maple",
      "apricot-yellow",
      "violet-blue",
      "grayish-lavender-2",
      "deep-violet-plumbeous"
    ]
  },
  {
    "id": "v2-7",
    "number": 7,
    "volume": 2,
    "subType": "seasons",
    "month": "February",
    "monthJa": "如月 (Kisaragi)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "February (Winter)",
    "sectionJa": "如月 (Kisaragi)・冬",
    "title": "February Plate 1",
    "titleJa": "如月 (Kisaragi) 第1図",
    "note": "Plum blossoms breaking through late winter snow and warm earth",
    "colors": [
      "red",
      "citrine",
      "light-glaucous-blue",
      "venice-green",
      "white"
    ]
  },
  {
    "id": "v2-8",
    "number": 8,
    "volume": 2,
    "subType": "seasons",
    "month": "February",
    "monthJa": "如月 (Kisaragi)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "February (Winter)",
    "sectionJa": "如月 (Kisaragi)・冬",
    "title": "February Plate 2",
    "titleJa": "如月 (Kisaragi) 第2図",
    "note": "Plum blossoms breaking through late winter snow and warm earth",
    "colors": [
      "sulphine-yellow",
      "kronbergs-green",
      "diamine-green",
      "dull-violet-black",
      "lilac"
    ]
  },
  {
    "id": "v2-9",
    "number": 9,
    "volume": 2,
    "subType": "seasons",
    "month": "February",
    "monthJa": "如月 (Kisaragi)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "February (Winter)",
    "sectionJa": "如月 (Kisaragi)・冬",
    "title": "February Plate 3",
    "titleJa": "如月 (Kisaragi) 第3図",
    "note": "Plum blossoms breaking through late winter snow and warm earth",
    "colors": [
      "yellow-ocher",
      "english-red",
      "khaki-tawny-olive",
      "dull-citrine",
      "andover-green",
      "deep-indigo"
    ]
  },
  {
    "id": "v2-10",
    "number": 10,
    "volume": 2,
    "subType": "seasons",
    "month": "February",
    "monthJa": "如月 (Kisaragi)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "February (Winter)",
    "sectionJa": "如月 (Kisaragi)・冬",
    "title": "February Plate 4",
    "titleJa": "如月 (Kisaragi) 第4図",
    "note": "Plum blossoms breaking through late winter snow and warm earth",
    "colors": [
      "eugenia-red-2",
      "vistoris-lake",
      "maple",
      "white",
      "mineral-gray"
    ]
  },
  {
    "id": "v2-11",
    "number": 11,
    "volume": 2,
    "subType": "seasons",
    "month": "February",
    "monthJa": "如月 (Kisaragi)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "February (Winter)",
    "sectionJa": "如月 (Kisaragi)・冬",
    "title": "February Plate 5",
    "titleJa": "如月 (Kisaragi) 第5図",
    "note": "Plum blossoms breaking through late winter snow and warm earth",
    "colors": [
      "fawn",
      "spinel-red",
      "spectrum-red",
      "indian-lake",
      "red",
      "aconite-violet"
    ]
  },
  {
    "id": "v2-12",
    "number": 12,
    "volume": 2,
    "subType": "seasons",
    "month": "February",
    "monthJa": "如月 (Kisaragi)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "February (Winter)",
    "sectionJa": "如月 (Kisaragi)・冬",
    "title": "February Plate 6",
    "titleJa": "如月 (Kisaragi) 第6図",
    "note": "Plum blossoms breaking through late winter snow and warm earth",
    "colors": [
      "ivory-buff",
      "khaki-tawny-olive",
      "deep-lyons-blue",
      "dull-blue-violet",
      "neutral-gray"
    ]
  },
  {
    "id": "v2-13",
    "number": 13,
    "volume": 2,
    "subType": "seasons",
    "month": "March",
    "monthJa": "弥生 (Yayoi)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "March (Spring)",
    "sectionJa": "弥生 (Yayoi)・春",
    "title": "March Plate 1",
    "titleJa": "弥生 (Yayoi) 第1図",
    "note": "Early cherry blossoms, peach festivals, and awakening shoots",
    "colors": [
      "pale-lemon-yellow",
      "peach-red",
      "green",
      "nile-blue",
      "deep-indigo"
    ]
  },
  {
    "id": "v2-14",
    "number": 14,
    "volume": 2,
    "subType": "seasons",
    "month": "March",
    "monthJa": "弥生 (Yayoi)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "March (Spring)",
    "sectionJa": "弥生 (Yayoi)・春",
    "title": "March Plate 2",
    "titleJa": "弥生 (Yayoi) 第2図",
    "note": "Early cherry blossoms, peach festivals, and awakening shoots",
    "colors": [
      "cameo-pink",
      "carmine-red",
      "seashell-pink",
      "pinkish-cinnamon",
      "buffy-citrine",
      "nile-blue",
      "deep-slate-green"
    ]
  },
  {
    "id": "v2-15",
    "number": 15,
    "volume": 2,
    "subType": "seasons",
    "month": "March",
    "monthJa": "弥生 (Yayoi)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "March (Spring)",
    "sectionJa": "弥生 (Yayoi)・春",
    "title": "March Plate 3",
    "titleJa": "弥生 (Yayoi) 第3図",
    "note": "Early cherry blossoms, peach festivals, and awakening shoots",
    "colors": [
      "fresh-color",
      "scarlet",
      "olive-buff",
      "sudan-brown",
      "eupatorium-purple",
      "cotinga-purple"
    ]
  },
  {
    "id": "v2-16",
    "number": 16,
    "volume": 2,
    "subType": "seasons",
    "month": "March",
    "monthJa": "弥生 (Yayoi)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "March (Spring)",
    "sectionJa": "弥生 (Yayoi)・春",
    "title": "March Plate 4",
    "titleJa": "弥生 (Yayoi) 第4図",
    "note": "Early cherry blossoms, peach festivals, and awakening shoots",
    "colors": [
      "light-glaucous-blue",
      "cerulean-blue",
      "helvetia-blue",
      "deep-lyons-blue",
      "grayish-lavender-1",
      "grayish-lavender-2",
      "dark-soft-violet"
    ]
  },
  {
    "id": "v2-17",
    "number": 17,
    "volume": 2,
    "subType": "seasons",
    "month": "March",
    "monthJa": "弥生 (Yayoi)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "March (Spring)",
    "sectionJa": "弥生 (Yayoi)・春",
    "title": "March Plate 5",
    "titleJa": "弥生 (Yayoi) 第5図",
    "note": "Early cherry blossoms, peach festivals, and awakening shoots",
    "colors": [
      "ocher-red",
      "vinaceous-cinnamon",
      "light-glaucous-blue",
      "dark-medici-blue",
      "deep-indigo"
    ]
  },
  {
    "id": "v2-18",
    "number": 18,
    "volume": 2,
    "subType": "seasons",
    "month": "March",
    "monthJa": "弥生 (Yayoi)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "March (Spring)",
    "sectionJa": "弥生 (Yayoi)・春",
    "title": "March Plate 6",
    "titleJa": "弥生 (Yayoi) 第6図",
    "note": "Early cherry blossoms, peach festivals, and awakening shoots",
    "colors": [
      "eugenia-red-1",
      "golden-yellow",
      "olive-ocher",
      "light-brownish-olive",
      "chromium-green",
      "vander-poel's-blue"
    ]
  },
  {
    "id": "v2-19",
    "number": 19,
    "volume": 2,
    "subType": "seasons",
    "month": "April",
    "monthJa": "卯月 (Uzuki)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "April (Spring)",
    "sectionJa": "卯月 (Uzuki)・春",
    "title": "April Plate 1",
    "titleJa": "卯月 (Uzuki) 第1図",
    "note": "Full sakura bloom, misty mountain skies, and fresh foliage",
    "colors": [
      "ivory-buff",
      "deep-lyons-blue",
      "grayish-lavender-1"
    ]
  },
  {
    "id": "v2-20",
    "number": 20,
    "volume": 2,
    "subType": "seasons",
    "month": "April",
    "monthJa": "卯月 (Uzuki)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "April (Spring)",
    "sectionJa": "卯月 (Uzuki)・春",
    "title": "April Plate 2",
    "titleJa": "卯月 (Uzuki) 第2図",
    "note": "Full sakura bloom, misty mountain skies, and fresh foliage",
    "colors": [
      "hermosa-pink",
      "yellow",
      "turquoise-green",
      "cobalt-green",
      "calamine-blue"
    ]
  },
  {
    "id": "v2-21",
    "number": 21,
    "volume": 2,
    "subType": "seasons",
    "month": "April",
    "monthJa": "卯月 (Uzuki)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "April (Spring)",
    "sectionJa": "卯月 (Uzuki)・春",
    "title": "April Plate 3",
    "titleJa": "卯月 (Uzuki) 第3図",
    "note": "Full sakura bloom, misty mountain skies, and fresh foliage",
    "colors": [
      "spinel-red",
      "raw-sienna",
      "sulphur-yellow",
      "helvetia-blue",
      "dull-violet-black"
    ]
  },
  {
    "id": "v2-22",
    "number": 22,
    "volume": 2,
    "subType": "seasons",
    "month": "April",
    "monthJa": "卯月 (Uzuki)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "April (Spring)",
    "sectionJa": "卯月 (Uzuki)・春",
    "title": "April Plate 4",
    "titleJa": "卯月 (Uzuki) 第4図",
    "note": "Full sakura bloom, misty mountain skies, and fresh foliage",
    "colors": [
      "cinnamon-buff",
      "green",
      "cobalt-green",
      "laelia-pink"
    ]
  },
  {
    "id": "v2-23",
    "number": 23,
    "volume": 2,
    "subType": "seasons",
    "month": "April",
    "monthJa": "卯月 (Uzuki)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "April (Spring)",
    "sectionJa": "卯月 (Uzuki)・春",
    "title": "April Plate 5",
    "titleJa": "卯月 (Uzuki) 第5図",
    "note": "Full sakura bloom, misty mountain skies, and fresh foliage",
    "colors": [
      "pale-lemon-yellow",
      "citron-yellow",
      "light-glaucous-blue",
      "grayish-lavender-2",
      "neutral-gray"
    ]
  },
  {
    "id": "v2-24",
    "number": 24,
    "volume": 2,
    "subType": "seasons",
    "month": "April",
    "monthJa": "卯月 (Uzuki)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "April (Spring)",
    "sectionJa": "卯月 (Uzuki)・春",
    "title": "April Plate 6",
    "titleJa": "卯月 (Uzuki) 第6図",
    "note": "Full sakura bloom, misty mountain skies, and fresh foliage",
    "colors": [
      "fawn",
      "eosine-pink",
      "eugenia-red-1",
      "olive-yellow",
      "olympic-blue"
    ]
  },
  {
    "id": "v2-25",
    "number": 25,
    "volume": 2,
    "subType": "seasons",
    "month": "May",
    "monthJa": "皐月 (Satsuki)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "May (Spring)",
    "sectionJa": "皐月 (Satsuki)・春",
    "title": "May Plate 1",
    "titleJa": "皐月 (Satsuki) 第1図",
    "note": "Wisteria trellises, iris ponds, and vibrant young bamboo",
    "colors": [
      "eosine-pink",
      "seashell-pink",
      "olympic-blue",
      "purple-drab"
    ]
  },
  {
    "id": "v2-26",
    "number": 26,
    "volume": 2,
    "subType": "seasons",
    "month": "May",
    "monthJa": "皐月 (Satsuki)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "May (Spring)",
    "sectionJa": "皐月 (Satsuki)・春",
    "title": "May Plate 2",
    "titleJa": "皐月 (Satsuki) 第2図",
    "note": "Wisteria trellises, iris ponds, and vibrant young bamboo",
    "colors": [
      "sulphur-yellow",
      "cinnamon-buff",
      "pyrite-yellow",
      "dusky-madder-violet"
    ]
  },
  {
    "id": "v2-27",
    "number": 27,
    "volume": 2,
    "subType": "seasons",
    "month": "May",
    "monthJa": "皐月 (Satsuki)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "May (Spring)",
    "sectionJa": "皐月 (Satsuki)・春",
    "title": "May Plate 3",
    "titleJa": "皐月 (Satsuki) 第3図",
    "note": "Wisteria trellises, iris ponds, and vibrant young bamboo",
    "colors": [
      "corinthian-pink",
      "fawn",
      "grenadine-pink",
      "pansy-purple",
      "naples-yellow"
    ]
  },
  {
    "id": "v2-28",
    "number": 28,
    "volume": 2,
    "subType": "seasons",
    "month": "May",
    "monthJa": "皐月 (Satsuki)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "May (Spring)",
    "sectionJa": "皐月 (Satsuki)・春",
    "title": "May Plate 4",
    "titleJa": "皐月 (Satsuki) 第4図",
    "note": "Wisteria trellises, iris ponds, and vibrant young bamboo",
    "colors": [
      "fawn",
      "eosine-pink",
      "vistoris-lake"
    ]
  },
  {
    "id": "v2-29",
    "number": 29,
    "volume": 2,
    "subType": "seasons",
    "month": "May",
    "monthJa": "皐月 (Satsuki)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "May (Spring)",
    "sectionJa": "皐月 (Satsuki)・春",
    "title": "May Plate 5",
    "titleJa": "皐月 (Satsuki) 第5図",
    "note": "Wisteria trellises, iris ponds, and vibrant young bamboo",
    "colors": [
      "naples-yellow",
      "pyrite-yellow",
      "citrine",
      "artemesia-green",
      "blackish-olive"
    ]
  },
  {
    "id": "v2-30",
    "number": 30,
    "volume": 2,
    "subType": "seasons",
    "month": "May",
    "monthJa": "皐月 (Satsuki)",
    "season": "Spring",
    "seasonJa": "春",
    "section": "May (Spring)",
    "sectionJa": "皐月 (Satsuki)・春",
    "title": "May Plate 6",
    "titleJa": "皐月 (Satsuki) 第6図",
    "note": "Wisteria trellises, iris ponds, and vibrant young bamboo",
    "colors": [
      "cameo-pink",
      "english-red",
      "orange-citrine",
      "artemesia-green",
      "blackish-olive",
      "deep-slate-green"
    ]
  },
  {
    "id": "v2-31",
    "number": 31,
    "volume": 2,
    "subType": "seasons",
    "month": "June",
    "monthJa": "水無月 (Minazuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "June (Summer)",
    "sectionJa": "水無月 (Minazuki)・夏",
    "title": "June Plate 1",
    "titleJa": "水無月 (Minazuki) 第1図",
    "note": "Rainy season (tsuyu) hydrangeas, celadon moss, and cool slate",
    "colors": [
      "orange",
      "artemesia-green",
      "pale-king's-blue-2",
      "deep-slate-green"
    ]
  },
  {
    "id": "v2-32",
    "number": 32,
    "volume": 2,
    "subType": "seasons",
    "month": "June",
    "monthJa": "水無月 (Minazuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "June (Summer)",
    "sectionJa": "水無月 (Minazuki)・夏",
    "title": "June Plate 2",
    "titleJa": "水無月 (Minazuki) 第2図",
    "note": "Rainy season (tsuyu) hydrangeas, celadon moss, and cool slate",
    "colors": [
      "khaki-tawny-olive",
      "pale-king's-blue-2",
      "dull-violet-black"
    ]
  },
  {
    "id": "v2-33",
    "number": 33,
    "volume": 2,
    "subType": "seasons",
    "month": "June",
    "monthJa": "水無月 (Minazuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "June (Summer)",
    "sectionJa": "水無月 (Minazuki)・夏",
    "title": "June Plate 3",
    "titleJa": "水無月 (Minazuki) 第3図",
    "note": "Rainy season (tsuyu) hydrangeas, celadon moss, and cool slate",
    "colors": [
      "vinaceous-cinnamon",
      "olive-buff",
      "lemon-yellow",
      "salvia-blue",
      "laelia-pink",
      "white"
    ]
  },
  {
    "id": "v2-34",
    "number": 34,
    "volume": 2,
    "subType": "seasons",
    "month": "June",
    "monthJa": "水無月 (Minazuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "June (Summer)",
    "sectionJa": "水無月 (Minazuki)・夏",
    "title": "June Plate 4",
    "titleJa": "水無月 (Minazuki) 第4図",
    "note": "Rainy season (tsuyu) hydrangeas, celadon moss, and cool slate",
    "colors": [
      "vistoris-lake",
      "seashell-pink",
      "vandyke-brown",
      "light-green"
    ]
  },
  {
    "id": "v2-35",
    "number": 35,
    "volume": 2,
    "subType": "seasons",
    "month": "June",
    "monthJa": "水無月 (Minazuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "June (Summer)",
    "sectionJa": "水無月 (Minazuki)・夏",
    "title": "June Plate 5",
    "titleJa": "水無月 (Minazuki) 第5図",
    "note": "Rainy season (tsuyu) hydrangeas, celadon moss, and cool slate",
    "colors": [
      "light-brown-drab",
      "fresh-color",
      "pomegranite-purple",
      "dull-viridian-green",
      "dark-perilla-purple"
    ]
  },
  {
    "id": "v2-36",
    "number": 36,
    "volume": 2,
    "subType": "seasons",
    "month": "June",
    "monthJa": "水無月 (Minazuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "June (Summer)",
    "sectionJa": "水無月 (Minazuki)・夏",
    "title": "June Plate 6",
    "titleJa": "水無月 (Minazuki) 第6図",
    "note": "Rainy season (tsuyu) hydrangeas, celadon moss, and cool slate",
    "colors": [
      "pale-purplish-vinaceous",
      "old-rose",
      "citron-yellow",
      "calamine-blue",
      "deep-slate-green"
    ]
  },
  {
    "id": "v2-37",
    "number": 37,
    "volume": 2,
    "subType": "seasons",
    "month": "July",
    "monthJa": "文月 (Fumizuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "July (Summer)",
    "sectionJa": "文月 (Fumizuki)・夏",
    "title": "July Plate 1",
    "titleJa": "文月 (Fumizuki) 第1図",
    "note": "Tanabata starlight, morning glories, and coastal sea breeze",
    "colors": [
      "helvetia-blue",
      "violet-blue",
      "neutral-gray"
    ]
  },
  {
    "id": "v2-38",
    "number": 38,
    "volume": 2,
    "subType": "seasons",
    "month": "July",
    "monthJa": "文月 (Fumizuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "July (Summer)",
    "sectionJa": "文月 (Fumizuki)・夏",
    "title": "July Plate 2",
    "titleJa": "文月 (Fumizuki) 第2図",
    "note": "Tanabata starlight, morning glories, and coastal sea breeze",
    "colors": [
      "eosine-pink",
      "spectrum-red",
      "deep-indigo",
      "white"
    ]
  },
  {
    "id": "v2-39",
    "number": 39,
    "volume": 2,
    "subType": "seasons",
    "month": "July",
    "monthJa": "文月 (Fumizuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "July (Summer)",
    "sectionJa": "文月 (Fumizuki)・夏",
    "title": "July Plate 3",
    "titleJa": "文月 (Fumizuki) 第3図",
    "note": "Tanabata starlight, morning glories, and coastal sea breeze",
    "colors": [
      "orange-rufous",
      "violet-blue",
      "grayish-lavender-2",
      "lilac",
      "blue-violet"
    ]
  },
  {
    "id": "v2-40",
    "number": 40,
    "volume": 2,
    "subType": "seasons",
    "month": "July",
    "monthJa": "文月 (Fumizuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "July (Summer)",
    "sectionJa": "文月 (Fumizuki)・夏",
    "title": "July Plate 4",
    "titleJa": "文月 (Fumizuki) 第4図",
    "note": "Tanabata starlight, morning glories, and coastal sea breeze",
    "colors": [
      "sulphur-yellow",
      "sea-green",
      "grape-green"
    ]
  },
  {
    "id": "v2-41",
    "number": 41,
    "volume": 2,
    "subType": "seasons",
    "month": "July",
    "monthJa": "文月 (Fumizuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "July (Summer)",
    "sectionJa": "文月 (Fumizuki)・夏",
    "title": "July Plate 5",
    "titleJa": "文月 (Fumizuki) 第5図",
    "note": "Tanabata starlight, morning glories, and coastal sea breeze",
    "colors": [
      "sepia",
      "cobalt-green",
      "peacock-blue",
      "white"
    ]
  },
  {
    "id": "v2-42",
    "number": 42,
    "volume": 2,
    "subType": "seasons",
    "month": "July",
    "monthJa": "文月 (Fumizuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "July (Summer)",
    "sectionJa": "文月 (Fumizuki)・夏",
    "title": "July Plate 6",
    "titleJa": "文月 (Fumizuki) 第6図",
    "note": "Tanabata starlight, morning glories, and coastal sea breeze",
    "colors": [
      "cream-yellow",
      "orange",
      "oil-green",
      "lincoln-green"
    ]
  },
  {
    "id": "v2-43",
    "number": 43,
    "volume": 2,
    "subType": "seasons",
    "month": "August",
    "monthJa": "葉月 (Hazuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "August (Summer)",
    "sectionJa": "葉月 (Hazuki)・夏",
    "title": "August Plate 1",
    "titleJa": "葉月 (Hazuki) 第1図",
    "note": "High summer sun, deep cicada forests, and evening festival lanterns",
    "colors": [
      "pale-cinammon-pink",
      "ivory-buff",
      "light-green",
      "laelia-pink"
    ]
  },
  {
    "id": "v2-44",
    "number": 44,
    "volume": 2,
    "subType": "seasons",
    "month": "August",
    "monthJa": "葉月 (Hazuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "August (Summer)",
    "sectionJa": "葉月 (Hazuki)・夏",
    "title": "August Plate 2",
    "titleJa": "葉月 (Hazuki) 第2図",
    "note": "High summer sun, deep cicada forests, and evening festival lanterns",
    "colors": [
      "sea-foam-yellow",
      "light-glaucous-blue",
      "vander-poel's-blue",
      "mineral-gray"
    ]
  },
  {
    "id": "v2-45",
    "number": 45,
    "volume": 2,
    "subType": "seasons",
    "month": "August",
    "monthJa": "葉月 (Hazuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "August (Summer)",
    "sectionJa": "葉月 (Hazuki)・夏",
    "title": "August Plate 3",
    "titleJa": "葉月 (Hazuki) 第3図",
    "note": "High summer sun, deep cicada forests, and evening festival lanterns",
    "colors": [
      "rosolanc-purple",
      "cinnamon-buff",
      "peacock-blue",
      "dull-purplish-black"
    ]
  },
  {
    "id": "v2-46",
    "number": 46,
    "volume": 2,
    "subType": "seasons",
    "month": "August",
    "monthJa": "葉月 (Hazuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "August (Summer)",
    "sectionJa": "葉月 (Hazuki)・夏",
    "title": "August Plate 4",
    "titleJa": "葉月 (Hazuki) 第4図",
    "note": "High summer sun, deep cicada forests, and evening festival lanterns",
    "colors": [
      "pale-ecru-drab",
      "grape-green",
      "pale-king's-blue-1",
      "pale-methyl-blue",
      "violet-ultramarine"
    ]
  },
  {
    "id": "v2-47",
    "number": 47,
    "volume": 2,
    "subType": "seasons",
    "month": "August",
    "monthJa": "葉月 (Hazuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "August (Summer)",
    "sectionJa": "葉月 (Hazuki)・夏",
    "title": "August Plate 5",
    "titleJa": "葉月 (Hazuki) 第5図",
    "note": "High summer sun, deep cicada forests, and evening festival lanterns",
    "colors": [
      "coral-red",
      "eugenia-red-2",
      "naples-yellow",
      "pale-methyl-blue",
      "dull-purplish-black"
    ]
  },
  {
    "id": "v2-48",
    "number": 48,
    "volume": 2,
    "subType": "seasons",
    "month": "August",
    "monthJa": "葉月 (Hazuki)",
    "season": "Summer",
    "seasonJa": "夏",
    "section": "August (Summer)",
    "sectionJa": "葉月 (Hazuki)・夏",
    "title": "August Plate 6",
    "titleJa": "葉月 (Hazuki) 第6図",
    "note": "High summer sun, deep cicada forests, and evening festival lanterns",
    "colors": [
      "corinthian-pink",
      "vander-poel's-blue",
      "white",
      "neutral-gray"
    ]
  },
  {
    "id": "v2-49",
    "number": 49,
    "volume": 2,
    "subType": "seasons",
    "month": "September",
    "monthJa": "長月 (Nagatsuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "September (Autumn)",
    "sectionJa": "長月 (Nagatsuki)・秋",
    "title": "September Plate 1",
    "titleJa": "長月 (Nagatsuki) 第1図",
    "note": "Harvest moon, bush clover, and early autumn amber",
    "colors": [
      "hermosa-pink",
      "pale-ecru-drab",
      "hydrangea-red",
      "cotinga-purple"
    ]
  },
  {
    "id": "v2-50",
    "number": 50,
    "volume": 2,
    "subType": "seasons",
    "month": "September",
    "monthJa": "長月 (Nagatsuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "September (Autumn)",
    "sectionJa": "長月 (Nagatsuki)・秋",
    "title": "September Plate 2",
    "titleJa": "長月 (Nagatsuki) 第2図",
    "note": "Harvest moon, bush clover, and early autumn amber",
    "colors": [
      "olive-buff",
      "dull-citrine",
      "light-brownish-olive"
    ]
  },
  {
    "id": "v2-51",
    "number": 51,
    "volume": 2,
    "subType": "seasons",
    "month": "September",
    "monthJa": "長月 (Nagatsuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "September (Autumn)",
    "sectionJa": "長月 (Nagatsuki)・秋",
    "title": "September Plate 3",
    "titleJa": "長月 (Nagatsuki) 第3図",
    "note": "Harvest moon, bush clover, and early autumn amber",
    "colors": [
      "dark-greenish-glaucous",
      "pistachio-green",
      "blue",
      "dusky-green",
      "white"
    ]
  },
  {
    "id": "v2-52",
    "number": 52,
    "volume": 2,
    "subType": "seasons",
    "month": "September",
    "monthJa": "長月 (Nagatsuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "September (Autumn)",
    "sectionJa": "長月 (Nagatsuki)・秋",
    "title": "September Plate 4",
    "titleJa": "長月 (Nagatsuki) 第4図",
    "note": "Harvest moon, bush clover, and early autumn amber",
    "colors": [
      "sulphine-yellow",
      "blue",
      "dull-violet-black"
    ]
  },
  {
    "id": "v2-53",
    "number": 53,
    "volume": 2,
    "subType": "seasons",
    "month": "September",
    "monthJa": "長月 (Nagatsuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "September (Autumn)",
    "sectionJa": "長月 (Nagatsuki)・秋",
    "title": "September Plate 5",
    "titleJa": "長月 (Nagatsuki) 第5図",
    "note": "Harvest moon, bush clover, and early autumn amber",
    "colors": [
      "spectrum-red",
      "yellow-green",
      "cossack-green",
      "dusky-green"
    ]
  },
  {
    "id": "v2-54",
    "number": 54,
    "volume": 2,
    "subType": "seasons",
    "month": "September",
    "monthJa": "長月 (Nagatsuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "September (Autumn)",
    "sectionJa": "長月 (Nagatsuki)・秋",
    "title": "September Plate 6",
    "titleJa": "長月 (Nagatsuki) 第6図",
    "note": "Harvest moon, bush clover, and early autumn amber",
    "colors": [
      "light-brown-drab",
      "pale-lemon-yellow",
      "buffy-citrine",
      "light-glaucous-blue"
    ]
  },
  {
    "id": "v2-55",
    "number": 55,
    "volume": 2,
    "subType": "seasons",
    "month": "October",
    "monthJa": "神無月 (Kannazuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "October (Autumn)",
    "sectionJa": "神無月 (Kannazuki)・秋",
    "title": "October Plate 1",
    "titleJa": "神無月 (Kannazuki) 第1図",
    "note": "Peak maple foliage (momiji), ripe persimmons, and deep indigo skies",
    "colors": [
      "vandyke-red",
      "sulphur-yellow",
      "benzol-green",
      "dull-violet-black",
      "taupe-brown"
    ]
  },
  {
    "id": "v2-56",
    "number": 56,
    "volume": 2,
    "subType": "seasons",
    "month": "October",
    "monthJa": "神無月 (Kannazuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "October (Autumn)",
    "sectionJa": "神無月 (Kannazuki)・秋",
    "title": "October Plate 2",
    "titleJa": "神無月 (Kannazuki) 第2図",
    "note": "Peak maple foliage (momiji), ripe persimmons, and deep indigo skies",
    "colors": [
      "fresh-color",
      "raw-sienna",
      "ivory-buff"
    ]
  },
  {
    "id": "v2-57",
    "number": 57,
    "volume": 2,
    "subType": "seasons",
    "month": "October",
    "monthJa": "神無月 (Kannazuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "October (Autumn)",
    "sectionJa": "神無月 (Kannazuki)・秋",
    "title": "October Plate 3",
    "titleJa": "神無月 (Kannazuki) 第3図",
    "note": "Peak maple foliage (momiji), ripe persimmons, and deep indigo skies",
    "colors": [
      "red-orange",
      "orange-citrine",
      "light-brownish-olive",
      "deep-slate-olive"
    ]
  },
  {
    "id": "v2-58",
    "number": 58,
    "volume": 2,
    "subType": "seasons",
    "month": "October",
    "monthJa": "神無月 (Kannazuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "October (Autumn)",
    "sectionJa": "神無月 (Kannazuki)・秋",
    "title": "October Plate 4",
    "titleJa": "神無月 (Kannazuki) 第4図",
    "note": "Peak maple foliage (momiji), ripe persimmons, and deep indigo skies",
    "colors": [
      "vistoris-lake",
      "light-glaucous-blue",
      "deep-indigo"
    ]
  },
  {
    "id": "v2-59",
    "number": 59,
    "volume": 2,
    "subType": "seasons",
    "month": "October",
    "monthJa": "神無月 (Kannazuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "October (Autumn)",
    "sectionJa": "神無月 (Kannazuki)・秋",
    "title": "October Plate 5",
    "titleJa": "神無月 (Kannazuki) 第5図",
    "note": "Peak maple foliage (momiji), ripe persimmons, and deep indigo skies",
    "colors": [
      "light-pinkish-cinnamon",
      "citron-yellow",
      "mars-brown-tobacco",
      "glaucous-green"
    ]
  },
  {
    "id": "v2-60",
    "number": 60,
    "volume": 2,
    "subType": "seasons",
    "month": "October",
    "monthJa": "神無月 (Kannazuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "October (Autumn)",
    "sectionJa": "神無月 (Kannazuki)・秋",
    "title": "October Plate 6",
    "titleJa": "神無月 (Kannazuki) 第6図",
    "note": "Peak maple foliage (momiji), ripe persimmons, and deep indigo skies",
    "colors": [
      "fawn",
      "indian-lake",
      "seashell-pink",
      "ochraceous-salmon",
      "apricot-orange",
      "cinnamon-rufous"
    ]
  },
  {
    "id": "v2-61",
    "number": 61,
    "volume": 2,
    "subType": "seasons",
    "month": "November",
    "monthJa": "霜月 (Shimotsuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "November (Autumn)",
    "sectionJa": "霜月 (Shimotsuki)・秋",
    "title": "November Plate 1",
    "titleJa": "霜月 (Shimotsuki) 第1図",
    "note": "First frost on fallen leaves, tea ceremony earth, and quiet slate",
    "colors": [
      "orange-rufous",
      "andover-green",
      "deep-indigo"
    ]
  },
  {
    "id": "v2-62",
    "number": 62,
    "volume": 2,
    "subType": "seasons",
    "month": "November",
    "monthJa": "霜月 (Shimotsuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "November (Autumn)",
    "sectionJa": "霜月 (Shimotsuki)・秋",
    "title": "November Plate 2",
    "titleJa": "霜月 (Shimotsuki) 第2図",
    "note": "First frost on fallen leaves, tea ceremony earth, and quiet slate",
    "colors": [
      "cameo-pink",
      "grayish-lavender-1",
      "lilac",
      "dusky-madder-violet"
    ]
  },
  {
    "id": "v2-63",
    "number": 63,
    "volume": 2,
    "subType": "seasons",
    "month": "November",
    "monthJa": "霜月 (Shimotsuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "November (Autumn)",
    "sectionJa": "霜月 (Shimotsuki)・秋",
    "title": "November Plate 3",
    "titleJa": "霜月 (Shimotsuki) 第3図",
    "note": "First frost on fallen leaves, tea ceremony earth, and quiet slate",
    "colors": [
      "pomegranite-purple",
      "sulphur-yellow",
      "glaucous-green",
      "pale-king's-blue-2",
      "slate-color"
    ]
  },
  {
    "id": "v2-64",
    "number": 64,
    "volume": 2,
    "subType": "seasons",
    "month": "November",
    "monthJa": "霜月 (Shimotsuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "November (Autumn)",
    "sectionJa": "霜月 (Shimotsuki)・秋",
    "title": "November Plate 4",
    "titleJa": "霜月 (Shimotsuki) 第4図",
    "note": "First frost on fallen leaves, tea ceremony earth, and quiet slate",
    "colors": [
      "red-orange",
      "ivory-buff",
      "dark-medici-blue",
      "black"
    ]
  },
  {
    "id": "v2-65",
    "number": 65,
    "volume": 2,
    "subType": "seasons",
    "month": "November",
    "monthJa": "霜月 (Shimotsuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "November (Autumn)",
    "sectionJa": "霜月 (Shimotsuki)・秋",
    "title": "November Plate 5",
    "titleJa": "霜月 (Shimotsuki) 第5図",
    "note": "First frost on fallen leaves, tea ceremony earth, and quiet slate",
    "colors": [
      "etruscan-red",
      "dull-viridian-green",
      "lincoln-green"
    ]
  },
  {
    "id": "v2-66",
    "number": 66,
    "volume": 2,
    "subType": "seasons",
    "month": "November",
    "monthJa": "霜月 (Shimotsuki)",
    "season": "Autumn",
    "seasonJa": "秋",
    "section": "November (Autumn)",
    "sectionJa": "霜月 (Shimotsuki)・秋",
    "title": "November Plate 6",
    "titleJa": "霜月 (Shimotsuki) 第6図",
    "note": "First frost on fallen leaves, tea ceremony earth, and quiet slate",
    "colors": [
      "corinthian-pink",
      "spectrum-red",
      "pale-lemon-yellow",
      "pinkish-cinnamon",
      "yellow"
    ]
  },
  {
    "id": "v2-67",
    "number": 67,
    "volume": 2,
    "subType": "seasons",
    "month": "December",
    "monthJa": "師走 (Shiwasu)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "December (Winter)",
    "sectionJa": "師走 (Shiwasu)・冬",
    "title": "December Plate 1",
    "titleJa": "師走 (Shiwasu) 第1図",
    "note": "Winter solstice camellias, snow-laden pine, and deep charcoal ink",
    "colors": [
      "yellow-ocher",
      "orange-rufous",
      "artemesia-green",
      "dull-violet-black"
    ]
  },
  {
    "id": "v2-68",
    "number": 68,
    "volume": 2,
    "subType": "seasons",
    "month": "December",
    "monthJa": "師走 (Shiwasu)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "December (Winter)",
    "sectionJa": "師走 (Shiwasu)・冬",
    "title": "December Plate 2",
    "titleJa": "師走 (Shiwasu) 第2図",
    "note": "Winter solstice camellias, snow-laden pine, and deep charcoal ink",
    "colors": [
      "indian-lake",
      "sulphur-yellow",
      "olive-ocher",
      "dark-greenish-glaucous",
      "vander-poel's-blue"
    ]
  },
  {
    "id": "v2-69",
    "number": 69,
    "volume": 2,
    "subType": "seasons",
    "month": "December",
    "monthJa": "師走 (Shiwasu)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "December (Winter)",
    "sectionJa": "師走 (Shiwasu)・冬",
    "title": "December Plate 3",
    "titleJa": "師走 (Shiwasu) 第3図",
    "note": "Winter solstice camellias, snow-laden pine, and deep charcoal ink",
    "colors": [
      "jasper-red",
      "pale-king's-blue-1",
      "black"
    ]
  },
  {
    "id": "v2-70",
    "number": 70,
    "volume": 2,
    "subType": "seasons",
    "month": "December",
    "monthJa": "師走 (Shiwasu)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "December (Winter)",
    "sectionJa": "師走 (Shiwasu)・冬",
    "title": "December Plate 4",
    "titleJa": "師走 (Shiwasu) 第4図",
    "note": "Winter solstice camellias, snow-laden pine, and deep charcoal ink",
    "colors": [
      "sulphine-yellow",
      "pale-turtle-green",
      "cossack-green",
      "dull-violet-black"
    ]
  },
  {
    "id": "v2-71",
    "number": 71,
    "volume": 2,
    "subType": "seasons",
    "month": "December",
    "monthJa": "師走 (Shiwasu)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "December (Winter)",
    "sectionJa": "師走 (Shiwasu)・冬",
    "title": "December Plate 5",
    "titleJa": "師走 (Shiwasu) 第5図",
    "note": "Winter solstice camellias, snow-laden pine, and deep charcoal ink",
    "colors": [
      "fawn",
      "sudan-brown",
      "pale-king's-blue-2",
      "mineral-gray",
      "slate-color"
    ]
  },
  {
    "id": "v2-72",
    "number": 72,
    "volume": 2,
    "subType": "seasons",
    "month": "December",
    "monthJa": "師走 (Shiwasu)",
    "season": "Winter",
    "seasonJa": "冬",
    "section": "December (Winter)",
    "sectionJa": "師走 (Shiwasu)・冬",
    "title": "December Plate 6",
    "titleJa": "師走 (Shiwasu) 第6図",
    "note": "Winter solstice camellias, snow-laden pine, and deep charcoal ink",
    "colors": [
      "jasper-red",
      "pale-lemon-yellow",
      "sepia",
      "salvia-blue",
      "neutral-gray"
    ]
  },
  {
    "id": "v2-73",
    "number": 73,
    "volume": 2,
    "subType": "applied",
    "category": "Kimono",
    "categoryJa": "着物 (Kimono)",
    "section": "Kimono",
    "sectionJa": "着物 (Kimono)",
    "title": "Cerulean & Naples Silk Kimono",
    "titleJa": "露草と藤黄の晴着",
    "note": "Six-color formal kimono harmony balancing cool cerulean and chromium green with warm Naples yellow and orange.",
    "colors": [
      "cerulean-blue",
      "chromium-green",
      "white",
      "naples-yellow",
      "vistoris-lake",
      "orange"
    ]
  },
  {
    "id": "v2-74",
    "number": 74,
    "volume": 2,
    "subType": "applied",
    "category": "Kimono",
    "categoryJa": "着物 (Kimono)",
    "section": "Kimono",
    "sectionJa": "着物 (Kimono)",
    "title": "Jasper & Cinnamon Autumn Robe",
    "titleJa": "赤丹と肉桂の秋衣",
    "note": "Four-color seasonal kimono motif pairing verdant green against warm jasper red and cinnamon.",
    "colors": [
      "green",
      "jasper-red",
      "vinaceous-cinnamon",
      "orange-yellow"
    ]
  },
  {
    "id": "v2-75",
    "number": 75,
    "volume": 2,
    "subType": "applied",
    "category": "Kimono",
    "categoryJa": "着物 (Kimono)",
    "section": "Kimono",
    "sectionJa": "着物 (Kimono)",
    "title": "Wisteria & Deep Indigo Furisode",
    "titleJa": "藤紫と濃藍の振袖",
    "note": "Courtly contrast of soft wisteria lavender, cherry blossom pink, and deep midnight indigo.",
    "colors": [
      "grayish-lavender-1",
      "hermosa-pink",
      "deep-indigo",
      "golden-yellow",
      "white"
    ]
  },
  {
    "id": "v2-76",
    "number": 76,
    "volume": 2,
    "subType": "applied",
    "category": "Kimono",
    "categoryJa": "着物 (Kimono)",
    "section": "Kimono",
    "sectionJa": "着物 (Kimono)",
    "title": "Uguisu & Persimmon訪問着 (Homongi)",
    "titleJa": "鶯茶と柿色の訪問着",
    "note": "Refined tea-ceremony kimono palette of bush-warbler olive, ripe persimmon, and unbleached silk.",
    "colors": [
      "citrine",
      "orange-rufous",
      "ivory-buff",
      "deep-slate-olive"
    ]
  },
  {
    "id": "v2-77",
    "number": 77,
    "volume": 2,
    "subType": "applied",
    "category": "Clothes & Accessories",
    "categoryJa": "衣服・装身具 (Clothes & Accessories)",
    "section": "Clothes & Accessories",
    "sectionJa": "衣服・装身具 (Clothes & Accessories)",
    "title": "Antwerp Blue & Spectrum Modern Dress",
    "titleJa": "藍鉄と紅緋のモダン装束",
    "note": "Six-color Shōwa modernist fashion ensemble with crisp graphic contrast.",
    "colors": [
      "antwarp-blue",
      "light-green",
      "hermosa-pink",
      "spectrum-red",
      "white",
      "black"
    ]
  },
  {
    "id": "v2-78",
    "number": 78,
    "volume": 2,
    "subType": "applied",
    "category": "Clothes & Accessories",
    "categoryJa": "衣服・装身具 (Clothes & Accessories)",
    "section": "Clothes & Accessories",
    "sectionJa": "衣服・装身具 (Clothes & Accessories)",
    "title": "Cerulean, Sulphur & Spinel Ensemble",
    "titleJa": "露草・硫黄・撫子の三色装身具",
    "note": "Vibrant three-color accessory palette from Volume 2 pairing cool cerulean with soft sulfur yellow and spinel pink.",
    "colors": [
      "cerulean-blue",
      "sulphur-yellow",
      "spinel-red"
    ]
  },
  {
    "id": "v2-79",
    "number": 79,
    "volume": 2,
    "subType": "applied",
    "category": "Clothes & Accessories",
    "categoryJa": "衣服・装身具 (Clothes & Accessories)",
    "section": "Clothes & Accessories",
    "sectionJa": "衣服・装身具 (Clothes & Accessories)",
    "title": "Dusky Green & Cameo Evening Shawl",
    "titleJa": "鉄御納戸と薄紅梅の肩掛",
    "note": "Rich dark teal-green grounded by warm taupe and delicate cameo pink.",
    "colors": [
      "dusky-green",
      "cameo-pink",
      "light-brown-drab",
      "ivory-buff"
    ]
  },
  {
    "id": "v2-80",
    "number": 80,
    "volume": 2,
    "subType": "applied",
    "category": "Clothes & Accessories",
    "categoryJa": "衣服・装身具 (Clothes & Accessories)",
    "section": "Clothes & Accessories",
    "sectionJa": "衣服・装身具 (Clothes & Accessories)",
    "title": "Kachi Indigo & Clove Parasol",
    "titleJa": "褐色と丁子色の日傘",
    "note": "Early 20th-century promenade accessory harmony combining dark indigo with clove cinnamon and sky blue.",
    "colors": [
      "vander-poel's-blue",
      "pinkish-cinnamon",
      "calamine-blue",
      "ivory-buff"
    ]
  },
  {
    "id": "v2-81",
    "number": 81,
    "volume": 2,
    "subType": "applied",
    "category": "Tapestry & Carpets",
    "categoryJa": "室内装飾・敷物 (Tapestry & Carpets)",
    "section": "Tapestry & Carpets",
    "sectionJa": "室内装飾・敷物 (Tapestry & Carpets)",
    "title": "Russet, Umber & King’s Blue Weave",
    "titleJa": "小豆と水色の綴織敷物",
    "note": "Six-color woven tapestry design anchoring warm russet and raw umber with luminous pale blue.",
    "colors": [
      "hay's-russet",
      "pale-raw-umber",
      "yellow-orange",
      "laelia-pink",
      "etruscan-red",
      "pale-king's-blue-2"
    ]
  },
  {
    "id": "v2-82",
    "number": 82,
    "volume": 2,
    "subType": "applied",
    "category": "Tapestry & Carpets",
    "categoryJa": "室内装飾・敷物 (Tapestry & Carpets)",
    "section": "Tapestry & Carpets",
    "sectionJa": "室内装飾・敷物 (Tapestry & Carpets)",
    "title": "Celadon & Madder Salon Carpet",
    "titleJa": "青磁と栗梅の絨毯",
    "note": "Architectural textile harmony balancing celadon glaucous green with deep chestnut madder and ochre.",
    "colors": [
      "glaucous-green",
      "madder-brown",
      "yellow-ocher",
      "ecru",
      "slate-color"
    ]
  },
  {
    "id": "v2-83",
    "number": 83,
    "volume": 2,
    "subType": "applied",
    "category": "Tapestry & Carpets",
    "categoryJa": "室内装飾・敷物 (Tapestry & Carpets)",
    "section": "Tapestry & Carpets",
    "sectionJa": "室内装飾・敷物 (Tapestry & Carpets)",
    "title": "Peacock Blue & Mulberry Wall Hanging",
    "titleJa": "孔雀青と桑染の壁掛",
    "note": "Richly saturated interior drapery pairing peacock blue and mulberry taupe with deep plum.",
    "colors": [
      "peacock-blue",
      "isabella-color",
      "cotinga-purple",
      "cream-yellow"
    ]
  },
  {
    "id": "v2-84",
    "number": 84,
    "volume": 2,
    "subType": "applied",
    "category": "Earthenware & Lacquerware",
    "categoryJa": "陶磁器・漆器 (Earthenware & Lacquerware)",
    "section": "Earthenware & Lacquerware",
    "sectionJa": "陶磁器・漆器 (Earthenware & Lacquerware)",
    "title": "Pomegranate & Apricot Lacquer Vessel",
    "titleJa": "石榴と支子の漆器",
    "note": "Bold three-color lacquerware and ceramic glaze study in pomegranate crimson, chalk white, and apricot gold.",
    "colors": [
      "pomegranite-purple",
      "white",
      "apricot-yellow"
    ]
  },
  {
    "id": "v2-85",
    "number": 85,
    "volume": 2,
    "subType": "applied",
    "category": "Earthenware & Lacquerware",
    "categoryJa": "陶磁器・漆器 (Earthenware & Lacquerware)",
    "section": "Earthenware & Lacquerware",
    "sectionJa": "陶磁器・漆器 (Earthenware & Lacquerware)",
    "title": "Cinnabar, Sumi & Gold Maki-e Bowl",
    "titleJa": "朱と墨の蒔絵椀",
    "note": "Classic Wajima and Kyoto lacquerware harmony of cinnabar red-orange, pine-soot black, and golden ochre.",
    "colors": [
      "red-orange",
      "black",
      "golden-yellow",
      "ivory-buff"
    ]
  },
  {
    "id": "v2-86",
    "number": 86,
    "volume": 2,
    "subType": "applied",
    "category": "Earthenware & Lacquerware",
    "categoryJa": "陶磁器・漆器 (Earthenware & Lacquerware)",
    "section": "Earthenware & Lacquerware",
    "sectionJa": "陶磁器・漆器 (Earthenware & Lacquerware)",
    "title": "Oribe & Celadon Ceramic Glaze",
    "titleJa": "織部と青磁の陶器釉",
    "note": "Traditional kiln glaze palette uniting deep porcelain green, terracotta ochre, and mineral grey.",
    "colors": [
      "light-porcelain-green",
      "ocher-red",
      "mineral-gray",
      "sea-foam-yellow"
    ]
  },
  {
    "id": "v2-87",
    "number": 87,
    "volume": 2,
    "subType": "applied",
    "category": "Book, Poster & Wrapping Paper",
    "categoryJa": "装幀・ポスター・包装紙 (Book, Poster & Wrapping)",
    "section": "Book, Poster & Wrapping Paper",
    "sectionJa": "装幀・ポスター・包装紙 (Book, Poster & Wrapping)",
    "title": "Wisteria, White & Cobalt Bookbinding",
    "titleJa": "藤色と若緑の書籍装幀",
    "note": "Clean three-color editorial book cover and wrapping paper design from Volume 2.",
    "colors": [
      "grayish-lavender-1",
      "white",
      "cobalt-green"
    ]
  },
  {
    "id": "v2-88",
    "number": 88,
    "volume": 2,
    "subType": "applied",
    "category": "Book, Poster & Wrapping Paper",
    "categoryJa": "装幀・ポスター・包装紙 (Book, Poster & Wrapping)",
    "section": "Book, Poster & Wrapping Paper",
    "sectionJa": "装幀・ポスター・包装紙 (Book, Poster & Wrapping)",
    "title": "Shōwa Theatre Poster Lithograph",
    "titleJa": "昭和モダン劇場ポスター",
    "note": "High-impact graphic poster palette combining lapis blue, rapeseed yellow, and carmine red.",
    "colors": [
      "blue",
      "lemon-yellow",
      "carmine-red",
      "ecru",
      "black"
    ]
  },
  {
    "id": "v2-89",
    "number": 89,
    "volume": 2,
    "subType": "applied",
    "category": "Book, Poster & Wrapping Paper",
    "categoryJa": "装幀・ポスター・包装紙 (Book, Poster & Wrapping)",
    "section": "Book, Poster & Wrapping Paper",
    "sectionJa": "装幀・ポスター・包装紙 (Book, Poster & Wrapping)",
    "title": "Kyoto Chiyogami Gift Wrap",
    "titleJa": "京千代紙の包装意匠",
    "note": "Delicate woodblock wrapping paper harmony of coral red, shallow-water turquoise, and eggshell cream.",
    "colors": [
      "coral-red",
      "sea-green",
      "ivory-buff",
      "violet-blue"
    ]
  },
  {
    "id": "v2-90",
    "number": 90,
    "volume": 2,
    "subType": "applied",
    "category": "Applied Arts & Others",
    "categoryJa": "工芸・その他 (Applied Arts & Others)",
    "section": "Applied Arts & Others",
    "sectionJa": "工芸・その他 (Applied Arts & Others)",
    "title": "Olympic Blue, Tobacco & Pomegranate Study",
    "titleJa": "縹色・煙草・石榴の工芸配色",
    "note": "Six-color applied design synthesis from the closing plates of Volume 2.",
    "colors": [
      "golden-yellow",
      "pomegranite-purple",
      "black",
      "white",
      "olympic-blue",
      "mars-brown-tobacco"
    ]
  }
];

export const ALL_COMBINATIONS: WadaCombination[] = [
  ...VOL1_COMBINATIONS,
  ...VOL2_COMBINATIONS,
];

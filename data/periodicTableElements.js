const elements = [
  { idx: 0, number: 1, symbol: "H", name: "Hidrógeno", group: "noMetales" },
  { idx: 1, number: 3, symbol: "Li", name: "Litio", group: "alcalinos" },
  { idx: 2, number: 11, symbol: "Na", name: "Sodio", group: "alcalinos" },
  { idx: 3, number: 19, symbol: "K", name: "Potasio", group: "alcalinos" },
  { idx: 4, number: 37, symbol: "Rb", name: "Rubidio", group: "alcalinos" },
  { idx: 5, number: 55, symbol: "Cs", name: "Cesio", group: "alcalinos" },
  { idx: 6, number: 87, symbol: "Fr", name: "Francio", group: "alcalinos" },
  {
    idx: 7,
    number: 4,
    symbol: "Be",
    name: "Berilio",
    group: "alcalinoterreos",
  },
  {
    idx: 8,
    number: 12,
    symbol: "Mg",
    name: "Magnesio",
    group: "alcalinoterreos",
  },
  {
    idx: 9,
    number: 20,
    symbol: "Ca",
    name: "Calcio",
    group: "alcalinoterreos",
  },
  {
    idx: 10,
    number: 38,
    symbol: "Sr",
    name: "Estroncio",
    group: "alcalinoterreos",
  },
  {
    idx: 11,
    number: 56,
    symbol: "Ba",
    name: "Bario",
    group: "alcalinoterreos",
  },
  {
    idx: 12,
    number: 88,
    symbol: "Ra",
    name: "Radio",
    group: "alcalinoterreos",
  },
  {
    idx: 13,
    number: 21,
    symbol: "Sc",
    name: "Escandio",
    group: "metalesTransicion",
  },
  {
    idx: 14,
    number: 39,
    symbol: "Y",
    name: "Itrio",
    group: "metalesTransicion",
  },
  {
    idx: 15,
    number: "57-71",
    symbol: "La-Lu",
    name: "Lantánidos",
    group: "lantanidos",
  },
  {
    idx: 16,
    number: "89-103",
    symbol: "Ac-Lr",
    name: "Actínidos",
    group: "actinidos",
  },
  {
    idx: 17,
    number: 22,
    symbol: "Ti",
    name: "Titanio",
    group: "metalesTransicion",
  },
  {
    idx: 18,
    number: 40,
    symbol: "Zr",
    name: "Circonio",
    group: "metalesTransicion",
  },
  {
    idx: 19,
    number: 72,
    symbol: "Hf",
    name: "Hafnio",
    group: "metalesTransicion",
  },
  {
    idx: 20,
    number: 104,
    symbol: "Rf",
    name: "Rutherfordio",
    group: "metalesTransicion",
  },
  {
    idx: 21,
    number: 23,
    symbol: "V",
    name: "Vanadio",
    group: "metalesTransicion",
  },
  {
    idx: 22,
    number: 41,
    symbol: "Nb",
    name: "Niobio",
    group: "metalesTransicion",
  },
  {
    idx: 23,
    number: 73,
    symbol: "Ta",
    name: "Tántalo",
    group: "metalesTransicion",
  },
  {
    idx: 24,
    number: 105,
    symbol: "Db",
    name: "Dubnio",
    group: "metalesTransicion",
  },
  {
    idx: 25,
    number: 24,
    symbol: "Cr",
    name: "Cromo",
    group: "metalesTransicion",
  },
  {
    idx: 26,
    number: 42,
    symbol: "Mo",
    name: "Molibdeno",
    group: "metalesTransicion",
  },
  {
    idx: 27,
    number: 74,
    symbol: "W",
    name: "Wolframio",
    group: "metalesTransicion",
  },
  {
    idx: 28,
    number: 106,
    symbol: "Sg",
    name: "Seaborgio",
    group: "metalesTransicion",
  },
  {
    idx: 29,
    number: 25,
    symbol: "Mn",
    name: "Manganeso",
    group: "metalesTransicion",
  },
  {
    idx: 30,
    number: 43,
    symbol: "Tc",
    name: "Tecnesio",
    group: "metalesTransicion",
  },
  {
    idx: 31,
    number: 75,
    symbol: "Re",
    name: "Renio",
    group: "metalesTransicion",
  },
  {
    idx: 32,
    number: 107,
    symbol: "Bh",
    name: "Bohrio",
    group: "metalesTransicion",
  },
  {
    idx: 33,
    number: 26,
    symbol: "Fe",
    name: "Hierro",
    group: "metalesTransicion",
  },
  {
    idx: 34,
    number: 44,
    symbol: "Ru",
    name: "Rutenio",
    group: "metalesTransicion",
  },
  {
    idx: 35,
    number: 76,
    symbol: "Os",
    name: "Osmio",
    group: "metalesTransicion",
  },
  {
    idx: 36,
    number: 108,
    symbol: "Hs",
    name: "Hasio",
    group: "metalesTransicion",
  },
  {
    idx: 37,
    number: 27,
    symbol: "Co",
    name: "Cobalto",
    group: "metalesTransicion",
  },
  {
    idx: 38,
    number: 45,
    symbol: "rh",
    name: "Rodio",
    group: "metalesTransicion",
  },
  {
    idx: 39,
    number: 77,
    symbol: "Ir",
    name: "Iridio",
    group: "metalesTransicion",
  },
  {
    idx: 40,
    number: 109,
    symbol: "Mt",
    name: "Meltnerio",
    group: "metalesTransicion",
  },
  {
    idx: 41,
    number: 28,
    symbol: "Ni",
    name: "Niquel",
    group: "metalesTransicion",
  },
  {
    idx: 42,
    number: 46,
    symbol: "Pd",
    name: "Paladio",
    group: "metalesTransicion",
  },
  {
    idx: 43,
    number: 78,
    symbol: "Pt",
    name: "Platino",
    group: "metalesTransicion",
  },
  {
    idx: 44,
    number: 110,
    symbol: "Ds",
    name: "darmstadtio",
    group: "metalesTransicion",
  },
  {
    idx: 45,
    number: 29,
    symbol: "Cu",
    name: "Cobre",
    group: "metalesTransicion",
  },
  {
    idx: 46,
    number: 47,
    symbol: "Ag",
    name: "Plata",
    group: "metalesTransicion",
  },
  {
    idx: 47,
    number: 79,
    symbol: "Au",
    name: "Oro",
    group: "metalesTransicion",
  },
  {
    idx: 48,
    number: 111,
    symbol: "Rg",
    name: "Roentgenio",
    group: "metalesTransicion",
  },
  {
    idx: 49,
    number: 30,
    symbol: "Zn",
    name: "Zinc",
    group: "metalesTransicion",
  },
  {
    idx: 50,
    number: 48,
    symbol: "Cd",
    name: "Cadmio",
    group: "metalesTransicion",
  },
  {
    idx: 51,
    number: 80,
    symbol: "Hg",
    name: "Mercurio",
    group: "metalesTransicion",
  },
  {
    idx: 52,
    number: 112,
    symbol: "Cn",
    name: "Copemicio",
    group: "metalesTransicion",
  },
  { idx: 53, number: 5, symbol: "B", name: "Boro", group: "metaloides" },
  { idx: 54, number: 13, symbol: "Al", name: "Aluminio", group: "metales" },
  { idx: 55, number: 31, symbol: "Ga", name: "Galio", group: "metales" },
  { idx: 56, number: 49, symbol: "In", name: "Indio", group: "metales" },
  { idx: 57, number: 81, symbol: "Tl", name: "Talio", group: "metales" },
  { idx: 58, number: 113, symbol: "Nh", name: "Nihonio", group: "metales" },
  { idx: 59, number: 6, symbol: "C", name: "Carbono", group: "noMetales" },
  { idx: 60, number: 14, symbol: "Si", name: "Silicio", group: "metaloides" },
  { idx: 61, number: 32, symbol: "Ge", name: "Germanio", group: "metaloides" },
  { idx: 62, number: 50, symbol: "Sn", name: "Estaño", group: "metales" },
  { idx: 63, number: 82, symbol: "Pb", name: "Plomo", group: "metales" },
  { idx: 64, number: 114, symbol: "Fl", name: "Flerovio", group: "metales" },
  { idx: 65, number: 7, symbol: "N", name: "Nitrógeno", group: "noMetales" },
  { idx: 66, number: 15, symbol: "P", name: "Fósforo", group: "noMetales" },
  { idx: 67, number: 33, symbol: "As", name: "Arsénico", group: "metaloides" },
  { idx: 68, number: 51, symbol: "Sb", name: "Antimonio", group: "metaloides" },
  { idx: 69, number: 83, symbol: "Bi", name: "Bismuto", group: "metales" },
  { idx: 70, number: 115, symbol: "Mc", name: "Moscovio", group: "metales" },
  { idx: 71, number: 8, symbol: "O", name: "Oxigeno", group: "noMetales" },
  { idx: 72, number: 16, symbol: "S", name: "Azufre", group: "noMetales" },
  { idx: 73, number: 34, symbol: "Se", name: "Selenio", group: "noMetales" },
  { idx: 74, number: 52, symbol: "Te", name: "Telurio", group: "metaloides" },
  { idx: 75, number: 84, symbol: "Po", name: "Polonio", group: "metaloides" },
  { idx: 76, number: 116, symbol: "Lv", name: "Livermorio", group: "metales" },
  { idx: 77, number: 9, symbol: "F", name: "Flúor", group: "halogenos" },
  { idx: 78, number: 17, symbol: "Cl", name: "Cloro", group: "halogenos" },
  { idx: 79, number: 35, symbol: "Br", name: "Bromo", group: "halogenos" },
  { idx: 80, number: 53, symbol: "I", name: "Yodo", group: "halogenos" },
  { idx: 81, number: 85, symbol: "At", name: "Astato", group: "halogenos" },
  { idx: 82, number: 117, symbol: "Ts", name: "Teneso", group: "halogenos" },
  { idx: 83, number: 2, symbol: "He", name: "Helio", group: "gasesNobles" },
  { idx: 84, number: 10, symbol: "Ne", name: "Neón", group: "gasesNobles" },
  { idx: 85, number: 18, symbol: "Ar", name: "Argón", group: "gasesNobles" },
  { idx: 86, number: 36, symbol: "Kr", name: "Kriptón", group: "gasesNobles" },
  { idx: 87, number: 54, symbol: "Xe", name: "Xenón", group: "gasesNobles" },
  { idx: 88, number: 86, symbol: "Rn", name: "Radón", group: "gasesNobles" },
  {
    idx: 89,
    number: 118,
    symbol: "Og",
    name: "Oganesón",
    group: "gasesNobles",
  },
  { idx: 90, number: 57, symbol: "La", name: "Lantano", group: "lantanidos" },
  { idx: 91, number: 58, symbol: "Ce", name: "Cerlio", group: "lantanidos" },
  {
    idx: 92,
    number: 59,
    symbol: "Pr",
    name: "Praseodirmio",
    group: "lantanidos",
  },
  { idx: 93, number: 60, symbol: "Nd", name: "Neodimio", group: "lantanidos" },
  { idx: 94, number: 61, symbol: "Pm", name: "Prometio", group: "lantanidos" },
  { idx: 95, number: 62, symbol: "Sm", name: "Samerio", group: "lantanidos" },
  { idx: 96, number: 63, symbol: "Eu", name: "Europio", group: "lantanidos" },
  { idx: 97, number: 64, symbol: "Gd", name: "Gadolinio", group: "lantanidos" },
  { idx: 98, number: 65, symbol: "Tb", name: "Terbio", group: "lantanidos" },
  { idx: 99, number: 66, symbol: "Dy", name: "Disprosio", group: "lantanidos" },
  { idx: 100, number: 67, symbol: "Ho", name: "Holmio", group: "lantanidos" },
  { idx: 101, number: 68, symbol: "Er", name: "Erbio", group: "lantanidos" },
  { idx: 102, number: 69, symbol: "Tm", name: "Tulio", group: "lantanidos" },
  { idx: 103, number: 70, symbol: "Yb", name: "Iberbio", group: "lantanidos" },
  { idx: 104, number: 71, symbol: "Lu", name: "Lutecio", group: "lantanidos" },
  { idx: 105, number: 89, symbol: "Ac", name: "Actinio", group: "actinidos" },
  { idx: 106, number: 90, symbol: "Th", name: "Torio", group: "actinidos" },
  {
    idx: 107,
    number: 91,
    symbol: "Pa",
    name: "Protactinio",
    group: "actinidos",
  },
  { idx: 108, number: 92, symbol: "U", name: "Uranio", group: "actinidos" },
  { idx: 109, number: 93, symbol: "Np", name: "Neptunio", group: "actinidos" },
  { idx: 110, number: 94, symbol: "Pu", name: "Plutonio", group: "actinidos" },
  { idx: 111, number: 95, symbol: "Am", name: "Americio", group: "actinidos" },
  { idx: 112, number: 96, symbol: "Cm", name: "Curio", group: "actinidos" },
  { idx: 113, number: 97, symbol: "Bk", name: "Berkelio", group: "actinidos" },
  { idx: 114, number: 98, symbol: "Cf", name: "Calfornio", group: "actinidos" },
  { idx: 115, number: 99, symbol: "Es", name: "Einstenio", group: "actinidos" },
  { idx: 116, number: 100, symbol: "Fm", name: "Fermio", group: "actinidos" },
  {
    idx: 117,
    number: 101,
    symbol: "Md",
    name: "Mendelevio",
    group: "actinidos",
  },
  {
    idx: 118,
    number: 102,
    symbol: "No",
    name: "Nobelio",
    group: "actinidos",
  },
  {
    idx: 119,
    number: 103,
    symbol: "Lr",
    name: "Lawrencio",
    group: "actinidos",
  },
];

module.exports = elements;
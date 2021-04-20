const cidades = [
  {
    cidade: 'Arad',
    distanciaDiretaBucharest: 366,
    conexoes: [
      { cidade: 'Zerind', distancia: 75 },
      { cidade: 'Timisoara', distancia: 118 },
      { cidade: 'Sibiu', distancia: 140 },
    ],
  },
  {
    cidade: 'Zerind',
    distanciaDiretaBucharest: 374,
    conexoes: [{ cidade: 'Oradea', distancia: 71 }],
  },
  {
    cidade: 'Timisoara',
    distanciaDiretaBucharest: 329,
    conexoes: [{ cidade: 'Lugoj', distancia: 111 }],
  },
  {
    cidade: 'Sibiu',
    distanciaDiretaBucharest: 253,
    conexoes: [
      { cidade: 'Fagaras', distancia: 99 },
      { cidade: 'Rimnicu Vilcea', distancia: 80 },
    ],
  },
  {
    cidade: 'Oradea',
    distanciaDiretaBucharest: 380,
    conexoes: [{ cidade: 'Sibiu', distancia: 151 }],
  },
  {
    cidade: 'Fagaras',
    distanciaDiretaBucharest: 178,
    conexoes: [{ cidade: 'Bucharest', distancia: 211 }],
  },
  {
    cidade: 'Rimnicu Vilcea',
    distanciaDiretaBucharest: 193,
    conexoes: [{ cidade: 'Pitesti', distancia: 97 }],
  },
  {
    cidade: 'Lugoj',
    distanciaDiretaBucharest: 244,
    conexoes: [{ cidade: 'Mehadia', distancia: 70 }],
  },
  {
    cidade: 'Mehadia',
    distanciaDiretaBucharest: 241,
    conexoes: [{ cidade: 'Dobreta', distancia: 75 }],
  },
  {
    cidade: 'Dobreta',
    distanciaDiretaBucharest: 242,
    conexoes: [{ cidade: 'Craiova', distancia: 120 }],
  },
  {
    cidade: 'Craiova',
    distanciaDiretaBucharest: 160,
    conexoes: [{ cidade: 'Pitesti', distancia: 138 }],
  },
  {
    cidade: 'Pitesti',
    distanciaDiretaBucharest: 98,
    conexoes: [{ cidade: 'Bucharest', distancia: 101 }],
  },
  {
    cidade: 'Bucharest',
    distanciaDiretaBucharest: 0,
    conexoes: [],
  },
];

export default cidades;

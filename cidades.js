const cidades = {
  Arad: {
    distanciaDiretaBucharest: 366,
    conexoes: [
      { cidade: 'Zerind', distancia: 75 },
      { cidade: 'Timisoara', distancia: 118 },
      { cidade: 'Sibiu', distancia: 140 },
    ],
  },
  Zerind: {
    distanciaDiretaBucharest: 374,
    conexoes: [{ cidade: 'Oradea', distancia: 71 }],
  },
  Timisoara: {
    distanciaDiretaBucharest: 329,
    conexoes: [{ cidade: 'Lugoj', distancia: 111 }],
  },
  Sibiu: {
    distanciaDiretaBucharest: 253,
    conexoes: [
      { cidade: 'Fagaras', distancia: 99 },
      { cidade: 'Rimnicu Vilcea', distancia: 80 },
    ],
  },
  Oradea: {
    distanciaDiretaBucharest: 380,
    conexoes: [{ cidade: 'Sibiu', distancia: 151 }],
  },
  Fagaras: {
    distanciaDiretaBucharest: 178,
    conexoes: [{ cidade: 'Bucharest', distancia: 211 }],
  },
  'Rimnicu Vilcea': {
    distanciaDiretaBucharest: 193,
    conexoes: [{ cidade: 'Pitesti', distancia: 97 }],
  },
  Lugoj: {
    distanciaDiretaBucharest: 244,
    conexoes: [{ cidade: 'Mehadia', distancia: 70 }],
  },
  Mehadia: {
    distanciaDiretaBucharest: 241,
    conexoes: [{ cidade: 'Dobreta', distancia: 75 }],
  },
  Dobreta: {
    distanciaDiretaBucharest: 242,
    conexoes: [{ cidade: 'Craiova', distancia: 120 }],
  },
  Craiova: {
    distanciaDiretaBucharest: 160,
    conexoes: [{ cidade: 'Pitesti', distancia: 138 }],
  },
  Pitesti: {
    distanciaDiretaBucharest: 98,
    conexoes: [{ cidade: 'Bucharest', distancia: 101 }],
  },
};

export default cidades;

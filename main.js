import readline from 'readline';
import cidades from './src/busca-heuristica/constants/cidades.js';
import buscaHeuristica from './src/busca-heuristica/service/busca-heuristica.js';

console.log('Sera utilizado como modelo de dados as cidades da Romenia');
console.log('A busca partirá de Arad e o destino é Bucharest');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  'Deseja utilizar busca heuristica ou gulosa? [H] heuristica [G] Gulosa \n',
  function (metodo) {
    if (metodo !== 'H' && metodo !== 'G') {
      console.log('Metodo %s informado incorreto.', metodo);
      rl.close();
      return;
    }

    if (metodo === 'H') {
      const { visitadas, custoTotal } = buscaHeuristica(
        cidades,
        'Arad',
        'Bucharest'
      );
      console.log('cidades visitadas: ');
      visitadas.map((c) => console.log(c.cidade));
      console.log('custoTotal: ', custoTotal);
      rl.close();
      return;
    }

    if (metodo === 'G') {
      const { visitadas, custoTotal } = buscaHeuristica(
        cidades,
        'Arad',
        'Bucharest',
        true
      );
      console.log('cidades visitadas: ');
      visitadas.map((c) => console.log(c.cidade));
      console.log('custoTotal: ', custoTotal);
      rl.close();
      return;
    }
  }
);

rl.on('close', function () {
  console.log('\nAte logo !!!');
  process.exit(0);
});

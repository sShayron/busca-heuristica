// metodo que busca objeto da cidade por nome
const encontraCidade = (cidades, nomeCidade) =>
  cidades.find((x) => x.cidade === nomeCidade);

const buscaHeuristica = (cidades, origem, destino, gulosa = false) => {
  // inicializa array com cidades visitadas
  let visitadas = [];

  // inicializa custo total
  let custoTotal = 0;

  // inicializa primeira cidade
  let objCidadeAtual = cidades.find((x) => x.cidade === origem);

  // enquanto destino nao for visitado
  // e cidade atual tiver conexoes
  // executa o bloco
  while (
    !visitadas.some((x) => x.cidade === destino) &&
    objCidadeAtual.conexoes.length
  ) {
    // adiciona cidade atual as visitadas
    visitadas.push(objCidadeAtual);

    // procura proxima cidade com melhor custo
    const proxCidade = objCidadeAtual.conexoes.reduce((acc, conexao) => {
      // encontra objeto da conexao anterior
      const cidadeAcc = acc && encontraCidade(cidades, acc.cidade);
      // calcula custo da conexao anterior
      const custoAcc = cidadeAcc
        ? gulosa
          ? cidadeAcc.distanciaDiretaBucharest
          : acc.distancia + cidadeAcc.distanciaDiretaBucharest
        : 0;
      // encontra objeto da conexao
      const cidadeConexao = encontraCidade(cidades, conexao.cidade);
      // calcula custo da conexao
      const custoConexao = gulosa
        ? cidadeConexao.distanciaDiretaBucharest
        : conexao.distancia + cidadeConexao.distanciaDiretaBucharest;
      // compara custo da conexao anterior com a atual
      // retorna a de custo mais baixo
      return !acc || custoConexao < custoAcc
        ? { ...conexao, custo: custoConexao }
        : { ...acc, custo: custoAcc };
    }, 0);

    // some custo total com custo da proxima cidade
    custoTotal += proxCidade.distancia;

    // encontra objeto da proxima cidade
    const objProximaCidade = encontraCidade(cidades, proxCidade.cidade);

    // Se a proxima cidade for destino adiciona as visitadas
    if (objProximaCidade.cidade === destino) {
      visitadas.push(objProximaCidade);
    }

    // cidade atual passa a ser a proxima cidade com melhor custo
    objCidadeAtual = objProximaCidade;
  }

  return { visitadas, custoTotal };
};

export default buscaHeuristica;

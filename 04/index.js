// node 04/index.js para executar

const data = [
  {
    estado: "SP",
    faturamento: 67836.43,
  },
  {
    estado: "RJ",
    faturamento: 36678.66,
  },
  {
    estado: "MG",
    faturamento: 29229.88,
  },
  {
    estado: "ES",
    faturamento: 27165.48,
  },
  {
    estado: "OUTROS",
    faturamento: 19849.53,
  },
];

const calculo = (data) => {
  let valorTotal = 0;
  let resultadoArr = [];
  data.map((obj) => (valorTotal += obj.faturamento));

  data.forEach((obj) => {
    resultadoArr.push({
      estado: obj.estado,
      percentual: (obj.faturamento / valorTotal) * 100,
    })
  })

  return resultadoArr;
};

console.log(calculo(data));

// nao foi especificado para arredondamento de casas decímais,
// então vou deixar aqui o código para se quiser testar
// substituir a linha 34 por: percentual: ((obj.faturamento / valorTotal) * 100).toFixed(2),
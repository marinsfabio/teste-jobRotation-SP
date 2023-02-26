// nas instruções pedia pra usar o json ou xml, como  não encontrei nenhum criei
// um array para representar o mês

// 0  = sabado, distribuidora abre mas não faz entrega
// null =  domingo ou feriado, distribuidora não abre.
// mês usado como referência foi o de fevereiro

// node 03/index.js para executar o app

const mesCompleto = [
  489, 23412, 44, 0, null,  178, 199.34, 92470, 3924, 4234, 0,  null, 20007, 182, 44,
  785, 5783, 0, null, 2000, null, null, null, 199.34, 9.1, 0, null, 2000, 1276
];


const findMinBetter = (arr) => {
  let arrFiltrado = [];
  arr.forEach((dia) => {
    if (dia !== 0 && dia !== null) arrFiltrado.push(dia);
  });
  return Math.min(...arrFiltrado);
};
console.log(`menor valor foi de: ${findMinBetter(mesCompleto)}`)
 

const findMaxBetter = (arr) => {
  let arrFiltrado = [];
  arr.forEach((dia) => {
    if (dia !== 0 && dia !== null) arrFiltrado.push(dia);
  });
  return Math.max(...arrFiltrado);
};
console.log(`maior valor foi de: ${findMaxBetter(mesCompleto)}`)



const melhorMedia = (mesCompleto) => {
  let totalFaturamentoMes = 0;
  let totalDias = mesCompleto.length;
  let counter = 0;

  mesCompleto.forEach((valorDiario) => {
    if (valorDiario === null || valorDiario === 0) {
      totalDias--;
    }
    totalFaturamentoMes += valorDiario;
    let mediaCalculada = totalFaturamentoMes / totalDias;
    if (valorDiario > mediaCalculada) {
      counter++;
    }
  });
  console.log(`total de: ${counter} dias`)
  return counter;
};
melhorMedia(mesCompleto);


const media = (mesCompleto) => {
  let totalFaturamentoMes = 0;
  let totalDias = mesCompleto.length;
  let counter = 0;

  for (i = 0; i < mesCompleto.length; i++) {
    if (mesCompleto[i] === null || mesCompleto[i] === 0) {
      totalDias--;
    }
    totalFaturamentoMes += mesCompleto[i];
  }

  let mediaCalculada = totalFaturamentoMes / totalDias;

  for (i = 0; i < mesCompleto.length; i++) {
    if (mesCompleto[i] > mediaCalculada) {
      counter++;
    }
  }
  return counter;
};
media(mesCompleto);
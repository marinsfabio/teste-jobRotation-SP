// node 05/index.js para executar

const palindrome = (str) => {
  const revertido = [];
  const strArr = str.split("");
  for (i = strArr.length - 1; i >= 0; i--) {
    revertido.push(strArr[i]);
  }
  return revertido;
};

console.log(palindrome("hello world"))
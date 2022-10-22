// o usuario digita um valor (input) e a função tem que retonar o numero de vezes que esse numero é disivisel
// exemplo: 6 -> 6 -> 3 -> 1 é divisivel 3 vezes

const NumeroDeVezesQueÉDivisivel = (input) => {
  let output = 0;

  for (let i = 1; i <= input; i++) {
    if (input % i === 0) output += 1;
  }
  return output;
};

console.log(NumeroDeVezesQueÉDivisivel(10));

// - Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0\.

const countDown = (num) => {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
};
countDown(10);

// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const countUp = (array) => {
  let acc = 0;
  for (let i = 0; i < array.length; i++) {
    acc = acc + array[i];
  }
  console.log("La suma de los elementos del array es " + acc);
};
countUp([1, 2, 3, 4, 5, 6, 7]);

// - Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10\. Para el 4 el resultado debe ser:

const multiplyTable = (num) => {
  for (let i = 0; i <= 10; i++) {
    console.log(`${num} x ${i}: ${num * i}`);
  }
};
multiplyTable(4);

// - Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

const multiplyTableInverse = (num) => {
  for (let i = 10; i >= 0; i--) {
    console.log(`${num} x ${i}: ${num * i}`);
  }
};
multiplyTableInverse(4);

// - Crea una función que reciba el año actual y tu edad, la función debe imprimir:

//   - "naciste en el año X"
//   - "En el año X cumpliste 1 año"
//   - "En el año X cumpliste 2 años"
//   - "En el año X cumpliste 3 años" ....

const ageCalculator = (year, age) => {
  const year0 = year - age;
  console.log("Naciste en el año: " + year0);
  console.log(`En el año ${year0 + 1} cumpliste ${1} año`);
  for (let i = 2; i <= age; i++) {
    console.log(`En el año ${year0 + i} cumpliste ${i} años`);
  }
};
ageCalculator(2024, 26);

// - Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12\.

const evenNumbers = (num1, num2) => {
  for (let i = num1; i <= num2; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};
evenNumbers(2, 12);

// - Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * num);
};
const createRandomArray = () => {
  let array1 = [];
  let array2 = [];
  let arrayRepited = [];
  for (let i = 0; i < 5; i++) {
    array1.push(getRandomNumber(10));
    array2.push(getRandomNumber(10));
    if (array1.includes(array2[i])) {
      arrayRepited.push(array2[i]);
    }
  }

  console.log(array1);
  console.log(array2);
  console.log("Numeros repetidos: " + arrayRepited);
};
createRandomArray();

// - Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo

const isPrimeNumber = (num) => {
  if (num <= 1) return "No es primo";
  if (num === 2) return "Es primo";
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      return "No es primo";
    }
    return "Es primo";
  }
};
console.log(isPrimeNumber(2));

// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato: "Número: 2 \- Cuadrado: 4 \- Cubo: 8". Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)

const exponentArray = (array) => {
  if (array.length === 10) {
    for (let i = 0; i < array.length; i++) {
      console.log(
        `Numero: ${array[i]} Cuadrado: ${Math.pow(
          array[i],
          2
        )} Cubo: ${Math.pow(array[i], 3)}`
      );
    }
  } else {
    console.log("El array debe ser de 10 elementos");
  }
};
exponentArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const getVowels = (word) => {
  const vowels = "aeiouAEIOU";
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word.charAt(i))) {
      result += word[i].toUpperCase();
    } else {
      result += word[i];
    }
  }
  console.log(result);
};
getVowels("diego");

// - Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe ser: a: 3, e: 3, i: 1, o: 1, u: 1

const getVowelsCount = (phrase) => {
  const arrayVowels = [0, 0, 0, 0, 0];
  for (let i = 0; i < phrase.length; i++) {
    phrase[i] === "a" || phrase[i] === "A" ? arrayVowels[0]++ : "";
    phrase[i] === "e" || phrase[i] === "E" ? arrayVowels[1]++ : "";
    phrase[i] === "i" || phrase[i] === "I" ? arrayVowels[2]++ : "";
    phrase[i] === "o" || phrase[i] === "O" ? arrayVowels[3]++ : "";
    phrase[i] === "u" || phrase[i] === "U" ? arrayVowels[4]++ : "";
  }
  console.log(
    `a:${arrayVowels[0]} e:${arrayVowels[1]} i:${arrayVowels[2]} o:${arrayVowels[3]} u:${arrayVowels[4]}`
  );
};
getVowelsCount("Diego Alejandro Martinez");

// - Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"

const switchWords = (word1, word2) => {
  let result = "";
  let limit = 0;
  word1.length > word2.length ? (limit = word2.length) : (limit = word1.length);
  for (let i = 0; i < limit; i++) {
    result += word1[i];
    result += word2[i];
  }
  console.log(result);
};
switchWords("hola", "chao");

// - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM"

const wordInverse = (word) => {
  let result = "";
  for (let i = word.length - 1; i >= 0; i--) {
    result += word[i];
  }
  console.log(result);
};
wordInverse("Mariposas");

// - Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con \['hola', 'adios', 'gato', 'perro', 'casa'\] deberá imprimir por consola \['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A'\]

const getInitialAndLast = (array) => {
  const arrayResult = [];
  for (let i = 0; i < array.length; i++) {
    arrayResult.push(array[i].charAt(0).toUpperCase());
    arrayResult.push(array[i].charAt(array[i].length - 1).toUpperCase());
  }
  console.log(arrayResult);
};
getInitialAndLast(["hola", "adios", "gato", "perro", "casa"]);

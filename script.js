/* Matemática Simple
En este ejercicio deberás crear:

Una función que se llame triplicador que tome un número como input (osea, como Parámetro) y retorne el triple de ese valor.
Una función multiplicador que tome dos números como Parámetros y devuelva el producto de los dos.
Una función division que tome dos números como Parámetros y devuelva el resultado de dividir el primero por el segundo.
Una función resto que tome dos números como Parámetros y devuelva el resultado del módulo del primero sobre el segundo. */

function calculadora (num1,num2,ftCallback) {
    return ftCallback(num1,num2)
}


let ftTriplicador = num => num * 3
let ftMultiplicador = (num1,num2) => num1 * num2
let ftDivision = (num1,num2) => num1 / num2
let ftResto = (num1,num2) => num1 % num2

/* Por último, calculá el valor de triplicar 5, luego multiplicar eso por 12, dividir por 12 y encontrar el resto de dividir eso en 3. */

let resultado = calculadora(5, undefined, ftTriplicador); // Triplicar 5
resultado = calculadora(resultado, 12, ftMultiplicador); // Multiplicar por 12
resultado = calculadora(resultado, 12, ftDivision); // Dividir por 12
resultado = calculadora(resultado, 3, ftResto); // Encontrar el resto de dividir por 3

console.log(resultado); // Debería imprimir 0
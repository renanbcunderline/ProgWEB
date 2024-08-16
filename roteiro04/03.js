let array = [1,2,3,4,5,6,7,8,9]

let lista = array.map(valor => valor <= 4.9? "D": valor <= 6.9? "C": valor <= 8.9? "B": "A");

console.log(lista);

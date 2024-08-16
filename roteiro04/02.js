const progressaoAritmetica = ({ n, a1, r }) => {
    let termos = [];
    let soma = 0;
    
    for (let i = 0; i < n; i++) {
        const termo = a1 + i * r;
        termos.push(termo);
        soma += termo;
    }
    
    console.log(`Progressão Aritmética: ${termos.join(', ')}`);
    console.log(`Soma dos elementos: ${soma}`);
};

const progressaoGeometrica = ({ n, a1, r }) => {
    let termos = [];
    let soma = 0;
    
    for (let i = 0; i < n; i++) {
        const termo = a1 * Math.pow(r, i);
        termos.push(termo);
        soma += termo;
    }
    
    console.log(`Progressão Geométrica: ${termos.join(', ')}`);
    console.log(`Soma dos elementos: ${soma}`);
};

const objetoPA = {
    id: 1,
    nome: "Progressão Aritmética",
    n: 5,
    a1: 2,
    r: 3
};

const objetoPG = {
    id: 2,
    nome: "Progressão Geométrica",
    n: 4,
    a1: 2,
    r: 2
};

progressaoAritmetica(objetoPA);
progressaoGeometrica(objetoPG);

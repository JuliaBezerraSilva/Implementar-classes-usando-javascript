class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDados() {
        console.log(
            "Marca:", this.marca,
            "| Modelo:", this.modelo,
            "| Ano:", this.ano
        );
    }

    ligar() {
        console.log("O veículo foi ligado.");
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    empinar() {
        console.log("A moto está empinando.");
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, quantidadePortas) {
        super(marca, modelo, ano);
        this.quantidadePortas = quantidadePortas;
    }

    abrirPortaMalas() {
        console.log("O porta-malas foi aberto.");
    }
}

const moto = new Moto("Yamaha", "MT-03", 2018, 321);

console.log(
    "A moto é da marca:",
    moto.marca,
    "| modelo:",
    moto.modelo,
    "| fabricada em:",
    moto.ano,
    "com",
    moto.cilindradas,
    "| cilindradas"
);
moto.ligar();
moto.empinar();


// OBJETO CARRO
const carro = new Carro("Honda", "SUV", 2024, 4);

console.log(
    "O carro é da marca:",
    carro.marca,
    "| modelo:",
    carro.modelo,
    "| fabricado em:",
    carro.ano,
    "| com",
    carro.quantidadePortas,
    "portas"
);
carro.ligar();
carro.abrirPortaMalas();

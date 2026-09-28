class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    exibirDados() {
        console.log("Nome do produto:", this.nome);
        console.log("Preço:", this.preco);
    }

    calcularPreco() {
        return this.preco;
    }
}


class ProdutoFisico extends Produto {
    constructor(nome, preco, peso, frete) {
        super(nome, preco);
        this.peso = peso;
        this.frete = frete;
    }

    calcularFrete() {
        return this.frete;
    }

    calcularPreco() {
        return this.preco + this.calcularFrete();
    }
}


class ProdutoDigital extends Produto {
    constructor(nome, preco, tamanhoArquivo) {
        super(nome, preco);
        this.tamanhoArquivo = tamanhoArquivo;
    }

    gerarLink() {
        return "https://exemplo.com/download/" + this.nome;
    }

    calcularFrete() {
        return 0;
    }

    calcularPreco() {
        return this.preco;
    }
}


// Testando Produto Físico
const produtoFisico = new ProdutoFisico(
    "Livro",
    50,
    2,
    10
);

produtoFisico.exibirDados();
console.log("Frete:", produtoFisico.calcularFrete());
console.log("Preço final:", produtoFisico.calcularPreco());


// Testando Produto Digital
const produtoDigital = new ProdutoDigital(
    "E-book",
    30,
    15
);

produtoDigital.exibirDados();
console.log("Frete:", produtoDigital.calcularFrete());
console.log("Preço final:", produtoDigital.calcularPreco());
console.log("Link:", produtoDigital.gerarLink());
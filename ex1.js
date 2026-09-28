class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    aumentarSalario(salario, bonus) {
        let aumento = salario * bonus;
        return aumento;
    }

    exibirDados() {
        console.log('nome:', this.nome, 'salario:', this.salario);
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, departamento, bonus) {
        super(nome, salario);
        this.departamento = departamento;
        this.bonus = bonus;
    }

    calcularSalario() {
        let novoSalario = this.aumentarSalario(this.salario, this.bonus) + this.salario;
        console.log('novo salario é:', novoSalario);
    }

    exibirDados() {
        console.log(
            'nome:', this.nome,
            'salario:', this.salario,
            'departamento:', this.departamento,
            'bonus:', this.bonus
        );
    }
}

const Stephani = new Gerente('stephani', 25000, 'Advocacia', 0.7);

Stephani.exibirDados();
Stephani.calcularSalario();

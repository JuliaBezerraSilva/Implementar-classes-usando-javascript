class Conta {
    constructor(numero, titular, saldo) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        console.log('depositando:', valor);
        this.saldo += valor;
    }

    sacar(valor) {
        console.log('tentando sacar:', valor);

        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log('saldo insuficiente');
        }
    }

    consultarSaldo() {
        console.log(
            'numero:', this.numero,
            'titular:', this.titular,
            'saldo:', this.saldo
        );
    }
}


class ContaCorrente extends Conta {
    constructor(numero, titular, saldo, limite) {
        super(numero, titular, saldo);
        this.limite = limite;
    }

    sacar(valor) {
        console.log('tentando sacar:', valor);

        if (this.saldo + this.limite >= valor) {
            this.saldo -= valor;
        } else {
            console.log('saldo e limite insuficientes');
        }
    }

    consultarSaldo() {
        console.log(
            'numero:', this.numero,
            'titular:', this.titular,
            'saldo:', this.saldo,
            'limite:', this.limite
        );
    }
}


class ContaPoupanca extends Conta {
    constructor(numero, titular, saldo, taxa) {
        super(numero, titular, saldo);
        this.taxa = taxa;
    }

    calcularRendimento() {
        console.log('calculando rendimento');

        let rendimento = this.saldo * this.taxa;

        console.log('rendimento é:', rendimento);
    }
}


const Carlos = new ContaCorrente(101, 'Carlos', 500, 200);
Carlos.consultarSaldo();
Carlos.depositar(100);
Carlos.sacar(700);

const Ana = new ContaPoupanca(202, 'Ana', 1000, 0.05);
Ana.consultarSaldo();
Ana.calcularRendimento();
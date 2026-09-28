class Funcionario{
    constructor(nome, matricula){
        this.nome = nome;
        this.matricula = matricula;
    }
    exibirDados(){
        console.log("Nome:", this.nome, "| Matrícula:", this.matricula);
    }
}
class Professor extends Funcionario{
    constructor(nome, matricula, disciplina){
        super(nome, matricula);
        this.disciplina = disciplina;
    }
    ministrarAula(){
        console.log("O/A professor(a)", this.nome, "está ministrando a aula de", this.disciplina);
    }

    exibirDados(){
        console.log("Nome:", this.nome, "| Matrícula:", this.matricula, "| Disciplina:", this.disciplina);
    }
}
class Coordenador extends Funcionario{
    constructor(nome, matricula, curso){
        super(nome, matricula);
        this.curso = curso;
    }
    exibirDados(){
        console.log("Nome:", this.nome, "| Matrícula:", this.matricula, "| Curso:", this.curso);
    }
    realizarReuniao(){
        console.log("O/A Coordenador(a)", this.nome, "realizou a reunião do curso.", this.curso);
    }
}

const suzy = new Professor('Suzy', '16678904', 'Língua Portuguesa');
suzy.exibirDados();
suzy.ministrarAula();

const leandro = new Coordenador('Leandro', '23340097', 'Biologia');
leandro.exibirDados();
leandro.realizarReuniao();

export default class Tarefa {
  id?: number; // Deixe o ID opcional para que o backend possa atribuí-lo
  titulo: string;
  descricao: string;
  dataEntrega: string;
  concluida: boolean;

  constructor(titulo: string, descricao: string, dataEntrega: string, concluida: boolean = false) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.dataEntrega = dataEntrega;
    this.concluida = concluida;
  }
}

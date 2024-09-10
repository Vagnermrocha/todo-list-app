
export default class Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  dataEntrega: Date;
  concluida: boolean;

  constructor(titulo: string, descricao: string, dataEntrega: string, concluida: boolean = false, atualizaId: boolean = false) {
    const lastId: string | null = localStorage.getItem("lastId");
    if (lastId != null) {
      this.id = parseInt(lastId) + 1;
    } else {
      this.id = 1;
    }

    if (atualizaId) localStorage.setItem("lastId", this.id.toString());

    this.titulo = titulo;
    this.descricao = descricao;
    this.dataEntrega = new Date(dataEntrega);
    this.concluida = concluida;
  }
}

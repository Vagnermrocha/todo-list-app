import { Component, Input } from '@angular/core';
import Tarefa from 'src/app/models/Tarefa';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  //// No lugar de uma tarefa indefinida, cria-se uma nova tarefa com valores padrão (default)
  // @Input('t') tarefa: Tarefa = new Tarefa("Tarefa 1", "Descrição 1", "2023-10-06");

  //// Simplemente definindo uma tarefa como indefinida
  @Input('t') tarefa?: Tarefa;
  arrayTarefas: any;

  // removerTarefa() {
  //   const arrayTarefas: Tarefa[] = JSON.parse(localStorage.getItem("arrayTarefas") || "[]");
  //   const indice = arrayTarefas.findIndex((t) => t.id == this.tarefa?.id);
  //   arrayTarefas.splice(indice, 1);
  //   localStorage.setItem("arrayTarefas", JSON.stringify(arrayTarefas));
  // }
  editarTarefa() {
    const arrayTarefas: Tarefa[] = JSON.parse(localStorage.getItem("arrayTarefas") || "[]");
    const indice = arrayTarefas.findIndex((t) => t.id == this.tarefa?.id);
    arrayTarefas.splice(indice, 1);
    localStorage.setItem("arrayTarefas", JSON.stringify(arrayTarefas));
  }
  enviarTarefa() {
    if (this.tarefa) {
      const arrayTarefas: Tarefa[] = JSON.parse(localStorage.getItem("arrayTarefas") || "[]");
      arrayTarefas.push(this.tarefa);
      localStorage.setItem("arrayTarefas", JSON.stringify(arrayTarefas));
      console.log('Tarefa enviada com sucesso!');
    } else {
      console.error('Erro ao enviar a tarefa: tarefa não definida');
    }
  }
  removerTarefa(tarefa: Tarefa) {
    const arrayTarefas: Tarefa[] = JSON.parse(localStorage.getItem("arrayTarefas") || "[]");
    const indice = arrayTarefas.findIndex((t) => t.id == this.tarefa?.id);
    if (indice !== -1) {
      arrayTarefas.splice(indice, 1);
      localStorage.setItem("arrayTarefas", JSON.stringify(arrayTarefas));
      console.log('Tarefa removida com sucesso!');
      this.atualizarListaTarefas();
    } else {
      console.error('Erro ao remover a tarefa: tarefa não encontrada');
    }
  }
  atualizarListaTarefas() {
    this.arrayTarefas = JSON.parse(localStorage.getItem("arrayTarefas") || "[]");
  }
}


import { Component, Input, Output, EventEmitter } from '@angular/core';
import Tarefa from 'src/app/models/Tarefa';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input('t') tarefa?: Tarefa;
  @Output() tarefaRemovida = new EventEmitter<void>();
  @Output() tarefaEditada = new EventEmitter<Tarefa>();

  removerTarefa() {
    if (this.tarefa) {
      const arrayTarefas: Tarefa[] = JSON.parse(localStorage.getItem("arrayTarefas") || "[]");
      const indice = arrayTarefas.findIndex((t) => t.id === this.tarefa?.id);
      if (indice !== -1) {
        arrayTarefas.splice(indice, 1);
        localStorage.setItem("arrayTarefas", JSON.stringify(arrayTarefas));
        console.log('Tarefa removida com sucesso!');
        this.tarefaRemovida.emit();
      } else {
        console.error('Erro ao remover a tarefa: tarefa não encontrada');
      }
    }
  }

  editarTarefa() {
    if (this.tarefa) {
      this.tarefaEditada.emit(this.tarefa);
    }
  }
}

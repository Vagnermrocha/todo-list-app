import { Component, Input, Output, EventEmitter } from '@angular/core';
import Tarefa from 'src/app/models/Tarefa';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input('t') tarefa?: Tarefa;
  @Output() tarefaRemovida = new EventEmitter<void>();
  @Output() tarefaEditada = new EventEmitter<Tarefa>();

  constructor(private taskService: TaskService) {}
  removerTarefa() {
    if (this.tarefa && this.tarefa.id) {
      this.taskService.deleteTarefa(this.tarefa.id).subscribe(() => {
        console.log('Tarefa removida com sucesso!');
        this.tarefaRemovida.emit();
      });
    } else {
      console.error('Erro ao remover a tarefa: ID inválido');
    }
  }
  
  


  editarTarefa() {
    if (this.tarefa) {
      this.tarefaEditada.emit(this.tarefa);
    }
  }
}

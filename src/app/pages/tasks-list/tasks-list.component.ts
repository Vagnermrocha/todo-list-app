import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Tarefa from 'src/app/models/Tarefa';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  arrayTarefas: Tarefa[] = [];

  constructor(private router: Router, private taskService: TaskService) {}

  ngOnInit() {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.taskService.getTarefas().subscribe((tarefas) => {
      this.arrayTarefas = tarefas;
      console.log("Tarefas carregadas:", tarefas);
    });
  }
  

  atualizarListaTarefas() {
    this.carregarTarefas();
  }

  editarTarefa(tarefa: Tarefa) {
    this.router.navigate(['/tasks/edit', tarefa.id]);
  }
}

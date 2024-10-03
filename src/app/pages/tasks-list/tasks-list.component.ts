import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Tarefa from 'src/app/models/Tarefa';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  arrayTarefas: Tarefa[] = [];

  constructor(private router: Router) {
    if (!localStorage.getItem("arrayTarefas")) {
      localStorage.setItem("arrayTarefas", "[]");
    }
  }

  ngOnInit() {
    this.carregarTarefas();
  }

  carregarTarefas() {
    const localStorageArray: Tarefa[] = JSON.parse(localStorage.getItem("arrayTarefas") || "[]");
    this.arrayTarefas = localStorageArray;
    console.log("Tarefas carregadas do localStorage:", this.arrayTarefas);
  }

  atualizarListaTarefas() {
    this.carregarTarefas();
  }

  editarTarefa(tarefa: Tarefa) {
    console.log("Editar tarefa:", tarefa);
    this.router.navigate(['/tasks/edit', tarefa.id]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Tarefa from 'src/app/models/Tarefa';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  // Array<Tarefa>
  arrayTarefas: Tarefa[] = [];

  constructor() {
      // Inicializa o armazenamento local se ainda não existir
  if (!localStorage.getItem("arrayTarefas")) {
    localStorage.setItem("arrayTarefas", "[]");
  }

  }

  ngOnInit() {
    const localStorageArray: Tarefa[] = JSON.parse(localStorage.getItem("arrayTarefas") || "[]");
    if (localStorageArray.length == 0) {
      this.arrayTarefas = [
        new Tarefa("Passear com o cachorro", "Amo passear com meu cachorro", "2023-04-25", false, true),
        new Tarefa("Passear com o chimpanzé", "Amo passear com meu chimpanzé", "2023-04-26", false, true),
        new Tarefa("Passear com o jacaré", "Amo passear com meu jacaré", "2023-04-23", true, true),
        new Tarefa("Passear com o cavalo", "Amo passear com meu cavalo", "2023-04-28", false, true)
      ];
      localStorage.setItem("arrayTarefas", JSON.stringify(this.arrayTarefas));
    } else {
      this.arrayTarefas = localStorageArray;
    }
    console.log(localStorageArray)
  }
}

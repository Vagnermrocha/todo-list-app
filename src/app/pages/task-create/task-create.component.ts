import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Tarefa from 'src/app/models/Tarefa';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  novaTarefa: Tarefa = new Tarefa("", "", "");

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const arrayTarefas: Tarefa[] = JSON.parse(localStorage.getItem("arrayTarefas") || "[]");
      const tarefaParaEditar = arrayTarefas.find(t => t.id === parseInt(id, 10));
      if (tarefaParaEditar) {
        this.novaTarefa = { ...tarefaParaEditar };
      }
    }
  }

  formSubmit() {
    const arrayTarefas: Tarefa[] = JSON.parse(localStorage.getItem("arrayTarefas") || "[]");

    if (!this.novaTarefa.id) {
      this.novaTarefa.id = Date.now();
      console.log("ID da nova tarefa gerado:", this.novaTarefa.id);
    }
    const indice = arrayTarefas.findIndex((t: Tarefa) => t.id === this.novaTarefa.id);
    if (indice !== -1) {
      arrayTarefas[indice] = this.novaTarefa;
    } else {
      arrayTarefas.push(this.novaTarefa);
    }
    console.log("Array de tarefas depois de adicionar/atualizar:", arrayTarefas);

    localStorage.setItem("arrayTarefas", JSON.stringify(arrayTarefas));
    console.log("Tarefas salvas no localStorage:", JSON.parse(localStorage.getItem("arrayTarefas") || "[]"));
    console.log("Este é o valor da nova tarefa agora:", this.novaTarefa);
    this.router.navigate(["/tasks"]);
  }
}

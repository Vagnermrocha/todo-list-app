import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Tarefa from 'src/app/models/Tarefa';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  novaTarefa: Tarefa = new Tarefa("", "", "");

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskService.getTarefaById(parseInt(id, 10)).subscribe((tarefa) => {
        this.novaTarefa = tarefa;
      });
    }
  }

  formSubmit() {
    if (!this.novaTarefa.id) {
      this.taskService.addTarefa(this.novaTarefa).subscribe((novaTarefa) => {
        this.novaTarefa = novaTarefa; // Atualiza a tarefa com o ID gerado pelo backend
        console.log("Nova tarefa adicionada:", novaTarefa);
        this.router.navigate(["/tasks"]);
      });
    } else {
      this.taskService.updateTarefa(this.novaTarefa).subscribe(() => {
        console.log("Tarefa atualizada:", this.novaTarefa);
        this.router.navigate(["/tasks"]);
      });
    }
  }
  
  
  

}

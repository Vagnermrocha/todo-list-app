import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Tarefa from 'src/app/models/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tarefas';

  constructor(private http: HttpClient) {}

  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  addTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.apiUrl, tarefa);
  }
  


updateTarefa(tarefa: Tarefa): Observable<Tarefa> {
  return this.http.put<Tarefa>(`${this.apiUrl}/${tarefa.id}`, tarefa);
}


deleteTarefa(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}


  getTarefaById(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.apiUrl}/${id}`);
  }
}

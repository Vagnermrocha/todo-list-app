import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskItemComponent } from './tasks-list/task-item/task-item.component';

@NgModule({
  declarations: [
    TasksListComponent,
    PageNotFoundComponent,
    TaskCreateComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    TasksListComponent
  ]
})
export class PagesModule { }


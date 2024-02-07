import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesviosFormComponent } from './desvios-form/desvios-form.component';
import { DesviosListComponent } from './desvios-list/desvios-list.component';

const routes: Routes = [
  { path: 'desvios-list', component: DesviosListComponent },
  { path: 'desvios-form', component: DesviosFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesviosRoutingModule { }

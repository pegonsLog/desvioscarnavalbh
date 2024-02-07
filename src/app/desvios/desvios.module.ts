import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesviosRoutingModule } from './desvios-routing.module';
import { DesviosListComponent } from './desvios-list/desvios-list.component';
import { DesviosFormComponent } from './desvios-form/desvios-form.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DesviosListComponent,
    DesviosFormComponent
  ],
  imports: [
    CommonModule,
    DesviosRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    DesviosListComponent,
    DesviosFormComponent
  ]
})
export class DesviosModule { }

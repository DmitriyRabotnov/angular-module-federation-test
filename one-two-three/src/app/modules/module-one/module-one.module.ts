import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModuleOneComponent } from './module-one.component';
import { ModuleOneRoutingModule } from './module-one-routing.module';
import { ToastModule } from '../toast/toast.module';



@NgModule({
  declarations: [
    ModuleOneComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModuleOneRoutingModule,
    ToastModule
  ]
})
export class ModuleOneModule { }

import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModuleTwoComponent } from './module-two.component';
import { ModuleTwoRoutingModule } from './module-two-routing.module';
import { ToastModule } from '../toast/toast.module';


@NgModule({
  declarations: [
    ModuleTwoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModuleTwoRoutingModule,
    ToastModule
  ]
})
export class ModuleTwoModule { }

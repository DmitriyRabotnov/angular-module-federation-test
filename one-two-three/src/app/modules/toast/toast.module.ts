import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ToastComponent } from "./toast.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ToastComponent],
  providers: [],
  exports: [ToastComponent]
})
export class ToastModule {}

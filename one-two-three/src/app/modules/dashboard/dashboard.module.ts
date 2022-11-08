import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from '../../card/card.component';
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DashboardComponent, CardComponent],
  providers: [],
  exports: [DashboardComponent]
})
export class DashboardModule {}

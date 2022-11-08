import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'one',
  loadChildren: () => import('../module-one/module-one.module').then(m => m.ModuleOneModule)
}, {
  path: 'two',
  loadChildren: () => import('../module-two/module-two.module').then(m => m.ModuleTwoModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

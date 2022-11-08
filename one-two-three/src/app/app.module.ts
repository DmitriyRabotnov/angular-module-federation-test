import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(appRef: ApplicationRef) {
    const el = createCustomElement(DashboardComponent, { injector: this.injector });
    customElements.define('one-two-tree-dashboard', el);

    const el2 = createCustomElement(CardComponent, { injector: this.injector });
    customElements.define('one-two-tree-card', el2);

    if (window.location.href.includes('4400')) {
      console.log('One-two-tree standalone mode is running!');
      appRef.bootstrap(AppComponent);
    }
  }
}

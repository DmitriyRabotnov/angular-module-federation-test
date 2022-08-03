import { Component, Input, OnInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-wrapper',
  template: `
    <ng-container *ngIf="loaded$">
      <ng-content></ng-content>
    </ng-container>
  `,
})
export class WrapperComponent implements OnInit {
  @Input() remote!: string;
  @Input() module!: string;

  loaded$!: Promise<any>;

  ngOnInit() {
    this.loaded$ = loadRemoteModule({
      type: 'module',
      remoteEntry: this.remote + '/remoteEntry.js',
      exposedModule: this.module
    });
  }
}

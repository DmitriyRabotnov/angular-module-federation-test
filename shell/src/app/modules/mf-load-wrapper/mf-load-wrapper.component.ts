import { Component, ContentChildren, Input, OnInit, AfterViewInit, QueryList, TemplateRef } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { loadMicroFrontend } from './load-micro-frontend';

@Component({
  selector: 'mf-load-wrapper',
  templateUrl: './mf-load-wrapper.component.html',
})

export class MfLoadWrapperComponent implements OnInit, AfterViewInit {
  // @Input() remote!: string;
  // @Input() module!: string;

  @ContentChildren('error') errorTemplateRef: QueryList<TemplateRef<unknown>>| undefined;
  @ContentChildren('loading') loadingTemplateRef: QueryList<TemplateRef<unknown>> | undefined;

  errorRef: TemplateRef<unknown> | undefined;
  loadingRef: TemplateRef<unknown> | null | undefined;

  loaded$!: Observable<unknown>;
  hasError$ = new Subject();

  errorContent = '';

  ngOnInit() {
    this.loaded$ = loadMicroFrontend({
        remoteEntry: 'http://localhost:4400/oneTwoThree.js', //this.remote,
        exposedModule: './one-two-three' // this.module
    }).pipe(
      catchError(error => {
          this.errorContent = error.toString();
          this.hasError$.next(true);
          this.errorRef = this.errorTemplateRef?.first;
          this.loadingRef = null;
          return of();
        })
      );
  }

  ngAfterViewInit() {
    this.loadingRef = this.loadingTemplateRef?.first;
  }
}

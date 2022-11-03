import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MfLoadWrapperComponent } from './mf-load-wrapper.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MfLoadWrapperComponent],
  exports:[MfLoadWrapperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MfLoadWrapperModule {}

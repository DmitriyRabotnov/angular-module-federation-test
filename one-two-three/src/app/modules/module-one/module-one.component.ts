import { Component } from '@angular/core';
import { SampleService } from "../../services/sample.service";

@Component({
  selector: 'app-module-one',
  templateUrl: './module-one.component.html',
  styleUrls: ['./module-one.component.scss']
})
export class ModuleOneComponent {
  value = "module one";

  constructor(private sampleService: SampleService) { }

  onClick() {
    this.sampleService.create(this.value);
  }
}

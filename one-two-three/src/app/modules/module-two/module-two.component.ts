import { Component } from '@angular/core';
import { SampleService } from '../../services/sample.service';

@Component({
  selector: 'app-module-two',
  templateUrl: './module-two.component.html',
  styleUrls: ['./module-two.component.scss']
})
export class ModuleTwoComponent {
  value = "module two";

  constructor(private sampleService: SampleService) { }

  onClick() {
    this.sampleService.create(this.value);
  }
}

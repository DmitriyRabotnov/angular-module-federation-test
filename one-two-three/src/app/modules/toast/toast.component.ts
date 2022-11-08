import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SampleService } from "../../services/sample.service";

@Component({
  selector: "app-toast",
  styleUrls: ["toast.component.css"],
  templateUrl: "toast.component.html"
})
export class ToastComponent implements OnInit {
  messages: string[] = [];
  serviceLink: Subscription = new Subscription;

  constructor(public sampleService: SampleService) { }

  ngOnInit() {
    console.log("Initialising subscription");
    this.serviceLink = this.sampleService.getMessages().subscribe((message) => {
      this.messages.push(message);
      setTimeout(() => this.messages.shift(), 2000);
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.serviceLink.unsubscribe();
  }
}

import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class SampleService {
  private messages = new Subject<string>();

  create(message: string) {
    this.messages.next(message);
  }
  getMessages(): Observable<string> {
    return this.messages.asObservable();
  }
}

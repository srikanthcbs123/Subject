import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataSharingService {
  SharingData = new Subject<any>();
  constructor() {}
}

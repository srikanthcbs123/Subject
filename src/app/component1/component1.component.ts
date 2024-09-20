import { Component } from "@angular/core";
import { DataSharingService } from "../data-sharing.service";

@Component({
  selector: "app-component1",
  templateUrl: "./component1.component.html",
  styleUrls: ["./component1.component.css"],
})
export class Component1Component {
  Component1Data: any = "";

  constructor(private DataSharing: DataSharingService) {
    debugger;
    //subsribed in the constructor used to fetch the data
    this.DataSharing.SharingData.subscribe((res: any) => {
      debugger;
      this.Component1Data = res;
    });
  }
  //SharingData is sending data using next method.
  onSubmit(data) {
    debugger;
    this.DataSharing.SharingData.next(data.value);
  }
}

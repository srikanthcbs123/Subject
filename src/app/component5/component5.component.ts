import { Component, OnInit } from "@angular/core";
import { DataSharingService } from "../data-sharing.service";

@Component({
  selector: "app-component5",
  templateUrl: "./component5.component.html",
  styleUrls: ["./component5.component.css"],
})
export class Component5Component implements OnInit {
  Component5Data: any = "";
  constructor(private readonly DataSharing: DataSharingService) {
    debugger;
    this.DataSharing.SharingData.subscribe((res: any) => {
      this.Component5Data = res;
    });
  }
  ngOnInit() {}
}

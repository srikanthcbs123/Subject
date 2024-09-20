import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
  Component4Data: any = "";
  constructor(private readonly DataSharing :DataSharingService) {
    debugger;
    this.DataSharing.SharingData.subscribe((res: any) => {
      this.Component4Data = res;
    });
   }

  ngOnInit() {
    
  }

}

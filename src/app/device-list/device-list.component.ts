import { Component, OnInit } from '@angular/core';

import {NgDevInfoServiceService} from '../ng-dev-info-service.service';
import {Device} from '../device';
import {Resbody} from '../resbody';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  devices: Device[];
  responses: Resbody;

  constructor(private devInfoService: NgDevInfoServiceService) { }

  ngOnInit(): void {
    this.getDevices(1);

  }

  getDevices(pagenum: number): void {
    this.devInfoService.getDevInfo(pagenum)
      .subscribe(responses => this.responses = responses);
  }

}

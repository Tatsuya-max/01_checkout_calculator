import { Component, OnInit } from '@angular/core';
import { ArrangementService } from '../arrangement.service';
import { SettingItemService } from '../setting-item.service';

@Component({
  selector: 'app-arrangement',
  templateUrl: './arrangement.component.html',
  styleUrls: ['./arrangement.component.css'],
})
export class ArrangementComponent implements OnInit {

  constructor(public settingItemService: SettingItemService,
    public arrangementService: ArrangementService) {}

  ngOnInit() {
  }

}

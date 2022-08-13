import { Component, OnInit } from '@angular/core';
import { SettingItemService } from '../setting-item.service';

@Component({
  selector: 'app-game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['./game-options.component.css'],
})
export class GameOptionsComponent implements OnInit {

  selectedOutOption?: number;

  constructor(public settingItemService: SettingItemService) {}

  ngOnInit() {}

  onClick(num: number) {
    this.selectedOutOption =  num;
    this.settingItemService.setBullType(num);
  }

}

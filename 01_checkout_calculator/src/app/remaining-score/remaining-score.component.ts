import { Component, OnInit } from '@angular/core';
import { SettingItem } from '../setting-item';
import { SettingItemService } from '../setting-item.service';
import { ArrangementService } from '../arrangement.service';

@Component({
  selector: 'app-remaining-score',
  templateUrl: './remaining-score.component.html',
  styleUrls: ['./remaining-score.component.css'],
})
export class RemainingScoreComponent implements OnInit {
  settingItems: SettingItem[] = [];

  constructor(public settingItemService: SettingItemService, public arrangementService: ArrangementService) {}

  ngOnInit() {
    this.getRemainingScore();
  }

  clear() {
    this.settingItemService.clearRemainingScore();
    this.arrangementService.clear();
  }

  check() {
    this.settingItemService.checkTheScore();
  }

  getRemainingScore(): void {
    this.settingItemService
      .getSettingItems()
      .subscribe((settingItems) => (this.settingItems = settingItems));
  }
}

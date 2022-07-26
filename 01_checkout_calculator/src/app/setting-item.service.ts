import { Injectable } from '@angular/core';
import { SettingItem } from './setting-item';
import { SettingItems } from './setting-items';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingItemService {

  constructor() {}

  checkTheScore() {
    const theVal = SettingItems[0].value;
    if (theVal < 0 || 180 < theVal || !isFinite(theVal)) {
      this.clearRemainingScore();
    }
  }

  clearRemainingScore() {
    SettingItems[0].value = undefined;
  }

  setOutOption(theVal: number ) {
    SettingItems[1].value = theVal;
  }

  setBullType(theVal: number ) {
    if(theVal == 3) {
      SettingItems[2].value = undefined;  
    } else {
      SettingItems[2].value = theVal;
    }
  }

  getSettingItems(): Observable<SettingItem[]> {
    const settingItems = of(SettingItems);
    return settingItems;
  }
}

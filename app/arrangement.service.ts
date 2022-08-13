import { Injectable } from '@angular/core';
import { SettingItem } from './setting-item';
import { SettingItems } from './setting-items';
import { ArrangeRecordsOfOpen } from './arrange-records-of-open';
import { ArrangeRecordsOfDouble } from './arrange-records-of-double';
import { ArrangeRecordsOfMasterF } from './arrange-records-of-masterF';
import { ErrorMessagesService } from './error-messages.service';
import { ArrangeRecord } from './arrange-record';

@Injectable({
  providedIn: 'root',
})
export class ArrangementService {
  arrangement: string[] = [];

  constructor(public errorMessagesService: ErrorMessagesService) {}

  getArrangement() {
    this.clear();
    this.getRecord();
  }

  getRecord(): void {
    const theScore = SettingItems[0].value;
    const theOutOption = SettingItems[1].value;
    const theBullType = SettingItems[2].value;

    this.errorMessagesService.check();
    if (this.errorMessagesService.storedMessages.length > 0) {
      this.errorMessagesService.show();
      return;
    }

    if (theScore == undefined) {
      this.arrangement = [];
    } else if (theScore < 1) {
      this.arrangement[0] = 'No finish.';
      return;
    } else {
      const index = 180 - theScore;
      switch (theOutOption) {
        case 1:
          this.arrangement.push(ArrangeRecordsOfOpen[index].first);
          this.arrangement.push(ArrangeRecordsOfOpen[index].second);
          this.arrangement.push(ArrangeRecordsOfOpen[index].third);
          break;
        case 2:
          this.arrangement.push(ArrangeRecordsOfDouble[index].first);
          this.arrangement.push(ArrangeRecordsOfDouble[index].second);
          this.arrangement.push(ArrangeRecordsOfDouble[index].third);
          break;
        default:
          if (theBullType == 1) {
            this.arrangement.push(ArrangeRecordsOfMasterF[index].first);
            this.arrangement.push(ArrangeRecordsOfMasterF[index].second);
            this.arrangement.push(ArrangeRecordsOfMasterF[index].third);
          } else {
            this.errorMessagesService.store(
              'Master-Sepa rule is not in service.'
            );
            this.errorMessagesService.show();
            return;
          }
      }
    }
    if (this.arrangement[0] == '') {
      this.arrangement[0] = 'No finish.';
    }
  }

  clear() {
    this.arrangement = [];
  }
}

import { SettingItem } from './setting-item';
import { SettingItems } from './setting-items';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessagesService {
  messages: string[] = [];
  storedMessages: string[] = [];

  check() {
    this.clear();
    this.checkRemainingScore();
    this.checkOptions();}

  show() {
    this.messages = this.storedMessages;
  }

  checkRemainingScore() {
    if(SettingItems[0].value == undefined) {
      this.store("Enter your remaining score.")
    }
  }

  checkOptions() {
    if(SettingItems[1].value == undefined) {
      this.store("Select an out option.")
    }
    if(SettingItems[2].value == undefined) {
      this.store("Select a type of bull.")
    }
  }

  store(message: string) {
    this.storedMessages.push(message);
  }

  clear() {
    this.messages = [];
    this.storedMessages = [];
  }
}
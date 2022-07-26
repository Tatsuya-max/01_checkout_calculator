import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RemainingScoreComponent } from './remaining-score/remaining-score.component';
import { ErrorMessagesComponent } from './error-messages/error-messages.component';
import { GameOptionsComponent } from './game-options/game-options.component';
import { ArrangementComponent } from './arrangement/arrangement.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    RemainingScoreComponent,
    ErrorMessagesComponent,
    GameOptionsComponent,
    ArrangementComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

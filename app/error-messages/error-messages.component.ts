import { Component, OnInit } from '@angular/core';
import { ErrorMessagesService } from '../error-messages.service';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.css']
})
export class ErrorMessagesComponent implements OnInit {

  constructor(public errorMessagesService: ErrorMessagesService) {}

  ngOnInit() {
  }

}
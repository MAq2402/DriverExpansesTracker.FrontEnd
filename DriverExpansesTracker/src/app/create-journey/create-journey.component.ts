import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-create-journey',
  templateUrl: './create-journey.component.html',
  styleUrls: ['./create-journey.component.css']
})
export class CreateJourneyComponent implements OnInit {

  constructor(private alertService: AlertService) { }
  private passengerCount = 1;
  passengerHtml;
  ngOnInit() {
    this.passengerHtml = $('.passenger');
  }

  addPassengerButtonOnClick() {
    this.passengerCount++;
    const newPassengerDiv = this.passengerHtml.clone();
    const passengerRoutesDiv = $('#passengerRoutes');
    newPassengerDiv.appendTo(passengerRoutesDiv);
  }

  send() {
    this.alertService.showAlert('DZIAŁA -- to jest jakiś testowy tekst', 'success');
  }
}

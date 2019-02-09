import { Component, OnInit } from '@angular/core';
import {AboutCard} from "../../shared/models/about-card.model";
import {aboutCards} from "../../services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  aboutCards: AboutCard[] = aboutCards;

  constructor() { }

  ngOnInit() {
  }

}

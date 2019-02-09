import {Component, Input, OnInit} from '@angular/core';
import {AboutCard} from "../../shared/models/about-card.model";

@Component({
  selector: 'app-about-panel',
  templateUrl: './about-panel.component.html',
  styleUrls: ['./about-panel.component.css']
})
export class AboutPanelComponent implements OnInit {
  @Input('aboutCard') aboutCard: AboutCard;

  constructor() {
    let color = {
      'color': this.aboutCard.color
    };
  }

  ngOnInit() {
  }

}

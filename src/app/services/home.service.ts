import {AboutCard} from "../shared/models/about-card.model";
import {Injectable} from "@angular/core";

@Injectable()
export class HomeService {

}

export const aboutCards = [
  new AboutCard("fas fa-carrot", "#e67e22", "Food Access", "Points of interest for affordable food access: Community Gardens, Food Pantries, Produce Giveaway."),
  new AboutCard("fas fa-hands-helping","#2ecc71","Volunteer","Groom forever, stretch tongue and leave it slightly out"),
  new AboutCard("fas fa-car","#3498db","Ride Share","Hiiiiiiiiii feed me now cough hairball on conveniently placed pants leave fur on owners clothes"),
  new AboutCard("fas fa-briefcase-medical","#e74c3c","Medical Help","Touch water with paw then recoil in horror."),
];

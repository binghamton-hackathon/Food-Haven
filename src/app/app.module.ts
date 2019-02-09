import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AboutPanelComponent } from './components/about-panel/about-panel.component';
import { LargePanelComponent } from './components/large-panel/large-panel.component';
import { SmallButtonComponent } from './components/buttons/small-button/small-button.component';
import { HomeComponent } from './core/home/home.component';
import { P2PanelComponent } from './components/p2-panel/p2-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutPanelComponent,
    LargePanelComponent,
    SmallButtonComponent,
    HomeComponent,
    P2PanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

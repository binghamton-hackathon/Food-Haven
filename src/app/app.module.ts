import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AboutPanelComponent } from './components/about-panel/about-panel.component';
import { LargePanelComponent } from './components/large-panel/large-panel.component';
import { SmallButtonComponent } from './components/buttons/small-button/small-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutPanelComponent,
    LargePanelComponent,
    SmallButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

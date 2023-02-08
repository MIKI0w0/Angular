import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { CrearuserComponent } from './crearuser/crearuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    SlidebarComponent,
    CrearuserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

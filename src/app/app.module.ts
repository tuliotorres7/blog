import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogModule } from './blog/BlogModule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonMaterialModules } from './common/material/CommonMaterialModules';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    MatToolbarModule,
    CommonMaterialModules,
    BrowserModule,
    //AppRoutingModule,
    BrowserAnimationsModule,
    BlogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

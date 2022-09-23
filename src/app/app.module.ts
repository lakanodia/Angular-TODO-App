import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { InputComponent } from './input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';





@NgModule({
  declarations:
   [AppComponent,
     InputComponent, 
     ItemComponent],
  imports: 
    [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule, 
      MatSliderModule,
      MatSlideToggleModule,
      MatButtonModule,
      MatInputModule
   
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

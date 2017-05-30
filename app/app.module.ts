import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ProductComponent} from './product.component';
import {ShoppingCartComponent} from './shoppingcart.component';
import {SummaryPipe} from './summary.pipe';
@NgModule({
  imports:      [ BrowserModule,FormsModule],
  declarations: [ AppComponent,ProductComponent,ShoppingCartComponent,SummaryPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

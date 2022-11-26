import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import { ColorDirDirective } from './color-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersDetailsComponent,
    ColorDirDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

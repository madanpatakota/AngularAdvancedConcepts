import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import { ColorDirDirective } from './color-dir.directive';
import { TrimmerPipe } from './trimmer.pipe';
import { ArrayFilterPipe } from './array-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersDetailsComponent,
    ColorDirDirective,
    TrimmerPipe,
    ArrayFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CrisisListComponent } from './crisis.component';

@NgModule({
  declarations: [
    CrisisListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CrisisListComponent]
})
export class CrisisModule { }

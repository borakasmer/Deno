import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataGridComponent } from './datagrid.component';
import { AgGridModule } from 'ag-grid-angular';
import { OnlyNumberDirective } from './onlyNumberDirective';
import { LabelComponent } from './label.component';
import { ErrorMessageComponent } from './errorMessage.component';
import { ButtonSubmitComponent } from './buttonsubmit.component';
import { ButtonComponent } from './button.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    LabelComponent,
    ErrorMessageComponent,
    ButtonSubmitComponent,
    ButtonComponent,
    OnlyNumberDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

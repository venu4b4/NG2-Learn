import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { BatchChangesComponent } from './batch-changes/batch-changes.component';
import { ModalComponent } from './batch-changes/modal/modal.component';
import { RequestBatchChangeComponent } from './batch-changes/request-batch-change/request-batch-change.component';
import { BatchChangeTableComponent } from './batch-changes/batch-change-table/batch-change-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchChangesComponent,
    ModalComponent,
    RequestBatchChangeComponent,
    BatchChangeTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

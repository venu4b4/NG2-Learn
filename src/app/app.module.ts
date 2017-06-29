import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';
import { DatepickerModule } from 'ngx-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { BatchChangesComponent } from './batch-changes/batch-changes.component';
import { ModalComponent } from './batch-changes/modal/modal.component';
import { RequestBatchChangeComponent } from './batch-changes/request-batch-change/request-batch-change.component';
import { BatchChangeTableComponent } from './batch-changes/batch-change-table/batch-change-table.component';
import { ViewBatchChangeDetailsComponent } from './batch-changes/view-batch-change-details/view-batch-change-details.component';

import { batchChangeService } from 'app/service/batch-cahage.service';

import { uniquePipe } from 'app/filters/unique';



@NgModule({
  declarations: [
    AppComponent,
    BatchChangesComponent,
    ModalComponent,
    RequestBatchChangeComponent,
    BatchChangeTableComponent,
    uniquePipe,
    ViewBatchChangeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    DatepickerModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [batchChangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

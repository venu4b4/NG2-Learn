import {Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { batchChangeService } from '../../service/batch-cahage.service';
import * as moment from 'moment';

@Component({
  selector: 'tn-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  /*date picker*/
  public dt: Date = new Date();
  public minDate: Date = void 0;
  public events: any[];
  public tomorrow: Date;
  public afterTomorrow: Date;
  public dateDisabled: {date: Date, mode: string}[];
  public formats: string[] = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY',
    'shortDate'];
  public format: string = this.formats[0];
  public dateOptions: any = {
    formatYear: 'YY',
    startingDay: 1
  };
  private opened: boolean = false;

  get getDate(): string {
    return this.dt.toLocaleDateString();
  }

   // todo: implement custom class cases
  public getDayClass(date: any, mode: string): string {
    if (mode === 'day') {
      let dayToCheck = new Date(date).setHours(0, 0, 0, 0);

      for (let event of this.events) {
        let currentDay = new Date(event.date).setHours(0, 0, 0, 0);

        if (dayToCheck === currentDay) {
          return event.status;
        }
      }
    }

    return '';
  }

  public disabled(date: Date, mode: string): boolean {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  }

  public open(): void {
    this.opened = !this.opened;
  }

  /*date picker*/



  @Input() staticModal;
  department;
  location;
  @Output() isBatchChange = new EventEmitter();
  constructor(private _batchChange: batchChangeService) {
    (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
    (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
    (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
    (this.dateDisabled = []);
    this.events = [
      {date: this.tomorrow, status: 'full'},
      {date: this.afterTomorrow, status: 'partially'}
    ];
  }

  ngOnInit() {
    this._batchChange.isDept = false;
    this._batchChange.isLoc = false;
    this._batchChange.isLeavePlane = false;
  }
  batchChange(staticModal){
    let dept, loc;
    this.isBatchChange.emit({bool: true});
    if(this.department == true && (this.location == false || this.location == undefined)){
      this.staticModal.hide();
      this._batchChange.isDept = true;
      this._batchChange.isLoc = false;
    }
    else if(this.location == true && (this.department == false || this.department == undefined)){
      this.staticModal.hide();
      this._batchChange.isDept = false;
      this._batchChange.isLoc = true;
    }
    else if(this.department == true && this.location == true){
      this.staticModal.hide();
      this._batchChange.isDept = true;
      this._batchChange.isLoc = true;
    }

  }
}

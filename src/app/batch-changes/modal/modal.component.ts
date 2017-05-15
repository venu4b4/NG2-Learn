import {Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'tn-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() staticModal;
  department;
  location;
  @Output() isBatchChange: boolean = false;
  isDept: boolean = false;
  isLoc: boolean = false;
  isleavePlane: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  batchChange(staticModal){
    this.isBatchChange = true;
    let dept, loc;
    if(this.department == true && (this.location == false || this.location == undefined)){
      console.log('department');
      this.staticModal.hide();
      this.department = false;
      this.location = false;
    }
    else if(this.location == true && (this.department == false || this.department == undefined)){
      console.log('location');
      this.staticModal.hide();
      this.department = false;
      this.location = false;
    }
    else if(this.department == true && this.location == true){
      console.log('department && location');
      this.staticModal.hide();
      this.department = false;
      this.location = false;
    }
  }
}

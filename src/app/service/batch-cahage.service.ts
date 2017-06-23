import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class batchChangeService {
 /* private caseNumber = new Subject<string>();*/
    isDept: boolean;
    isLoc: boolean;
    isLeavePlane: boolean;
    constructor(){}
}

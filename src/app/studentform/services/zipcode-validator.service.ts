import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZipcodeValidatorService {
  // static checkZipcode(value: any) {
  //     throw new Error("Mehod not completed.");
  // }

  constructor() { }
  private validZipcodes = ['00001','00002','00003','00004'];
  checkZipcode(value: string){
    return of(this.validZipcodes.includes(value)).pipe(delay(5000));
  }
}

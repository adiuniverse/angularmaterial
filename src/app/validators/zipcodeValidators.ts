import { AbstractControl,AsyncValidatorFn,ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators';
import { ZipcodeValidatorService } from "../studentform/services/zipcode-validator.service";

export class ZipcodeValidators{
    static createValidator(zipcodeService:ZipcodeValidatorService):AsyncValidatorFn{

        
       return(control:AbstractControl):Observable<ValidationErrors  | null> =>{
        return zipcodeService.checkZipcode(control.value).pipe(
            map((result: boolean) => result? null : {invalidAsync : true})
        );
       };

    }

}       
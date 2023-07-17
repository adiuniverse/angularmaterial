import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ZipcodeValidatorService } from './services/zipcode-validator.service';
import { ZipcodeValidators } from '../validators/zipcodeValidators';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.scss']
})
export class StudentformComponent {

  constructor(private zipcodeService:ZipcodeValidatorService){}


  studentDetails = new FormGroup({
    zipCode: new FormControl('',[Validators.required],[ZipcodeValidators.createValidator(this.zipcodeService)])
  })




  get zipCodeControl(){
    return this.studentDetails.get('zipCode')
  }
}

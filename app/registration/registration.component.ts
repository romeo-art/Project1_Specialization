import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { registeredData } from '../registeredDataStorage';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  reactiveForm = this.dataRegistered.group({
    yourname: ['', Validators.required],
    age: ['', Validators.required],
    address: ['', Validators.required],
    gender: ['', Validators.required],
  })

  // name: string;
  // age: string;
  // address: string;
  // gender: string;


  submitData: any[] = [];
  // Data: registeredData;
  constructor(private dataRegistered: FormBuilder) {
    // this.Data = new registeredData;
  }

  ngOnInit() {
  }

  onSubmit() {
  
  
    this.submitData.push(this.reactiveForm.value);

    console.log("Ok")
    console.log(this.submitData)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;
  email : String;
  emailConfirmation : String;
  password : String;

  constructor(private formBuilder: FormBuilder) {
    console.log('hey');
    this.messageForm = this.formBuilder.group({
      email: ['', Validators.required],
      emailConfirmation: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(8)]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }
    this.success = true;
  }

  ngOnInit() {
  }

}

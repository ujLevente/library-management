import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(8)],
    })
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

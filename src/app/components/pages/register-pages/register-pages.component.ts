import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthenticationServices } from 'src/app/core/services/authentication.service';
import { MessengerServices } from 'src/app/core/services/messenger.service';

@Component({
  selector: 'app-register-pages',
  templateUrl: './register-pages.component.html',
  styleUrls: ['./register-pages.component.scss']
})
export class RegisterPagesComponent implements OnInit {

  registerForm!: UntypedFormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly authenticationServices: AuthenticationServices,
    private readonly messengerServices: MessengerServices
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      phone: ['', [Validators.required]],
    });
  }

  registerUser() {
    this.authenticationServices.registerUser(this.registerForm.value.email, 
      this.registerForm.value.password, this.registerForm.value.name, this.registerForm.value.phone).subscribe(res => {
      if (res.retCode == 0 && res.systemMessage == '') {
        this.registerForm.reset();
      } else {
        this.messengerServices.errorWithIssue();
      }
    })
  }

}

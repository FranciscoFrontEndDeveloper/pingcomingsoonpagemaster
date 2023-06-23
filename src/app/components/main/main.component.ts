import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
})
export class MainComponent {
  formPing!: FormGroup;
  formError!: boolean;
  constructor(private formBuilder: FormBuilder) {
    this.createform();
    this.formError = false
  }

  createform() {
    this.formPing = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
    });
  }

  submitForm() {
    if (this.formPing.valid) {
      this.formError = false;
      console.log(this.formError)
    } else {
      this.formError = true;
      console.log(this.formError)
    }
  }
}

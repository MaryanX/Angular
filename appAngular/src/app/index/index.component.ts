import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  form: FormGroup = this.formBuilder.group({
    name: '',
    mail: '',
    msg: ''
  })
    constructor(private formBuilder: FormBuilder) {}

     //search: FormControl = new FormControl('');


      onSubmit() {
        // La soumission du formulaire est gérée ici
      }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../_services/login.service';
import { UserService } from '../../../_services/users.service';
import { Iuser } from '../../../_interfaces/i_users';
import { first, catchError } from 'rxjs/operators';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


  imgProfil = 'avatar.jpg';
  public date1 = new Date();
  public dateLocale = this.date1.toLocaleString('fr-FR');

  public users: Iuser[] = [];
  registerForm!: FormGroup;
  submitted = false;
  public error?: any;


  constructor(
        private fb: FormBuilder,
        private router: Router,
        private loginService: LoginService,
        private userService: UserService,
    )
    {
        // redirect to home if already logged in
        if (this.loginService.currentUserValue)
        {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
       this.registerForm = this.fb.group({
           firstName: ['tutu', Validators.required],
           lastName: ['titi', Validators.required],
           pseudo: ['toto55', Validators.required],
           email: ['pat@example.com', Validators.required],
           createdDate: [this.dateLocale],
           updateDate: [this.dateLocale],
           password: ['toto', [Validators.required, Validators.minLength(4)]],
           imgProfil: ["toto.jpg"],
           token: ['xxxxxx']
       });
   }
   get f() { return this.registerForm.controls; }

    onSubmit()
    {
      this.submitted = true;
      this.error = '';

      if (this.registerForm.invalid) {
            return;
        }
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe({
                next: () => {
                  alert('ok');
                    this.router.navigate(['/connexion'], { queryParams: { registered: true }});
                },
                error: HttpErrorResponse => {
                  catchError((error: HttpErrorResponse) => {
                    // Gestion de l'erreur ici
                    console.error(error);
                    console.log(error.headers.get('X-Token'));
                    return throwError(error.error);
                  })
                }

              });
        }

}

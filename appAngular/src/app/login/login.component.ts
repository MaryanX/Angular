import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { UserService } from '../../_services/users.service';
import { HttpClient } from '@angular/common/http';

// import { User } from '../../_interfaces/i_users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  email = '';
  password = '';
  submitted = false;
  returnUrl: string;
  hide = true;

  // public users: User[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ){
  }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  onLogin(): void
  {
    this.submitted = true;

    if (this.loginForm.invalid) {
           return;
       }


    this.userService.getAll().subscribe((res: any) => {
      const user = res.find((a: any) => {

        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user)
      {
        alert('ok');
        localStorage.setItem('currentUser', JSON.stringify(user));
        var x = JSON.parse(localStorage.getItem('currentUser'));
        let id = x.id;
          this.router.navigateByUrl('user');
      }
      else
      {
        alert('erroor');
      }
    },
    ( error: any) =>
    {
      alert('errorr');
    }

  );


  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  loginForm: FormGroup;
  registerForm: FormGroup;
  loginInvalid = false;
  registered = true;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
    this.registerForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  handleSubmit() {
    if (this.registered) {
      if (this.loginForm.invalid) return
      this.userService.userLogin(this.loginForm.value).subscribe(
        (res: { _id: string, access_token: string, error: boolean }) => {
          if (res.error) {
            this.loginInvalid = true
            setTimeout(() => this.loginInvalid = false, 2000);
            return
          }
          this.router.navigateByUrl('')
          localStorage.access_token = res.access_token
          this.userService.userId = res._id
        },
        err => console.log(err)
      )
    } else {
      if (this.registerForm.invalid) return
      this.userService.userRegister(this.registerForm.value).subscribe(
        (res: { user: { _id: string }, access_token }) => {
          this.router.navigateByUrl('')
          localStorage.access_token = res.access_token
          this.userService.userId = res.user._id
        },
        err => console.log(err)
      )
    }
  }

}

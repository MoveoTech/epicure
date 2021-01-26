import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private userSerivce: UserService, private r: Router) { }

  loginForm: FormGroup;
  loginInvalid = false;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  };

  handleSubmit() {
    this.userSerivce.login(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res)
        if (res.error) {
          this.loginInvalid = true
          return
        }
        localStorage.access_token = res.access_token
        setTimeout(() => { this.r.navigateByUrl('admin') }, 50);
      },
      err => console.log(err)
    )
  };

}

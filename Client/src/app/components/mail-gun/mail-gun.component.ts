import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailGusService } from 'src/app/services/mail-gus.service';

@Component({
  selector: 'app-mail-gun',
  templateUrl: './mail-gun.component.html',
  styleUrls: ['./mail-gun.component.css']
})
export class MailGunComponent implements OnInit {

  constructor(private fb: FormBuilder, private mailService: MailGusService) { }

  mailForm: FormGroup;

  ngOnInit(): void {
    this.mailForm = this.fb.group({
      from: ['', Validators.required],
      subject: ['', Validators.required],
      body: ['', Validators.required]
    })
  }

  handleSubmit() {
    this.mailService.sendMail(this.mailForm.value).subscribe(
      res => {
        console.log(res)
        this.ngOnInit()
      },
      err => console.log(err),
    )
  }

}

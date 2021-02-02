import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Epicure - The Perfect Food Delivery Experience. Use epicure to find the best restaurant for you, and order your favorite dishes!';
  constructor(private titleService: Title, private metaService: Meta, private userService: UserService) { }
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'Epicure - The Perfect Food Delivery Experience' },
      { name: 'description', content: 'Epicure - The Perfect Food Delivery Experience. Use epicure to find the best restaurant for you, and order your favorite dishes!' },
      { name: 'robots', content: 'index, follow' }
    ]);
    this.userService.verifyLogged().subscribe(
      (res: any) => { this.userService.userId = res._id },
      err => console.log(err)
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: 'log-in.component.html',
  styleUrls: ['log-in.component.css']
})
export class LogInComponent implements OnInit {
  email;
  password;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  processLoginForm(){
    /*procces data and cominucate with server*/
    const allInfo = `Email: ${this.email}. Password: ${this.password}`;
    alert(allInfo);
  }

}

import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any;
  constructor(private service: RestapiService) { }

  ngOnInit() {
  }

  //This getUsers method will return us the List of Users. 
  getUsers(){
    //we declare a variable here
    let resp=this.service.getUsers();
    //capture this value with the help of this response, so subscribe it
    resp.subscribe(data=>this.users=data);
      }

}

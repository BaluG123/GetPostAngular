import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  constructor(private userdata:UserDataService) { 
  }
  loginUser(data:any){
    console.warn(data)
    this.userdata.newUser(data).subscribe((result)=>{
    console.warn(result)
  })
    
  }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
abc:string='HAPPY BANKING'
cad:string = 'Enter your account number'
acno:number=0
pwd:any=''
testp:any=''
cd:any="NEW TWXTS HERE"
database:any={
  1000:{acno:1000,uname:"Feer",password:1000,Balance:20000}
}
abcd:any=localStorage.getItem('list')

  constructor(private router:Router,private db:DatabaseService) { }

  ngOnInit(): void {
    console.log("@loginpage",this.db.database)
  }


  AcnoChange(event:any){
    console.log("PASSING EVENT",event.target.value)
    this.acno = event.target.value
    console.log("ACNO TEST::",this.acno)
  }

  PassChange(a:any){
    this.pwd=a.target.value
    console.log("THIS pwd::",this.pwd)
  }

login(){
  console.log(this.abcd)
  var acno = this.acno
  var pswd = this.pwd
  let abd = this.db.database
  console.log("LOGIN",abd)
 let result = this.db.loginservice(acno,pswd) 
 console.log("RES",result)

 if(result){
  this.router.navigateByUrl('dashboard')
 }else{
  alert("incorrect password")
 }
  
 
}
}

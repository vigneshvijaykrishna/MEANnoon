import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno:any
  pswd:any
  amnt:any
delacc:any
deletetext:boolean=false
  currentusername:any
  logindate:any
  constructor(private db:DatabaseService,private router:Router) { 
    this.currentusername = localStorage.getItem('AccountName')
    this.logindate=new Date()
  }

  ngOnInit(): void {
    if(!localStorage.getItem('AccountNumber')){
   alert('Please login again')
    this.router.navigateByUrl('')
    }
  }

  logout(){
    localStorage.removeItem('AccountNumber')
    this.router.navigateByUrl('')
  }

  deposit(){
    let datab = this.db.database
    if(this.acno in datab){
      if(this.pswd == datab[this.acno]['pswd']){
        datab[this.acno]['balance'] = Number(datab[this.acno]['balance'])+Number(this.amnt)
        console.log("BALANCE ADDED",datab)
        alert("Balance added ")
        localStorage.setItem('accountnumber',this.acno)
        this.router.navigateByUrl('historypage')
      }else{
        alert("Incorrect username or password")
      }
    }else{
      alert("transaction failed")
    }

  }

  withdraw(){
    let datab = this.db.database
    if(this.acno in datab){
      if(this.pswd == datab[this.acno]['pswd']){
        datab[this.acno]['balance'] = Number(datab[this.acno]['balance'])-Number(this.amnt)
        console.log("BALANCE ADDED",datab)
        alert("Balance deducted ")
        localStorage.setItem('accountnumber',this.acno)
        this.router.navigateByUrl('historypage')
      }else{
        alert("Incorrect username or password")
      }
    }else{
      alert("transaction failed")
    }

  }
  Deleteaccount(){
    this.delacc = JSON.parse(localStorage.getItem('AccountNumber')||'')
  }
  
  cancel(){
    this.delacc=""
  }

  Deleted(event:any){
alert("Account deleted")
  }
}

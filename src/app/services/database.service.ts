import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  database:any={
    1000:{accno:1000,name:"Feer",pswd:1000,balance:20000}
  }
  currentname:any
  currentaccno:any
  constructor() { }

  storedata(){
    localStorage.setItem('NEWdatabaseSTORE',JSON.stringify(this.database))

  }

  register(accno:any,pswd:any,name:any,balance:any){
    if(accno in this.database){
      return false
    }else{
      this.database[accno]={
        accno,
        name,
        pswd,
      "balance":balance
      }
    this.storedata()
      return true
    }
  }

  loginservice(username:any,password:any){
    let batb=(JSON.parse(localStorage.getItem('NEWdatabaseSTORE')||''))
  
     if(username in batb){
    
    if(password == batb[username]["pswd"]){
      this.currentname = batb[username]["name"]
      this.currentaccno = batb[username]["accno"]
      localStorage.setItem('AccountNumber',this.currentaccno)
      localStorage.setItem('AccountName',this.currentname)
      alert("LOGIN SUCCESSFULL")
      return true
    }else{
      alert("incorrect password try again!!!!!!!")
      return false
    }
  }else{
    alert("User does not Exist")
    return false
  }
}


  }

 




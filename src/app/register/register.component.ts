import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { DatabaseService } from '../services/database.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // name:any
  // accno:any
  // pswd:any
  storagedb:any=[]

registerForm = this.fb.group({
  //form array
  name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  pswd:[''],
  acno:['']
})



 

  constructor(private ff:DatabaseService,private route:Router,private fb:FormBuilder) { }

  ngOnInit(): void {

  }


  // Namefetch(event:any){
  //   this.name = event.target.value

  // }

  // accnofetch(event:any){
  //   this.accno = event.target.value
  // }

  // passwordfetch(event:any){
  //   this.pswd = event.target.value
  // }

  // signup(){
  //  var list=[]
   
  //  var data = {
  //   name: this.name,
  //   accno: this.accno,
  //   password: this.pswd
   
  // };
  // list.push(data)

  // list = list.concat(JSON.parse(localStorage.getItem('list')||'[]'));
  // console.log(list);
  // localStorage.setItem("list", JSON.stringify(list));
  // console.log(this.accno,this.pswd,this.name)
  // }

  signup(){
    //new variable reg
   
console.log("Register Form",this.registerForm)
var name:any=this.registerForm.value.name
var pswd:any=this.registerForm.value.pswd
var acno:any=this.registerForm.value.acno
    if(this.registerForm.valid){
      // reg
      console.log(this.ff.database)
      let result = this.ff.register(acno,pswd,name,0)
      console.log("DATAS:",name,pswd
      ,acno)
      // this.ff.register2(this.accno,this.pswd,this.name,0)
      console.log(this.ff.database)
      if(result){
        alert("done")
        this.route.navigateByUrl('')
        console.log(this.ff.database)
      }else{
        alert('failed')
      } 
      // reg
    }else{
      alert("invalid form")
    }
   
  }

}

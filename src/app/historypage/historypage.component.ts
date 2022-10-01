import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-historypage',
  templateUrl: './historypage.component.html',
  styleUrls: ['./historypage.component.css']
})
export class HistorypageComponent implements OnInit {
accountnum:any
name:any
balance:any
  constructor(private db:DatabaseService) { }

  ngOnInit(): void {
    var datab = this.db.database
    console.log(datab)
    var abc:any = localStorage.getItem('accountnumber')
    console.log("ASD",abc)
    this.accountnum=datab[abc]['accno']
    console.log(datab[abc]['accno'])
    this.name=datab[abc]['name']
    this.balance = datab[abc]['balance']
  }


}

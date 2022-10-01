import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.css']
})
export class DeleteaccountComponent implements OnInit {
@Input() item:any | undefined

@Output() onCancel = new EventEmitter()
@Output() onDelete = new EventEmitter()
  constructor() { 

  }

  ngOnInit(): void {
  }


  cancel(){
    this.onCancel.emit()
  }

  deleted(){
    this.onDelete.emit(this.item)
  }
}

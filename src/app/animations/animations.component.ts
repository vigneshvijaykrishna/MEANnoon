import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '400px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
      
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('2s')
      ]),
    ]),
  ],
})
export class AnimationsComponent implements OnInit {
IsOpen:boolean=true
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.IsOpen = !this.IsOpen
    setTimeout(()=>{this.IsOpen=true},5000)
  }
}

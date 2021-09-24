import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'incredecre',
  templateUrl: './incredecre.component.html',
  styleUrls: ['./incredecre.component.css']
})
export class IncredecreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  outputNum = 0;
  rndNumber = (Math.random() * 10).toFixed(0);

  
  Increment(){
    this.outputNum =  this.outputNum += Math.floor(Math.random( ) * 10);
    
  }
  Decrement(){
    this.outputNum =  this.outputNum -= Math.floor(Math.random( ) * 10);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private title = "Stateless component";
  private items:Array<string> = [];
  constructor() { 
  }

  addToParent(e){
    console.log(e.value);
    this.items.push(e.value);
  }

}

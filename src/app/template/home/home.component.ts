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

  /**
   * Capturing event emitted by 'stateless-comp'
   * 
   * @param {*} e 
   * @memberof HomeComponent
   */
  addToParent(e:any):void{
    console.log(e.value);
    /**
     * Adding value into items.
     */
    this.items.push(e.value);
  }

}

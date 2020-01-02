import { Component, Output,EventEmitter  } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  username:string = "Shaik Akram Hussain";
  
  childData:string;
  name:string= 'Angular'; 
  master : String="send from parent";

  parentMethod(data){
    this.childData=data;
  }
  //Getting value from child
  childToParent(name){
    this.master=name;
  }
}
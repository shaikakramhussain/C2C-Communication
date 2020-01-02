import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
//Parent to child communication
  @Input()
  uname:string;
  name:string;
 //Child to parent communication
  @Output()
  notify:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  ngOnInit() {
  }
  //getting value from parent to child
    @Input('childToMaster') masterName: string;
    @Output() childToParent = new EventEmitter<String>();
    
    sendToParent(name){
      alert("Data Sending to Parent");
      this.childToParent.emit(name);
    }
  passData(){
    this.notify.emit("This message is coming from child component");
  }
}

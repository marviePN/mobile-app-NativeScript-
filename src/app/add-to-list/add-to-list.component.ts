import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Item } from '../item/item';




@Component({
  selector: 'ns-add-to-list',
  templateUrl: './add-to-list.component.html',
  styleUrls: ['./add-to-list.component.css']
})
export class AddToListComponent implements OnInit {

  @Input() item : Item
  @Input() textBtn : string
  @Output() dataEvent = new EventEmitter();
  name = "";
  role = "";

  constructor() { 
  }

 

  ngOnInit() {
  }

  onSubmit() {
    let obj = {
      name: this.name,
      role: this.role
    }
    this.dataEvent.emit(obj)

    alert("You Added:  " + obj.name)

    
    }

}
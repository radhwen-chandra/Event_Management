import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-listcrud',
  templateUrl: './listcrud.component.html',
  styleUrls: ['./listcrud.component.css']
})
export class ListcrudComponent implements OnInit {

  lists:   any[] = [];
  constructor(private es: EventService) { }

  ngOnInit(): void {
    this.getallevents()
  }

  getallevents(){
    this.es.getAll().subscribe((res)=>{
      this.lists = res
    },(err)=>{
      console.log(err)
    })
  }
}

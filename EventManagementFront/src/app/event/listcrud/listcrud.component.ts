import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-listcrud',
  templateUrl: './listcrud.component.html',
  styleUrls: ['./listcrud.component.css']
})

export class ListcrudComponent implements OnInit {

  selectedStatus: string[] = [];
  lists:   any[] = [];
  constructor(private es: EventService,private router: ActivatedRoute) { }

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
  deleteEvent(id:number){
    this.es.delete(id).subscribe(
      (res)=>{
        this.getallevents();
      }
    )
  }
  updateSelectedStatus(event: any, status: string) {
    if (event.target.checked) {
      this.selectedStatus.push(status);
    } else {
      const index = this.selectedStatus.indexOf(status);
      if (index > -1) {
        this.selectedStatus.splice(index, 1);
      }
    }
    this.getEventsByStatus();
  }

  getEventsByStatus() {
    this.es.getEventByStatus(this.selectedStatus)
      .subscribe((events) => this.lists = events);
  }
}

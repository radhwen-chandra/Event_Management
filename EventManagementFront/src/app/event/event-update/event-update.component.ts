import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder, 
    private es: EventService, 
    private route: ActivatedRoute
    ) {
    this.form = this.formBuilder.group({
      dateEvent: ['', Validators.required],
      adressEvent: ['', [Validators.required]],
      organiser: ['', [Validators.required]],
      description: ['', [Validators.required]],
      telNumber: ['', [Validators.required]],
      ticketPrice: ['', [Validators.required]],
      nbrParticipant: ['', [Validators.required]],
      email: ['', [Validators.required]],
      status: ['', [Validators.required]],
      eventTitle: ['', [Validators.required]],
     
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Use the ID value as needed
      console.log('ID:', id);
  })
  }
  onSubmit() {

  }
}

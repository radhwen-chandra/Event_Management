import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogisticsService } from 'src/app/services/logistics.service';
import { LogisticDetails, Logistics } from '../models/logistic.model';


@Component({
  selector: 'app-add-logistics',
  templateUrl: './add-logistics.component.html',
  styleUrls: ['./add-logistics.component.css']
})

export class AddLogisticsComponent {
  form: FormGroup;
  form1: FormGroup;

  logisticDetails : LogisticDetails[] = [];

  constructor(private formBuilder: FormBuilder, private ls: LogisticsService) {
    this.form = this.formBuilder.group({
      commentaire: ['', [Validators.required]],
      datelogistic: ['', Validators.required],
      totalCost: ['', [Validators.required]],

    });

    this.form1 = this.formBuilder.group({
      libele: ['', [Validators.required]],

    });
   }
  onSubmit() {
    console.log(this.form.value)
    if (this.form.valid) {
      let logistic : Logistics = this.form.value;
      logistic.logisticDetails = this.logisticDetails;
      debugger
      this.ls.create(this.form.value).subscribe(
        Response => {
          console.log('Données envoyées avec succès !', Response);
          this.form.reset();
        },
        error => {
          console.error('Une erreur s\'est produite lors de l\'envoi des données.', error);
        }
      );
    }
  }

  afterAddLogisticDetails(){
    if (this.form1.valid) {
      this.logisticDetails.push(this.form1.value);
    }
  }



}

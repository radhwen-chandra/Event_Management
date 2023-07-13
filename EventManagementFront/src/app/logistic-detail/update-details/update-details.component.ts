import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogisticsDetailsService } from 'src/app/services/logistics-details.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  form: FormGroup;
  id!: number;

  constructor(
    private formBuilder: FormBuilder,
    private ls: LogisticsDetailsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      libele: ['', Validators.required],
      cost: ['', Validators.required],
      participants: ['', Validators.required],
      id: [this.id],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getByID(this.id)
  }
  getByID(id: number){
    this.ls.getById(id).subscribe(res =>{
      this.form.patchValue(res)
      console.log(res)
    })
  }
  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {

      this.ls.update(this.id, this.form.value).subscribe(
        response => {
          console.log('Données mises à jour avec succès !', response);
          this.router.navigate(['/logisticdetails/list']);
        },
        error => {
          console.error('Une erreur s\'est produite lors de la mise à jour des données.', error);
        }
      );
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { LogisticsService } from 'src/app/services/logistics.service';

@Component({
  selector: 'app-logistics-list',
  templateUrl: './logistics-list.component.html',
  styleUrls: ['./logistics-list.component.css']
})
export class LogisticsListComponent implements OnInit {

  lists: any[] = [];
  sortedLists: any[] = []; // Nouvelle liste triée par date
  searchDate: string = '';


  constructor(private ls: LogisticsService) { }

  ngOnInit(): void {
    this.getAllLogistics(); 
  }

  getAllLogistics() {
    this.ls.getAll().subscribe(
      (res) => {
        console.log(res)
        this.lists = res;
        this.sortListsByDate();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  sortListsByDate() {
    this.sortedLists = this.lists.sort((a, b) => {
      return new Date(a.datelogistic).getTime() - new Date(b.datelogistic).getTime();
    });
  }
  
  getListByDate(date: string) {
    this.sortedLists = this.lists.filter((item) => {
      return item.datelogistic === date;
    });
  }
  deleteLogistics(id: any) {
    // Call the delete method of your service passing the ID
    this.ls.delete(id).subscribe(
      (res) => {
        console.log('Détail supprimé avec succès !', res);
        // Update the list after deletion (optional)
        this.getAllLogistics();
      },
      (err) => {
        console.error('Une erreur s\'est produite lors de la suppression du détail.', err);
      }
    );
  }
  searchByDate() {
    this.sortedLists = this.lists.filter((item) => {
      return item.datelogistic === this.searchDate;
    });
  }  
  
}
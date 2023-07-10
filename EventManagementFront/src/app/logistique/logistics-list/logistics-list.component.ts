import { Component, OnInit } from '@angular/core';
import { LogisticsService } from 'src/app/services/logistics.service';

@Component({
  selector: 'app-logistics-list',
  templateUrl: './logistics-list.component.html',
  styleUrls: ['./logistics-list.component.css']
})
export class LogisticsListComponent implements OnInit {
  lists: any[] = [];
  sortedLists: any[] = [];
  startDate: Date | null = null;
  endDate: Date | null = null;
  


  currentPage: number = 1;
  itemsPerPage: number = 7;
  totalPages: number = 0;
  pages: number[] = [];

  constructor(private ls: LogisticsService) { }

  ngOnInit(): void {
    this.getAllLogistics();
  }

  getAllLogistics() {
    this.ls.getAll().subscribe(
      (res) => {
        this.lists = res;
        this.sortListsByDate();
        // this.searchItems(); // Ajoutez cette ligne pour effectuer une recherche initiale sur tous les éléments
        this.updatePagination();
      },
      (err) => {
        console.log(err);
      }
    );
  }
 
  
  searchByDateRange() {
    const startDate = this.startDate ? new Date(this.startDate) : new Date(0);
    const endDate = this.endDate ? new Date(this.endDate) : new Date(Number.MAX_SAFE_INTEGER);
  
    this.sortedLists = this.ls.searchByDateRange(this.lists, startDate, endDate);
    this.updatePagination();
    this.currentPage = 1; // Réinitialiser la page courante à 1 pour afficher les résultats à partir de la première page
  }
  
   
   
  sortListsByDate() {
    this.sortedLists = this.lists.sort((a, b) => {
      return new Date(a.datelogistic).getTime() - new Date(b.datelogistic).getTime();
    });
  }

  deleteLogistics(id: any) {
    this.ls.delete(id).subscribe(
      (res) => {
        console.log('Détail supprimé avec succès !', res);
        this.getAllLogistics();
      },
      (err) => {
        console.error('Une erreur s\'est produite lors de la suppression du détail.', err);
      }
    );
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.sortedLists.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  get pagedLists() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.sortedLists.slice(startIndex, endIndex);
  }
}

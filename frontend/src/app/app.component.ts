import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  searchText:string='';
  title = 'frontend';
  constructor(private apiService:ApiService){

  }
  search(){
    this.apiService.searchProducts(this.searchText)
    // .subscribe((data:any)=>{
    //   this.products=data.products
    // })
  }
  clearSearch(){
    // if(this.searchText==''){
    //   this.products=this.productsTmp;
    // }
    this.apiService.clearSearch(this.searchText)
  }
  searchByEnterKey(){
    this.search();
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products:any=[];
  searchText:string='';
  productsTmp:any=[]

  constructor(private apiService : ApiService){
  }
  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data)=>{
      this.products=data.products;
      this.productsTmp=data.products;
    })
    
  }
  search(){
    this.apiService.searchProducts(this.searchText).subscribe((data:any)=>{
      this.products=data.products
    })
  }
  clearSearch(){
    if(this.searchText==''){
      this.products=this.productsTmp;
    }
  }
  searchByEnterKey(){
    this.search();
  }
}

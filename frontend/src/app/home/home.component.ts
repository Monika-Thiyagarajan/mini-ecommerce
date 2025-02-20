import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products:any=[];
  constructor(private apiService : ApiService){
    this.apiService.getProducts().subscribe((data)=>{
      console.log(data)
      this.products=data.products;
    })
  }
  ngOnInit(): void {
    
  }
}

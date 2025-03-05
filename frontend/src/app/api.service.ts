import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  productsSource = new BehaviorSubject([])
  currentProducts = this.productsSource.asObservable()
  productTemp = [];

  getProducts(){
    // return this.http.get(environment.apiUrl+'/api/v1/products');
     this.http.get(environment.apiUrl+'/api/v1/products').subscribe((data:any)=>{
      this.productsSource.next(data)
      this.productTemp=data
     })
  }
  searchProducts(searchText:string){
    // return this.http.get(environment.apiUrl+'/api/v1/products',{
    //   params:{keyword:searchText}
    // });
    this.http.get(environment.apiUrl+'/api/v1/products',{
      params:{keyword:searchText}
    }).subscribe((data:any)=>{
      this.productsSource.next(data)
     })
  }
  clearSearch(searchText:string){
    if(searchText==''){
      this.productsSource.next(this.productTemp)
    }
  }
}

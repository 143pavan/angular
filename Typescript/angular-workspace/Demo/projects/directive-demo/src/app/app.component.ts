import { Component } from '@angular/core';
import { FakeStoreProductContract } from './fakestore.contract';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   public product:FakeStoreProductContract={
    id:0,
    title:"",
    category:"",
    description:"",
    image:"",
    price:0,
    rating:{
      count:0,
      rate:0
    }
   };

   public LoadProduct(id:number){
    fetch('https://fakestoreapi.com/products/'+id)
    .then(res=>res.json())
    .then(data=>{
      this.product=data;

    })
   }
   public count:number=1;
   ngOnInit(){
    this.LoadProduct(this.count);
   }
   NextClick(){
    this.count++;
    this.LoadProduct(this.count);
   }
   PrevClick(){
    this.count--;
    this.LoadProduct(this.count);
   }
}

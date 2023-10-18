import { Component } from '@angular/core';
import { ProductContract } from '../product.contract';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent {
  public product:ProductContract ={
    Name:"",
    Price:0,
    Stock:false,
    ShippedTo:""
  };
}

import { Component, OnInit } from '@angular/core';
import { MyService } from '../service/my.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{

  product:any

  constructor(private service:MyService){}

  ngOnInit(): void {
    this.service.getProductList().then((res:any)=>res.json()).then(data=>this.product=data)
    
    
  }

}

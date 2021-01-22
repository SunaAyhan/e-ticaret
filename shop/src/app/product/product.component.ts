import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';

import { AlertifyService } from '../services/alertify.service';
//declare let alertify: any;

import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  //alertifyService: any;  //alertify ile ilgli soru nvar ya normal alert çalışıyor aynenn

  constructor(
    private alertifyService: AlertifyService,
   private productService:ProductService,
   private activatedRoute:ActivatedRoute)
    { }

  title = "Ürün Listesi"
  filterText = ""
  products: Product[] = [];

 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
    this.productService.getProducts(params["categoryId"]).subscribe((data: Product[])=>{
      this.products =  data
    });
    
  })
}

addToCart(ProductI:Product)
{
this.alertifyService.success(`${ProductI.name} added`);
  //alert(p.name + "added");
}
  

}

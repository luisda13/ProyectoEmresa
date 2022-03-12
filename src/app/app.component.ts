import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product, ProductsService } from './products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pys-angular';
  products:Product[] = []

  constructor(private ps: ProductsService, private dialog:MatDialog){

  }

  ngOnInit(){
    this.products = this.ps.getProducts();
  }
 
}



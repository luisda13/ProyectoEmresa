import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServicioPersona} from '../servic/servicio';
import productos from '../../../assets/productList.json';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public id: number;
  puerta: boolean=false;
  todosProductos:Array<any> = productos;
  name: String;
  price: number;
  retailPrice: number;
  pictureURL: String;
  description: String;
  brand: String;
  color: String;
  ratingAvg: number;
  badges: string;
  stock: number;
  cadenaBtn1:String="";
  cadenaBtn2:String="";
  btn1B:boolean=false;
  btn2B:boolean=false;
  suministros:boolean=true;
  constructor(private servicio: ServicioPersona,private route: ActivatedRoute) {
    this.id=this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    

      for(let i =0;i<this.todosProductos.length;i++){
        if(this.id==this.todosProductos[i].ProductID){
          this.name=this.todosProductos[i].Name;
          this.price=this.todosProductos[i].Price;
          this.retailPrice=this.todosProductos[i]["Retail Price"];
          this.pictureURL=this.todosProductos[i].PictureURL;
          this.description=this.todosProductos[i].Description;
          this.brand=this.todosProductos[i].Brand;
          this.color=this.todosProductos[i].Color;
          this.badges=this.todosProductos[i].Badges;
          this.ratingAvg=this.todosProductos[i]["Rating Avg"];
          this.stock=this.todosProductos[i].Stock;
        }
      }
      

      for (var i = 0; i< this.badges.length; i++) {
        var caracter = this.badges.charAt(i);
        if( caracter == "|" || this.puerta) {
          this.puerta=true;
          if(caracter != "|" && caracter != " ")
          this.cadenaBtn2+=caracter;
        }else{
          this.cadenaBtn1+=caracter;
        }
      }
      if(this.cadenaBtn1!=""){
        this.btn1B=true;
      }
      if(this.cadenaBtn2!=""){
        this.btn2B=true;
      }
      console.log( "btn1 "+this.btn1B+" conte "+this.cadenaBtn1)
      console.log( "btn2 "+this.btn2B+" conte "+this.cadenaBtn2)
  }

  agregar(){
    if(this.stock!=0){
      this.suministros=false;
    }
    
  }
}

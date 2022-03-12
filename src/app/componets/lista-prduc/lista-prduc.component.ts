import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-prduc',
  templateUrl: './lista-prduc.component.html',
  styleUrls: ['./lista-prduc.component.css']
})
export class ListaPrducComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  lista(): void{
    this.router.navigate(['body'])
  }


}

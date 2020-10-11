import { Component, OnInit } from '@angular/core';

import { Venda } from './../models/venda';
import { VendaService } from './../services/venda.service';
@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'products', 'date', 'price','detail']
  dataSource: Venda[];
  venda = { } as Venda;
  isLoadingResults = true;
  constructor(private vendaService: VendaService) {}


  ngOnInit(): void {
    this.vendaService.getVendas().subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}

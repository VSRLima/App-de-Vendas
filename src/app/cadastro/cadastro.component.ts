import { Component, OnInit } from '@angular/core';

import { Venda } from './../models/venda';
import { VendaService } from './../services/venda.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  displayedColumns: string[] = ['id', 'products', 'date', 'price','detail']
  dataSource: Venda[];
  venda = { } as Venda;
  isLoadingResults = true;

  constructor(private vendaService: VendaService) {}

  ngOnInit() {
    this.vendaService.getVendas().subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { Venda } from './../models/venda';
import { VendaService } from './../services/venda.service';





@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  venda = {} as Venda;
  vendas: Venda[];
 
  

  constructor(private vendaService: VendaService) {}

  ngOnInit() {
    this.getVendas();
  }

  saveVenda(form: NgForm) {
    if(this.venda.id !== undefined) {
      this.vendaService.updateVenda(this.venda).subscribe(() => {this.cleanForm(form);
      });
    } else {
      this.vendaService.saveVenda(this.venda).subscribe(() => {this.cleanForm(form);
      });
    }
  }

  getVendas() {
    this.vendaService.getVendas().subscribe((vendas: Venda[]) => {this.vendas = vendas;
    });
  }
  
  deleteVenda(venda: Venda) {
    this.vendaService.deleteVenda(venda).subscribe(() => {this.getVendas();
    });
  }

  editVenda(venda: Venda) {
    this.venda = {...venda};
  }

  cleanForm(form: NgForm) {
    this.getVendas();
    form.resetForm();
    this.venda = {} as Venda;
  }

 
}

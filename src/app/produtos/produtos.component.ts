import { Component, OnInit } from '@angular/core';
import { Produtos } from './../models/produtos';
import { ProdutosService } from './../services/produtos.service';
import { NgForm } from '@angular/forms';
import { VendaService } from './../services/venda.service';
import { Venda } from './../models/venda';



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto = {} as Produtos;
  produtos: Produtos[];
  venda = {} as Venda;
  vendas: Venda[] = [];
  dataSource = this.produtosService.getProducts();
  displayedColumns: string[] = ['position', 'name', 'price', 'amount'];
  

  constructor(private produtosService: ProdutosService, private vendaService: VendaService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.produtosService.getProducts().subscribe((produtos: Produtos[]) => {this.produtos = produtos})
  }
  getProductsById(id: number) {
    this.produtosService.getProductsById(id).subscribe((produtos: Produtos) => {this.produto = produtos})
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
  
  cleanForm(form: NgForm) {
    this.getVendas();
    form.resetForm();
    this.venda = {} as Venda;
    this.vendas = [];
  }

  onSelect(products) {
    this.venda.products = products
    
    console.log(this.venda.products)
  } 
};


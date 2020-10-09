import { Component, OnInit } from '@angular/core';
import { Produtos } from './../models/produtos';
import { ProdutosService } from './../services/produtos.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
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
  vendas: Venda[];
  receber = [];
  isLoadingResults = false;
  productForm: FormGroup;
  dataSource = this.produtosService.getProducts();
  displayedColumns: string[] = ['position', 'name', 'price', 'amount'];
  

  constructor(private produtosService: ProdutosService, private vendaService: VendaService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getProducts();
    this.productForm = this.formBuilder.group ({
      'products': [null, Validators.required]
      })
  }

  getProducts() {
    this.produtosService.getProducts().subscribe((produtos: Produtos[]) => {this.produtos = produtos})
  }
  getProductsById(id: number) {
    this.produtosService.getProductsById(id).subscribe((produtos: Produtos) => {this.produto = produtos})
  }

  addVenda() {
    this.isLoadingResults = true;
    this.vendaService.saveVenda(this.venda).subscribe(res => {
      const id = res['id'];
      this.isLoadingResults = false;
      this.router.navigate(['/detail', id]);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    })
  }
  
  cleanForm(form: NgForm) {
    form.resetForm();
    this.venda = {} as Venda;
  }

  onSelect(products) {
  this.receber.push(products)
  for (var i = 0; i < this.receber.length; i++) {
    this.venda = {id: null, products: this.receber[i].id, date: null, price: this.receber[i].price};
    this.receber = [];
  }
    console.log(this.venda);
  };
};


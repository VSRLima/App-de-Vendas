import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Venda } from './../models/venda';
import { VendaService } from './../services/venda.service';

@Component({
  selector: 'app-detail-venda',
  templateUrl: './detail-venda.component.html',
  styleUrls: ['./detail-venda.component.css']
})
export class DetailVendaComponent implements OnInit {

  produto: Venda = {id: null, products: '', date: null, price: null};
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private service: VendaService) { }

  ngOnInit(): void {
    this.getVenda(this.route.snapshot.params['id']);
  }

  getVenda(id) {
    this.service.getVendasById(id).subscribe(data => { this.produto = data; console.log(this.produto); this.isLoadingResults = false;});
  }

  deleteVenda(id) {
    this.isLoadingResults = true;
    this.service.deleteVenda(id).subscribe(res => {
      this.isLoadingResults = false;
      this.router.navigate(['/vendas']);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
      }
    );
  }
}

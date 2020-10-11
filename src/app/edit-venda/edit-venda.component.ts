import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { VendaService } from './../services/venda.service';

@Component({
  selector: 'app-edit-venda',
  templateUrl: './edit-venda.component.html',
  styleUrls: ['./edit-venda.component.css']
})
export class EditVendaComponent implements OnInit {

    id: number;
    productForm: FormGroup;
    purchase_date: Date;
    price: number;
    isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private service: VendaService) { }

  ngOnInit(): void {
    this.getVenda(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
      'purchase_date': [null, Validators.required],
      'price': [null, Validators.required]
    });
  }

  getVenda(id) {
    this.service.getVendasById(id).subscribe(data => {
      this.id = data.id;
      this.productForm.setValue({
        purchase_date: data.purchase_date,
        price: data.price
      });
    });
  }

  //O problema aqui é que o objeto que está sendo enviado acaba descontruindo o array de objetos que está no bando de dados na parte de vendas, ou seja, o que era um array com dois ou mais produtos, se transforma em um único produto.
  updateVenda(form: NgForm) {
    this.isLoadingResults = true;
    this.service.updateVenda(this.id, form).subscribe(res => {this.isLoadingResults = false;
    this.router.navigate(['/edit/' + this.id ]);
  }, (err) => {
    console.log(err);
    this.isLoadingResults = false;
  });
  }
}

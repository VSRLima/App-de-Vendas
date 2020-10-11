import { NgModule } from '@angular/core';
import { ProdutosComponent } from './../app/produtos/produtos.component';
import { RouterModule, Routes } from '@angular/router';

import { EditVendaComponent } from './edit-venda/edit-venda.component';
import { DetailVendaComponent } from './detail-venda/detail-venda.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {path: '', redirectTo: '/vendas', pathMatch: 'full'},
  {path: 'edit/:id', component: EditVendaComponent},
  {path: 'detail/:id', component: DetailVendaComponent},
  {path: 'vendas', component: CadastroComponent},
  {path: 'produtos', component: ProdutosComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

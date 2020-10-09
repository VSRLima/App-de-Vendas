import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { ProdutosComponent } from './../app/produtos/produtos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/vendas', pathMatch: 'full'},
  {path: 'vendas', component: CadastroComponent},
  {path: 'produtos', component: ProdutosComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

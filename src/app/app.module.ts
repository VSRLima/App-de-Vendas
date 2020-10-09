import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { EditVendaComponent } from './edit-venda/edit-venda.component';
import { DetailVendaComponent } from './detail-venda/detail-venda.component';




@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ProdutosComponent,
    MenuComponent,
    EditVendaComponent,
    DetailVendaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule, 
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule, 
    AppRoutingModule, 
    MatButtonModule, 
    MatCheckboxModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,
    MatCardModule, MatInputModule, MatFormFieldModule
  ],
  exports: [
    MatInputModule, MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

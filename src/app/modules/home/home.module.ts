import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers/home.component';
import { NgxsModule } from '@ngxs/store';
import { ProductState } from './stores/states/product.state';
import { ProductsServices } from './services/products.services';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [HomeComponent, ProductsListComponent],
  providers: [ProductsServices],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    NgxsModule.forFeature([ProductState]),
  ],
})
export class HomeModule {}

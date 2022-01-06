import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home.component';
import { ProductsResolver } from './resolvers/products.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      products: ProductsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class HomeRoutingModule {}

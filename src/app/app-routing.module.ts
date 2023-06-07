import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductParentComponent } from './components/product-parent/product-parent.component';
import { NotFoundError } from 'rxjs';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ObserervablesComponent } from './components/obserervables/obserervables.component';
import { AdminservService } from './services/admin.service';
import { AdminTempComponent } from './components/admin/admin-temp/admin-temp.component';
import { TemplateFormComponent } from './components/temp-form/temp-form.component';
import { LoginComponent } from './components/login/login.component';
import { adminRoutesGuardGuard } from './components/auth/auth.component';
import { EditPrdComponent } from './components/admin/edit-prd/edit-prd.component';
import { userauthGuard } from './userauth.guard';

const routes: Routes = [
  // Default path
  { path: '', component: ProductParentComponent },

  { path: 'home', component: HomeComponent, title: 'Home page' },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Products page',
  },
  {
    path: 'all',
    component: ProductParentComponent,
    title: 'Products Parent page',
  },

  {
    path: 'productDetails/:prodId',
    component: ProductDetailsComponent,
    title: 'Product Details page',
  },

  { path: 'admin', component: AdminTempComponent, title: 'temp' },
  { path: 'obs', component: ObserervablesComponent, title: 'observable' },
  {
    path: 'edit/:prodId',
    canActivate: [userauthGuard],
    component: EditPrdComponent,
    title: 'edit',
  },

  {
    path: 'signup',
    component: TemplateFormComponent,
    title: 'company | signup',
  },
  { path: 'login', component: LoginComponent, title: 'company | Login' },

  {
    path: 'users',
    loadChildren: () =>
      import('./components/user/user-m/user-m.module').then(
        (m) => m.UsersListModule
      ),
  },
  { path: '**', component: NotFoundError, title: '404 Page not found' },
];

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductParentComponent } from './components//product-parent/product-parent.component';
import { ImgStyleDirective } from './directives/my-directive.directive';
import { VisaPipe } from './pipes/visa.pipe';
import { CalcDiscountPipe } from './pipes/calc-dis.pipe';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ObserervablesComponent } from './components/obserervables/obserervables.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminTempComponent } from './components/admin/admin-temp/admin-temp.component';
import { LoginComponent } from './components/login/login.component';
import { TemplateFormComponent } from './components/temp-form/temp-form.component';
import { UserComponent } from './components/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsermodComponent } from './components/user/usermod/usermod.component';
import { EditPrdComponent } from './components/admin/edit-prd/edit-prd.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    FooterComponent,
    ProductParentComponent,
    ImgStyleDirective,
    VisaPipe,
    CalcDiscountPipe,
    VisaPipe,
    HomeComponent,
    ProductDetailsComponent,
    ObserervablesComponent,
    AdminTempComponent,
    LoginComponent,
    TemplateFormComponent,
    UserComponent,
    EditPrdComponent,

    // UsermodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { ItemBrandsComponent } from './item-category/item-brands/item-brands.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsListComponent,
    ItemCategoryComponent,
    ItemBrandsComponent,
    ProductGridComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

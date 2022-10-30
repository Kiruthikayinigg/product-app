import { GgProductsService } from '../ggproducts.service';


import { Component, OnInit } from '@angular/core';
import { Products } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  product: Products[];
  isModalOpen = false;
  currentproduct: any;

  constructor(private ggProductsService: GgProductsService) {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  ngOnInit(): void {
    this.product= this.ggProductsService.getAllProducts();
  }

  productshow(productcode: string)
  {
    // this.currentproduct = this.ggProductsService.getProducts(productcode);
    this.currentproduct = this.product.find(product=> product.code === productcode);
  }


}


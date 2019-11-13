import { CheckoutRoutingModule } from './checkout.routing';
import { SharedModule } from '../../../shared/shared.module';
import { CheckoutNavbarComponent } from './checkout-navbar/checkout-navbar.component';

import { ProductsComponent } from './products/products.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';


@NgModule({
	imports: [ CommonModule, SharedModule, CheckoutRoutingModule ],
	declarations: [
		CheckoutComponent,
	
		
		ProductsComponent,
		
		CheckoutNavbarComponent
	],
	exports: [ CheckoutComponent ]
})
export class CheckoutModule {}

import { CartProductsComponent } from './cart-products/cart-products.component';
import { FavouriteProductsComponent } from './favourite-products/favourite-products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Routes } from '@angular/router';
import { IndexComponent } from '../../index/index.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from 'src/app/shared/services/auth_gaurd';

export const ProductRoutes: Routes = [
	{
		path: 'products',
		children: [
			{
				path: 'add-products',
				component: AddProductComponent
			},
			
			{
				path: 'all-products',
				component: ProductListComponent,

			},
			{
				path: 'favourite-products',
				component: FavouriteProductsComponent,
				canActivate: [ AuthGuard ]
				
			},
			{
				path: 'cart-items',
				component: CartProductsComponent,
				canActivate: [ AuthGuard ]
			},
			{
				path: 'checkouts',
				loadChildren: './checkout/checkout.module#CheckoutModule'
			},

			{
				path: 'product/:id',
				component: ProductDetailComponent
			}
		]
	}
];

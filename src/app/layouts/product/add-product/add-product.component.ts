import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

declare var $: any;
declare var require: any;
declare var toastr: any;
const shortId = require('shortid');
const moment = require('moment');

@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: [ './add-product.component.scss' ]
})
export class AddProductComponent implements OnInit {
	public Editor = ClassicEditor;
	ckeConfig: any;
	product: Product = new Product();
	constructor(private productService: ProductService) {}

	ngOnInit() {}

	createProduct(productForm: NgForm) {
		productForm.value['productId'] = 'PROD_' + shortId.generate();
		productForm.value['productAdded'] = moment().unix();
		productForm.value['ratings'] = Math.floor(Math.random() * 5 + 1);
		if (productForm.value['productImageUrl'] === undefined) {
			productForm.value['productImageUrl'] = 'http://via.placeholder.com/640x360/007bff/ffffff';
		}

		productForm.value['favourite'] = false;

		const date = productForm.value['productAdded'];

		this.productService.createProduct(productForm.value);

		this.product = new Product();

		$('#exampleModalLong').modal('hide');

		toastr.success('Blog ' + productForm.value['productName'] + 'is added successfully', 'Blog Creation');
	}

	setEditorConfig() {
		this.ckeConfig = {
		  removePlugins: ['ImageUpload', 'MediaEmbed'],
		  heading: {
			options: [
			  { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
			  { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
			  { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
			  { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
			  { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
			  { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
			  { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
			  { model: 'Formatted', view: 'pre', title: 'Formatted' },
			]
		  }
		};
	  }
}

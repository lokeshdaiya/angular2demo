import {Component,Input} from '@angular/core';
import {IProduct} from './product.model';

@Component({
    selector:'product',
    template:`
        <div class="Product">
            <h1>{{productDeatils.name | uppercase}}</h1>
            <b>Price: {{productDeatils.price|currency:'INR':true}}</b><br />
            <b>rating: {{productDeatils.rating|number : '1.1-3' }}</b><br />
            <b>quantity: {{productDeatils.quantity}}</b><br />
            <b>launch date: {{productDeatils.date |date }}</b>
            <b>Description: {{productDeatils.description|summary : 30 : 50 }}</b>
            <hr/>
        </div>
    `,
    styleUrls:['./app/product.component.css']
})


export class ProductComponent {
    @Input('pName') prodcutName:string;
    @Input('pDetails') productDeatils:IProduct;
}



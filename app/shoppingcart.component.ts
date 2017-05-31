import {Component} from '@angular/core';
import {IProduct} from './product.model';

@Component({
    selector:'shopping-cart',
    templateUrl:'app/shoppingcart.component.html',
    styles:[`
    h1{
            text-align:center;
            background-color:black;
            color:white;
    }
   `]
}) 

export class ShoppingCartComponent{
    newProduct:any = {};
    name="";
    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    products:any[] = [
            { name:"Laptop", price:30000, quantity:100, rating:4,date:new Date(),description:this.desc },
            { name:"Desktop", price:200, quantity:20, rating:4.5,date:new Date(),description:this.desc},
            { name:"Camera", price:6000, quantity:3, rating:2.4 ,date:new Date(),description:this.desc},
            { name:"Mobile", price:300, quantity:6, rating:3.4 ,date:new Date(),description:this.desc},
            { name:"Watch", price:50000, quantity:9, rating:4.6 ,date:new Date(),description:this.desc},
    ]
    onFormSubmit(formPassed:any,e:any){
        if(formPassed.valid){
              //this.products.push(JSON.parse(JSON.stringify(this.newProduct)));  
              this.products.push(this.newProduct);  
              this.newProduct={};
        }
        else{
            alert("please fill all the details");
        }
        console.log(formPassed);
        e.preventDefault();
    }
    editForm(product:any){
        this.newProduct=product;
    }
}
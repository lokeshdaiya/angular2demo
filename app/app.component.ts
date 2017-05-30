import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //templateUrl: 'app/app.component.html',
  template:`
  
  <shopping-cart></shopping-cart>
  `
})
export class AppComponent  { 

  name = 'Angular'; 
  imageUrl:string = "http://www.anygraaf.com/anyusa/images/imageed_logo.jpg";
  height:string = "100";
  width:string = "100";
  isSuccess:boolean = false;
  isButton:boolean = false;
  onChangeHandler(e:any){
    console.log(e);
    let txtValue = e.target.value
    this.name = txtValue;
  }
}

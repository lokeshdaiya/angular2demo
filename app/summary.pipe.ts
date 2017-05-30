import  {Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value:string,start:number,end:number){
        if(value){
            return value.substring(start,end)+'...';
        }
    }
}
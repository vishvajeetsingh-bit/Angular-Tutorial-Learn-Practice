import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter',
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    if(args.length==0)
    {
      console.log("No currency type passed !");
      return value;
    }
    else 
    {
      let [data]=args;
      return value *data;
    }
  }

}

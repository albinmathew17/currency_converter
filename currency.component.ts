import { Component, OnInit} from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  selectedBase: string = 'USD';
  selectedConvert: string = 'EUR';
  inputBaseAmount: number;
  inputAmount: string;
  outAmount: string;
  outBaseAmount: number;
  currencyOptions: string[] = ['USD', 'CAD', 'EUR'];
  outArr = [];
  currencyMap = [];
  canShow : boolean =false;
  constructor(private curreancyService: CurrencyService) { }

  ngOnInit() {
    this.curreancyService.getExchangeRate(this.selectedBase,'EUR,CAD')
      .subscribe(data => {
        this.inputBaseAmount = 0.00;
        this.setInitialValues(data);
      })

  }

  onBaseAmountChange(event) {
    this.outAmount = this.decimalPipe(event * this.outBaseAmount);

  }
  onOutAmountChange(event) {
    this.outAmount = event;
    this.inputAmount = this.decimalPipe(event * (1 / this.outBaseAmount));
  }
  onBaseSelect(event) {
    this.selectedBase = event;
    let symbols = this.currencyOptions.filter(code => code !== this.selectedBase)
    this.outArr = symbols;
    this.curreancyService.getExchangeRate(this.selectedBase,symbols.toString())
      .subscribe(data => {
        this.setInitialValues(data)
        if(this.selectedConvert == this.selectedBase){
            this.outBaseAmount = 1;
            this.outAmount = this.decimalPipe(parseFloat(this.inputAmount) * 1);
          }else{
            this.outBaseAmount = this.getRate(this.selectedConvert)
            let outAmount = this.inputAmount ? parseFloat(this.inputAmount) * this.outBaseAmount : 0.00;
            this.outAmount = this.decimalPipe(outAmount);
          }
      })

  }
  onOutSelect(event) {
    this.selectedConvert = event;
    this.outBaseAmount = this.getRate(event);
    let outAmount = this.outBaseAmount * parseFloat(this.inputAmount);
    this.outAmount = this.decimalPipe(outAmount);
  }
  setInitialValues(data) {
    this.currencyMap =[];
    Object.entries(data.rates).map((key, i) => {
      if(key[0] == this.selectedConvert){
        this.outBaseAmount = Number(key[1]);
      }
      this.currencyMap.push({ 'code': key[0], 'rate': Number(key[1]) });
    });
    this.currencyMap.push({'code':this.selectedBase, 'rate':1})
  }

  showDetails(){
    this.canShow = !this.canShow;
  }

  decimalPipe(num: number): string {
    return (Number(num) * 100 / 100).toFixed(2);
  }

  getRate(base){
    let currency = this.currencyMap.filter(code => code.code == base);
    return currency[0].rate;
  }
}

import { Component, OnInit } from '@angular/core';
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
        this.inputAmount = "0.00";
        this.setInitialValues(data);
        this.outAmount = "0.00";
      })

  }

  onBaseAmountChange(event) {
    this.outAmount = (event * this.outBaseAmount).toString();

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
        this.currencyMap = [];
        if(this.selectedConvert == this.selectedBase){
          this.selectedConvert = symbols[0];
          this.initializeInputs();
          this.outAmount = "0.00";
        }else{
          let outAmount = parseInt(this.inputAmount) * this.outBaseAmount;
          this.outAmount = this.decimalPipe(outAmount);
        }
        this.setInitialValues(data);
      })

  }
  onOutSelect(event) {
    if(this.selectedConvert == event){
      
    }
    this.selectedConvert = event.code;
    this.outBaseAmount = event.rate;
    let outAmount = this.outBaseAmount * parseInt(this.inputAmount);
    this.outAmount = this.decimalPipe(outAmount);
  }
  setInitialValues(data) {
    Object.entries(data.rates).map((key, i) => {
      if(key[0] == this.selectedConvert){
        this.outBaseAmount = Number(key[1]);
      }
      this.currencyMap.push({ 'code': key[0], 'rate': Number(key[1]) });
    });
    this.outArr = this.currencyMap.filter(rate => rate.code !== this.selectedConvert);
  }

  showDetails(){
    this.canShow = !this.canShow;
  }

  decimalPipe(num: number): string {
    return (Number(num) * 100 / 100).toFixed(2);
  }

  initializeInputs(){
    this.inputAmount = "0.00";
    this.outAmount = "0.00";
  }

}

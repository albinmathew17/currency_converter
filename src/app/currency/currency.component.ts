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
  inputAmount: number;
  outAmount: number;
  outBaseAmount: number;
  currencyOptions: string[] = ['USD', 'CAD', 'EUR'];
  outArr = [];
  currencyMap = [];
  constructor(private curreancyService: CurrencyService) { }

  ngOnInit() {
    this.curreancyService.getExchangeRate(this.selectedBase)
      .subscribe(data => {
        this.inputBaseAmount = 1;
        this.inputAmount = 1;
        this.setInitialValues(data);
        this.outAmount = this.outBaseAmount;
      })

  }

  onBaseAmountChange(event) {
    this.outAmount = event * this.outBaseAmount;

  }
  onOutAmountChange(event) {
    this.outAmount = event;
    this.inputAmount = event * (1 / this.outBaseAmount);
  }
  onBaseSelect(event) {
    this.selectedBase = event;
    this.curreancyService.getExchangeRate(this.selectedBase)
      .subscribe(data => {
        this.currencyMap = [];
        this.setInitialValues(data);
        this.inputBaseAmount = this.inputBaseAmount;
        this.outAmount = this.inputAmount * this.outBaseAmount;
      })

  }
  onOutSelect(event) {
    this.selectedConvert = event.code;
    this.outBaseAmount = event.rate;
    this.outAmount = this.outBaseAmount * this.inputAmount;
  }
  setInitialValues(data) {
    Object.entries(data.rates).map((key, i) => {
      this.currencyMap.push({ 'code': key[0], 'rate': Number(key[1]) });
    });
    this.outArr = this.currencyMap.filter(rate => rate.code !== this.selectedBase);
    if(this.selectedConvert == this.selectedBase){
      this.outBaseAmount = this.inputAmount;
    }else{
      this.outBaseAmount = this.outArr.filter(rates => rates.code === this.selectedConvert)[0].rate;
    }
  }

}

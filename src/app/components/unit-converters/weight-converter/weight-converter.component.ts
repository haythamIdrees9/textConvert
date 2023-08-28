import { Component, OnInit } from '@angular/core';
import Decimal from 'decimal.js';
import { WeightUnitsService } from './weight-units.service';

@Component({
  selector: 'app-weight-converter',
  templateUrl: './weight-converter.component.html',
  styleUrls: ['../main-converters.scss'],
})
export class WeightConverterComponent implements OnInit {
  storageKey = "weightUnitsConvert";
  originalText:string = '1';
  text:string = '';
  inputValue: number = 0;
  units: readonly { key: string, label: string, conversionRate: number }[] = [];
  popularUnits: readonly { route: string, reverseRoute: string,labelRoute:string,labelReverseRoute:string }[] = [];
  pairsWithKg: readonly { route: string, reverseRoute: string,labelRoute:string,labelReverseRoute:string,label:string }[] = [];
  conversionRate1!:number;
  conversionRate2!:number;
  constructor( private weightUnitsService:WeightUnitsService){    
  }

  updateResult() {
    const rate1 = new Decimal(this.conversionRate1);
    const rate2 = new Decimal(this.conversionRate2);
    const inputDecimal = new Decimal(Number(this.originalText));
    this.text = `${inputDecimal.times(rate1).div(rate2)}`;
  }

  ngOnInit() {
    this.popularUnits = this.weightUnitsService.popularUnits;
    this.pairsWithKg = this.weightUnitsService.pairsWithKg;
    this.units = this.weightUnitsService.units;
    this.conversionRate1 = this.units[0].conversionRate;
    this.conversionRate2 = this.units[1].conversionRate;
    this.updateResult();
  }

  setOriginalText(text:string){
    this.originalText = text
    this.updateResult();
  }
  clearTextArea() {
    this.originalText = '1';
    this.updateResult();
  }
}

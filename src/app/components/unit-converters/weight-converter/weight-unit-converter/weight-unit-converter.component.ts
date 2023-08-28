import { Component } from '@angular/core';
import Decimal from 'decimal.js';
import { ActivatedRoute } from '@angular/router';
import { WeightUnitsService } from '../weight-units.service';

@Component({
  selector: 'app-weight-unit-converter',
  templateUrl: './weight-unit-converter.component.html',
  styleUrls: ['../../unit-converter.scss']
})
export class WeightUnitConverterComponent {
  storageKey = "weightUnitConvert";
  originalText:string = '1';
  text:string = '';
  inputValue: number = 0;
  title = "Weight and Mass Converters"
  popularUnits: readonly { route: string, reverseRoute: string,labelRoute:string,labelReverseRoute:string }[] = [];
  pairsWithKg: readonly { route: string, reverseRoute: string,labelRoute:string,labelReverseRoute:string,label:string }[] = [];

  conversionRate!:number;
  switchLink = ''
  constructor( private weightUnitsService:WeightUnitsService,private route:ActivatedRoute){
  }

  updateResult() {
    const inputDecimal = new Decimal(Number(this.originalText));
    this.text = `${inputDecimal.times(this.conversionRate)}`;
  }

  ngOnInit() {
    this.popularUnits = this.weightUnitsService.popularUnits;
    this.pairsWithKg = this.weightUnitsService.pairsWithKg;
    
    this.route.params.subscribe((params)=>{
      const unitsType = params['units-type'].split('-');
      this.switchLink = `${unitsType[1]}-${unitsType[0]}`
      this.title = `Convert ${unitsType[0]} to ${unitsType[1]}`
      this.weightUnitsService.getConversionRate(unitsType[0],unitsType[1])
      this.conversionRate = this.weightUnitsService.getConversionRate(unitsType[0],unitsType[1]);
      this.updateResult();
    })
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

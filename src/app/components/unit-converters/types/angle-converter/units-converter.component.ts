import { Component, OnInit } from '@angular/core';
import Decimal from 'decimal.js';
import { UnitsService } from './units.service';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from 'src/app/components/services/meta.service';
import { SeoService } from 'src/app/components/services/seo.service';

@Component({
  selector: 'app-angle-converter',
  templateUrl: './units-converter.component.html',
})
export class UnitConverterComponent implements OnInit {
  userInput: string = '1';
  result: string = '';
  units: readonly { key: string, label: string, conversionRate: number }[] = [];
  popularUnits: readonly { route: string, reverseRoute: string, labelRoute: string, labelReverseRoute: string, }[] = [];
  conversionRate!: number;
  linkUnitType:string [] = ['degree','radian'];
  constructor(private unitsService: UnitsService, private route: ActivatedRoute,
    private metaService:MetaService, private seoService:SeoService) {
 }

  updateResult(userInput: string = this.userInput) {
    this.userInput = userInput;
    const inputDecimal = new Decimal(Number(userInput));
    this.result = `${inputDecimal.times(this.conversionRate)}`;
  }

  ngOnInit() {
    this.popularUnits = this.unitsService.popularUnits;
    this.units = this.unitsService.units;
    this.conversionRate = this.unitsService.calculateConversionRate(this.units[1].conversionRate, this.units[0].conversionRate)
    this.handleParamsChange();
    this.updateResult();
    this.seoService.createLinkForCanonicalURL('unit-converters/angle')
  }

  private handleParamsChange(){
    this.route.params.subscribe((params) => {
      if(!params['units-type']){
        return;
      }
      this.linkUnitType = (params['units-type'] as string).split('-to-');
      this.conversionRate = this.unitsService.getConversionRate(this.linkUnitType[0], this.linkUnitType[1]);
      this.updateResult();
      this.updateSeoData();
    })
  }

  updateSeoData(){
    this.metaService.setTitle(`Convert ${this.linkUnitType[0]} to ${this.linkUnitType[1]}`);
    this.metaService.setDescription(`Effortlessly convert angles from ${this.linkUnitType[0]} to ${this.linkUnitType[1]} with precision. Get quick and accurate results using our user-friendly angle converter`)
    this.metaService.setKeywords("angle converter, degree, radian, gradian, unit conversion, convert degrees to radians, degrees to gradians, angle unit conversion, angle measurement, angle conversion tool, degrees, radians, gradians")
  }
}

import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';

@Injectable()
export class UnitsService {

  units: readonly { key: string; label: string; conversionRate: number }[] = Object.freeze([
    { key: "meter-per-second", label: "Meter per Second", conversionRate: 1 },
    { key: "kilometer-per-hour", label: "Kilometer per Hour", conversionRate: 0.277778 },
    { key: "mile-per-hour", label: "Mile per Hour", conversionRate: 0.44704 },
    { key: "foot-per-second", label: "Foot per Second", conversionRate: 0.3048 },
    { key: "knot", label: "Knot", conversionRate: 0.514444 },
    { key: "mach", label: "Mach", conversionRate: 343.2 },
    { key: "speed-of-light", label: "Speed of Light (c)", conversionRate: 299792458 },
    { key: "kilometer-per-second", label: "Kilometer per Second", conversionRate: 1000 },
    { key: "mile-per-second", label: "Mile per Second", conversionRate: 1609.34 },
    { key: "yard-per-second", label: "Yard per Second", conversionRate: 0.9144 },
    { key: "inch-per-second", label: "Inch per Second", conversionRate: 0.0254 },
    { key: "light-year-per-year", label: "Light-Year per Year", conversionRate: 9460730472580800 },
    { key: "parsec-per-year", label: "Parsec per Year", conversionRate: 30856775800000000 },
    { key: "furlong-per-fortnight", label: "Furlong per Fortnight", conversionRate: 0.00016630952381 },
    { key: "cable-per-minute", label: "Cable per Minute", conversionRate: 185.2 },
    { key: "cable-per-second", label: "Cable per Second", conversionRate: 11112 },
    { key: "nautical-mile-per-day", label: "Nautical Mile per Day", conversionRate: 1.94384 },
    { key: "nautical-mile-per-hour", label: "Nautical Mile per Hour", conversionRate: 0.514444 },
    { key: "light-minute-per-year", label: "Light-Minute per Year", conversionRate: 17782746375212800000 },
    { key: "light-hour-per-year", label: "Light-Hour per Year", conversionRate: 1066964782512768000000 }
  ]
  
  );

  popularUnits = Object.freeze([
    {route: "meter-per-second-to-kilometer-per-hour",reverseRoute: "kilometer-per-hour-to-meter-per-second",labelRoute: "Meter per Second to Kilometer per Hour",labelReverseRoute: "Kilometer per Hour to Meter per Second"},
    {route: "meter-per-second-to-mile-per-hour",reverseRoute: "mile-per-hour-to-meter-per-second",labelRoute: "Meter per Second to Mile per Hour",labelReverseRoute: "Mile per Hour to Meter per Second"},
    {route: "meter-per-second-to-foot-per-second",reverseRoute: "foot-per-second-to-meter-per-second",labelRoute: "Meter per Second to Foot per Second",labelReverseRoute: "Foot per Second to Meter per Second"},
    {route: "meter-per-second-to-knot",reverseRoute: "knot-to-meter-per-second",labelRoute: "Meter per Second to Knot",labelReverseRoute: "Knot to Meter per Second"},
    {route: "meter-per-second-to-mach",reverseRoute: "mach-to-meter-per-second",labelRoute: "Meter per Second to Mach",labelReverseRoute: "Mach to Meter per Second"},
    {route: "meter-per-second-to-speed-of-light",reverseRoute: "speed-of-light-to-meter-per-second",labelRoute: "Meter per Second to Speed of Light (c)",labelReverseRoute: "Speed of Light (c) to Meter per Second"},
    {route: "meter-per-second-to-kilometer-per-second",reverseRoute: "kilometer-per-second-to-meter-per-second",labelRoute: "Meter per Second to Kilometer per Second",labelReverseRoute: "Kilometer per Second to Meter per Second"},
    {route: "meter-per-second-to-mile-per-second",reverseRoute: "mile-per-second-to-meter-per-second",labelRoute: "Meter per Second to Mile per Second",labelReverseRoute: "Mile per Second to Meter per Second"},
    {route: "meter-per-second-to-yard-per-second",reverseRoute: "yard-per-second-to-meter-per-second",labelRoute: "Meter per Second to Yard per Second",labelReverseRoute: "Yard per Second to Meter per Second"},
    {route: "meter-per-second-to-inch-per-second",reverseRoute: "inch-per-second-to-meter-per-second",labelRoute: "Meter per Second to Inch per Second",labelReverseRoute: "Inch per Second to Meter per Second"},
    {route: "meter-per-second-to-light-year-per-year",reverseRoute: "light-year-per-year-to-meter-per-second",labelRoute: "Meter per Second to Light-Year per Year",labelReverseRoute: "Light-Year per Year to Meter per Second"},
    {route: "meter-per-second-to-parsec-per-year",reverseRoute: "parsec-per-year-to-meter-per-second",labelRoute: "Meter per Second to Parsec per Year",labelReverseRoute: "Parsec per Year to Meter per Second"},
    {route: "meter-per-second-to-furlong-per-fortnight",reverseRoute: "furlong-per-fortnight-to-meter-per-second",labelRoute: "Meter per Second to Furlong per Fortnight",labelReverseRoute: "Furlong per Fortnight to Meter per Second"},
    {route: "meter-per-second-to-cable-per-minute",reverseRoute: "cable-per-minute-to-meter-per-second",labelRoute: "Meter per Second to Cable per Minute",labelReverseRoute: "Cable per Minute to Meter per Second"},
    {route: "meter-per-second-to-cable-per-second",reverseRoute: "cable-per-second-to-meter-per-second",labelRoute: "Meter per Second to Cable per Second",labelReverseRoute: "Cable per Second to Meter per Second"},
    {route: "meter-per-second-to-nautical-mile-per-day",reverseRoute: "nautical-mile-per-day-to-meter-per-second",labelRoute: "Meter per Second to Nautical Mile per Day",labelReverseRoute: "Nautical Mile per Day to Meter per Second"},
    {route: "meter-per-second-to-nautical-mile-per-hour",reverseRoute: "nautical-mile-per-hour-to-meter-per-second",labelRoute: "Meter per Second to Nautical Mile per Hour",labelReverseRoute: "Nautical Mile per Hour to Meter per Second"},
    {route: "meter-per-second-to-light-minute-per-year",reverseRoute: "light-minute-per-year-to-meter-per-second",labelRoute: "Meter per Second to Light-Minute per Year",labelReverseRoute: "Light-Minute per Year to Meter per Second"},
    {route: "meter-per-second-to-light-hour-per-year",reverseRoute: "light-hour-per-year-to-meter-per-second",labelRoute: "Meter per Second to Light-Hour per Year",labelReverseRoute: "Light-Hour per Year to Meter per Second"}
  ]
  
  );


  constructor() {
    // let value = (4 * 5);
    // console.log(this.units.length,'uni1ts',this.units.map(item => {return {key:item.key,conversionRate:item.conversionRate.toString()}}).slice(value,value + 5));  
  }


  getUnits(key: string) {
    return this.units.find(unit => unit.key === key);
  }

  getConversionRate(fromUnit: string, toUnit: string) {
    const fromUnitData = this.units.find(unit => unit.key === fromUnit);
    const toUnitData = this.units.find(unit => unit.key === toUnit);
     if (!fromUnitData || !toUnitData) { throw new Error("Invalid units provided."); 
    } 
    return this.calculateConversionRate(toUnitData.conversionRate, fromUnitData.conversionRate)
  }

  calculateConversionRate(conversionRate1: number, conversionRate2: number) {
    const rate1 = new Decimal(conversionRate1); const rate2 = new Decimal(conversionRate2); return rate2.div(rate1).toNumber()
  }


}
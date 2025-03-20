import { Injectable } from '@angular/core';
import { ConversionDef } from './conversion-def.class';
import { CategoryDef } from './category-def.class';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ConversionEngineService {
  weightDefs: ConversionDef[] = [
    new ConversionDef('kg to lbs', 'kg', 'lbs', 2.20462262, 0, 0),
    new ConversionDef('lbs to kg', 'lbs', 'kg', 0.453592, 0, 0),
  ];
  temperatureDefs: ConversionDef[] = [
    new ConversionDef('Celsius to Fahrenheit', 'C', 'F', 9 / 5, 0.0, 32),
    new ConversionDef(
      'Fahrenheit to Celsius',
      'F',
      'C',
      5 / 9,
      -32 * (5 / 9),
      0.0
    ),
  ];
  distaneDefs: ConversionDef[] = [
    new ConversionDef('Meters to Miles', 'm', 'mi', 1 / 1609.344, 0.0, 0.0),
    new ConversionDef('Miles to Meters', 'mi', 'm', 1609.344, 0.0, 0.0),
  ];
  categoryDefs: CategoryDef[] = [
    new CategoryDef('Weight', 'weight', this.weightDefs),
    new CategoryDef('Temperature', 'temperature', this.temperatureDefs),
    new CategoryDef('Distance', 'kilometer', this.distaneDefs),
  ];

  constructor() {}

  getCategoryDefs(): CategoryDef[] {
    return this.categoryDefs;
  }

  getConversionDefs(catName: string): ConversionDef[] {
    let catIdx = this.categoryDefs.findIndex((item) => item.name === catName);
    if (catIdx === -1) return this.categoryDefs[0].conversions;
    return this.categoryDefs[catIdx].conversions;
  }
  getSelectedConverter(parentForm: FormGroup) {
    let categoryValue = parentForm.get('categoryValue')?.value;
    let converterValue = parentForm.get('converterValue')?.value;
    let converterDefs = this.getConversionDefs(categoryValue);
    return converterDefs.find((converter) => converter.name === converterValue);
  }

  performConversion(parentForm: FormGroup) {
    let selectedConverter = this.getSelectedConverter(parentForm);
    let value = parentForm.get('input')?.value;

    const coeff = selectedConverter?.coeff ?? 1;
    const preOffset = selectedConverter?.pre0ffset ?? 0;
    const postOffset = selectedConverter?.post0ffset ?? 0;
    const convertedValue = value * coeff + preOffset + postOffset;
    parentForm.get('output')?.setValue(convertedValue.toFixed(2));
  }
}

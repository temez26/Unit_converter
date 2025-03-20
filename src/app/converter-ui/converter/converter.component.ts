import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionDef } from '../../shared/conversion-def.class';
import { ConversionEngineService } from '../../shared/conversion-engine.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css',
})
export class ConverterComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  conversionDefs!: ConversionDef[];

  constructor(private readonly conversionService: ConversionEngineService) {}

  ngOnInit(): void {
    this.updateConversionDefs(this.parentForm.get('categoryValue')?.value);

    this.parentForm.get('categoryValue')?.valueChanges.subscribe((value) => {
      this.updateConversionDefs(value);
    });

    this.parentForm.get('converterValue')?.valueChanges.subscribe(() => {
      this.updateSelectedConverter();
    });
  }

  private updateConversionDefs(catName: string): void {
    this.conversionDefs = this.conversionService.getConversionDefs(catName);
    this.parentForm.get('input')?.setValue('');
    this.parentForm
      .get('converterValue')
      ?.setValue(this.conversionDefs[0].name);
    this.updateSelectedConverter();
  }

  private updateSelectedConverter(): void {
    let selectedConverter = this.conversionService.getSelectedConverter(
      this.parentForm
    );
    this.parentForm.get('conversionInput')?.setValue(selectedConverter?.inUnit);
    this.parentForm
      .get('conversionOutput')
      ?.setValue(selectedConverter?.outUnit);
    this.parentForm.get('coeff')?.setValue(selectedConverter?.coeff);
    this.conversionService.performConversion(this.parentForm);
  }
}

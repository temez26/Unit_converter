import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionDef } from '../../shared/conversion-def.class';
import { ConversionEngineService } from '../../shared/conversion-engine.service';

@Component({
  selector: 'app-conversion-input',
  templateUrl: './conversion-input.component.html',
  styleUrls: ['./conversion-input.component.css'],
})
export class ConversionInputComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  conversionDefs!: ConversionDef[];

  constructor(private readonly conversionService: ConversionEngineService) {}

  ngOnInit(): void {
    this.parentForm.get('input')?.valueChanges.subscribe(() => {
      this.parentForm.get('input')?.markAsTouched();
      if (this.parentForm.get('input')?.valid) {
        this.conversionService.performConversion(this.parentForm);
      }
    });
  }
}

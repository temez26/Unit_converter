import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConversionEngineService } from '../shared/conversion-engine.service';

@Component({
  selector: 'app-converter-ui',
  templateUrl: './converter-ui.component.html',
  styleUrls: ['./converter-ui.component.css'],
})
export class ConverterUiComponent implements OnInit {
  parentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private conversionService: ConversionEngineService
  ) {}

  ngOnInit() {
    let categoryDefs = this.conversionService.getCategoryDefs();
    let converterDefs = this.conversionService.getConversionDefs(
      categoryDefs[0].name
    );

    this.parentForm = this.fb.group({
      categoryValue: new FormControl(categoryDefs[0].name, [
        Validators.required,
      ]),
      converterValue: new FormControl(converterDefs[0].name, [
        Validators.required,
      ]),
      conversionInput: new FormControl(converterDefs[0].inUnit, []),
      conversionOutput: new FormControl(converterDefs[0].outUnit, []),
      input: new FormControl('', [Validators.pattern('^-?\\d*(\\.\\d+)?$')]),
      output: new FormControl('', []),
    });
  }
}

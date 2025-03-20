import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConversionDef } from '../../shared/conversion-def.class';

@Component({
  selector: 'app-conversion-output',
  templateUrl: './conversion-output.component.html',
  styleUrl: './conversion-output.component.css',
})
export class ConversionOutputComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  conversionDefs!: ConversionDef[];

  ngOnInit(): void {}
}

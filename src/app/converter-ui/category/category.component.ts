import { Component, OnInit, Input } from '@angular/core';
import { ConversionEngineService } from '../../shared/conversion-engine.service';
import { CategoryDef } from '../../shared/category-def.class';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  categoryDefs!: CategoryDef[];
  constructor(private readonly conversionService: ConversionEngineService) {}

  ngOnInit(): void {
    this.categoryDefs = this.conversionService.getCategoryDefs();
  }
}

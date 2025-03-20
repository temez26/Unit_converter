import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CategoryDef } from '../../shared/category-def.class';

@Component({
  selector: 'app-category-icon',
  templateUrl: './category-icon.component.html',
  styleUrl: './category-icon.component.css',
})
export class CategoryIconComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  categoryDefs!: CategoryDef[];
  iconName!: string;

  ngOnInit(): void {
    this.checkConversion(this.parentForm.get('categoryValue')?.value);
    this.parentForm.get('categoryValue')?.valueChanges.subscribe((value) => {
      this.checkConversion(value);
    });
  }
  checkConversion(catName: string): void {
    if (catName === 'Weight') {
      this.iconName = 'scale';
    }
    if (catName === 'Distance') {
      this.iconName = 'straighten';
    }
    if (catName === 'Temperature') {
      this.iconName = 'thermostat';
    }
  }
}

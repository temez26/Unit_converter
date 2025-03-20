import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { AppInfoComponent } from './app-info/app-info.component';
import { ConverterUiComponent } from './converter-ui/converter-ui.component';
import { CategoryComponent } from './converter-ui/category/category.component';
import { CategoryIconComponent } from './converter-ui/category-icon/category-icon.component';
import { ConverterComponent } from './converter-ui/converter/converter.component';
import { ConversionInputComponent } from './converter-ui/conversion-input/conversion-input.component';
import { ConversionOutputComponent } from './converter-ui/conversion-output/conversion-output.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AppInfoComponent,
    ConverterUiComponent,
    CategoryComponent,
    CategoryIconComponent,
    ConverterComponent,
    ConversionInputComponent,
    ConversionOutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}

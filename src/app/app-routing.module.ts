import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterUiComponent } from './converter-ui/converter-ui.component';
import { AppInfoComponent } from './app-info/app-info.component';

const routes: Routes = [
  { path: '', component: ConverterUiComponent },
  { path: 'info', component: AppInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

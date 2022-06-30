import { NgModule } from '@angular/core';
import { CommonTableComponent } from './containers';
import { CommonTableBodyDirective, CommonTableHeaderDirective } from './directives';
import { CommonModule } from '@angular/common';

const UIS = [
  CommonTableComponent,
  CommonTableBodyDirective,
  CommonTableHeaderDirective
];
@NgModule({
  declarations: [
    UIS
  ],
  exports: [
    UIS
  ],
  imports: [CommonModule]
})
export class CommonTableModule {}
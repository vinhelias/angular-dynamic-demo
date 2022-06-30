import { NgModule } from '@angular/core';
import { ExampleTableComponent } from './table.component';
import { CommonModule } from '@angular/common';
import { CommonCodeModule, CommonTableModule } from '@chk-common';

@NgModule({
  imports: [
    CommonModule,
    CommonTableModule,
    CommonCodeModule
  ],
  declarations: [ExampleTableComponent],
  exports: [ExampleTableComponent]
})
export class ExampleTableModule {}
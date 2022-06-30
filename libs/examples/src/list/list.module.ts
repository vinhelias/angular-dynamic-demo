import { NgModule } from '@angular/core';
import { ExampleListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { CommonCodeModule, CommonListModule } from '@chk-common';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  imports: [
    CommonModule,
    CommonCodeModule,
    CommonListModule,
    HighlightModule
  ],
  declarations: [ExampleListComponent],
  exports: [ExampleListComponent]
})
export class ExampleListModule {}
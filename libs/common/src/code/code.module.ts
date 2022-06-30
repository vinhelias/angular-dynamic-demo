import { NgModule } from '@angular/core';
import { CommonCodeComponent } from './containers';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  imports: [CommonModule, HighlightModule],
  declarations: [CommonCodeComponent],
  exports: [CommonCodeComponent]
})
export class CommonCodeModule {}
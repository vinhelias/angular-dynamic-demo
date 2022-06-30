import { NgModule } from '@angular/core';
import { ExampleModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';
import { CommonCodeModule } from '@chk-common';
import { OverlayModalModule } from '@chk-overlay';
import { ExampleModalConfirmComponent } from './components';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  imports: [
    CommonModule,
    CommonCodeModule,
    OverlayModalModule,
    HighlightModule
  ],
  declarations: [ExampleModalComponent, ExampleModalConfirmComponent],
  exports: [ExampleModalComponent, ExampleModalConfirmComponent]
})
export class ExampleModalModule {}
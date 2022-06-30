import { NgModule } from '@angular/core';
import { OverlayModalComponent } from './containers';
import { OverlayModalService } from './services';
import { OVERLAY_MODAL_SERVICE } from './constants';
import { OverlayCdkModule } from '../cdk';

@NgModule({
  imports: [
    OverlayCdkModule
  ],
  declarations: [OverlayModalComponent],
  exports: [OverlayModalComponent],
  providers: [
    {
      provide: OVERLAY_MODAL_SERVICE,
      useClass: OverlayModalService
    }
  ]
})
export class OverlayModalModule {}
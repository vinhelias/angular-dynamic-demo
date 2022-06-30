import { NgModule } from '@angular/core';
import { OverlayCdkComponent } from './containers';
import { OVERLAY_CDK_SERVICE } from './constants';
import { OverlayCdkService } from './services';

@NgModule({
  declarations: [OverlayCdkComponent],
  exports: [OverlayCdkComponent],
  providers: [
    {
      provide: OVERLAY_CDK_SERVICE,
      useClass: OverlayCdkService
    }
  ]
})
export class OverlayCdkModule { }
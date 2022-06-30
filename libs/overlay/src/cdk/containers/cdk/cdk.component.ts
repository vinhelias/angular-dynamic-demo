import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'chk-overlay-cdk',
  templateUrl: './cdk.component.html',
  styleUrls: ['./cdk.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayCdkComponent { }

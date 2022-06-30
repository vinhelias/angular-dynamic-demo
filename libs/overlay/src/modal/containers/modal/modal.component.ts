import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'chk-overlay-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayModalComponent {

}

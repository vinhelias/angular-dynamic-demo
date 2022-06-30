import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { IOverlayModalDetection, OVERLAY_MODAL_DATA, OVERLAY_MODAL_DETECTION } from '@chk-overlay';

@Component({
  selector: 'chk-example-modal-confirm',
  template: '<button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" (click)="close()">Close {{data}}</button>',
  styleUrls: ['./confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleModalConfirmComponent {
  constructor(
    @Inject(OVERLAY_MODAL_DATA)
    public readonly data: string,
    @Inject(OVERLAY_MODAL_DETECTION)
    protected readonly detection: IOverlayModalDetection<string>
  ) { }

  public close(): void {
    this.detection.close('test');
  }

}

import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ICodeFile } from '@chk-common';
import { IOverlayModalService, OVERLAY_MODAL_SERVICE } from '@chk-overlay';
import { ExampleModalConfirmComponent } from './components';
import { take, tap } from 'rxjs';

@Component({
  selector: 'chk-example-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleModalComponent {
  public readonly files: ICodeFile[] = [
    {
      title: 'TypeScript',
      languages: ['ts'],
      code: `
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ICodeFile } from '@chk-common';
import { take, tap } from 'rxjs';
import { IOverlayModalDetection, OVERLAY_MODAL_DATA, OVERLAY_MODAL_DETECTION, IOverlayModalService, OVERLAY_MODAL_SERVICE } from '@chk-overlay';

@Component({
  selector: 'chk-example-modal-confirm',
  template: '<button (click)="close()">Close {{data}}</button>',
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

@Component({
  selector: 'chk-example-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleListComponent {
  constructor(
    @Inject(OVERLAY_MODAL_SERVICE)
    protected readonly modalService: IOverlayModalService
  ) { }

  public open(): void {
    const modalRef = this.modalService.open<string, string>(ExampleModalConfirmComponent, {
      data: 'model-confirm-test-data',
      backdropClick: true
    });

    modalRef.afterClosed.pipe(
      take(1),
      tap((data) => {
        console.log(data);
      })
    ).subscribe();
  }
}
      `
    },
    {
      title: 'HTML',
      languages: ['html'],
      code: `
<chk-common-list [data]="items">
  <button (click)="open()">Open</button>
</chk-common-list>
      `
    }
  ];

  constructor(
    @Inject(OVERLAY_MODAL_SERVICE)
    protected readonly modalService: IOverlayModalService
  ) { }

  public open(): void {
    const modalRef = this.modalService.open<string, string>(ExampleModalConfirmComponent, {
      data: 'model-confirm-test-data',
      backdropClick: true
    });

    modalRef.afterClosed.pipe(
      take(1),
      tap((data) => {
        console.log(data);
      })
    ).subscribe();
  }
}

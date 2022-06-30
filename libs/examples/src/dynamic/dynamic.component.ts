import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICodeFile } from '@chk-common';

@Component({
  selector: 'chk-example-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleDynamicComponent {
  public readonly items = ['button', 'input', 'button', 'check-box', 'input', 'select', 'button'];
  public readonly files: ICodeFile[] = [
    {
      title: 'TypeScript',
      languages: ['ts'],
      code: `
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'chk-example-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleDynamicComponent {
  public readonly items = ['button', 'input', 'button', 'check-box', 'input', 'select', 'button'];
}
      `
    },
    {
      title: 'HTML',
      languages: ['html'],
      code: `
<ng-container *ngFor="let item of items">
  <ng-container chkCommonDynamic containerId="example" [code]="item"></ng-container>
</ng-container>
      `
    }
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICodeFile } from '@chk-common';

@Component({
  selector: 'chk-example-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleListComponent {
  public readonly items = ['button', 'input', 'button', 'check-box', 'input', 'select', 'button'];
  public readonly files: ICodeFile[] = [
    {
      title: 'TypeScript',
      languages: ['ts'],
      code: `
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'chk-example-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleListComponent {
  public readonly items = ['button', 'input', 'button', 'check-box', 'input', 'select', 'button'];
}
      `
    },
    {
      title: 'HTML',
      languages: ['html'],
      code: `
<chk-common-list [data]="items">
  <ng-template chkCommonListItem let-item="item">
    <span>{{item}}</span>
  </ng-template>
</chk-common-list>
      `
    }
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICodeFile, ICommonTableColumn } from '@chk-common';
import { IRow } from './interfaces';

@Component({
  selector: 'chk-example-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleTableComponent {
  public readonly rows: IRow[] = [
    {
      name: 'Vinh',
      age: 24,
      project: 'Prive'
    },
    {
      name: 'Hung',
      age: 27,
      project: 'Prive'
    },
    {
      name: 'Hoa',
      age: 23,
      project: 'Prive'
    }
  ];
  public readonly columns: ICommonTableColumn<IRow>[] = [
    {
      key: 'name',
      config: {
        title: 'Name'
      }
    },
    {
      key: 'age',
      config: {
        title: 'Age'
      }
    },
    {
      key: 'project',
      config: {
        title: 'Project'
      }
    },
  ];
  public readonly files: ICodeFile[] = [
    {
      title: 'TypeScript',
      languages: ['ts'],
      code: `
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICommonTableColumn } from '@chk-common';
import { IRow } from './interfaces';

@Component({
  selector: 'chk-example-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleTableComponent {
  public readonly rows: IRow[] = [
    {
      name: 'Vinh',
      age: 24,
      project: 'Prive'
    },
    {
      name: 'Hung',
      age: 27,
      project: 'Prive'
    },
    {
      name: 'Hoa',
      age: 23,
      project: 'Prive'
    }
  ];
  public readonly columns: ICommonTableColumn<IRow>[] = [
    {
      key: 'name',
      config: {
        title: 'Name'
      }
    },
    {
      key: 'age',
      config: {
        title: 'Age'
      }
    },
    {
      key: 'project',
      config: {
        title: 'Project'
      }
    },
  ];
}
      `
    },
    {
      title: 'HTML',
      languages: ['html'],
      code: `
<chk-common-table [rows]="items">
  <ng-template chkCommonTableBody key="name" let-item="row">
    <span>{{item.name}}</span>
  </ng-template>
  <ng-template chkCommonTableBody key="age" let-item="row">
    <span>{{item.age}}</span>
  </ng-template>
  <ng-template chkCommonTableBody key="project" let-item="row">
    <span>{{item.project}}</span>
  </ng-template>
</chk-common-table>
      `
    }
  ];
}

import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { CommonTableBodyDirective, CommonTableHeaderDirective } from '../../directives';
import { ICommonTableColumn } from '../../interfaces';

@Component({
  selector: 'chk-common-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonTableComponent<T extends Record<string, any> = Record<string, any>> {

  @Input()
  public rows: T[] = [];

  @Input()
  public columns: ICommonTableColumn<T>[] = [];

  @ContentChildren(CommonTableBodyDirective)
  public set bodyChildren(list: QueryList<CommonTableBodyDirective>) {
    list.forEach((item) => {
      this.bodyMap[item.key as keyof T] = item.template;
    });
  }

  @ContentChildren(CommonTableHeaderDirective)
  public set headerChildren(list: QueryList<CommonTableHeaderDirective>) {
    list.forEach((item) => {
      this.headerMap[item.key as keyof T] = item.template;
    });
  }

  public readonly bodyMap: Record<keyof T, TemplateRef<any>> = {} as Record<keyof T, TemplateRef<any>>;
  public readonly headerMap: Record<keyof T, TemplateRef<any>> = {} as Record<keyof T, TemplateRef<any>>;
}
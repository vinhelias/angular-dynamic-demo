import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CommonListItemDirective } from '../../directives';

@Component({
  selector: 'chk-common-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonListComponent<T> {

  @Input()
  public data: T[] = [];

  @ContentChild(CommonListItemDirective, { static: true, read: TemplateRef })
  public readonly itemTemplate!: TemplateRef<CommonListItemDirective>;
}

import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[chkCommonTableBody]',
  exportAs: 'chkCommonTableBody'
})
export class CommonTableBodyDirective {
  @Input()
  public key!: string;

  constructor(
    public readonly template: TemplateRef<any>
  ) {}

}
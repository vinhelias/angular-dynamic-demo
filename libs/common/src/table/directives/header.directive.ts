import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[chkCommonTableHeader]',
  exportAs: 'chkCommonTableHeader'
})
export class CommonTableHeaderDirective {
  @Input()
  public key!: string;

  constructor(
    public readonly template: TemplateRef<any>
  ) {}
}
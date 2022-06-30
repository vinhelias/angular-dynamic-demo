import { AfterViewInit, Directive, Inject, Injector, Input, Type, ViewContainerRef } from '@angular/core';
import { DYNAMIC_DIRECTIVE_DATA, DYNAMIC_DIRECTIVE_MAP } from '../constants';
import { IDynamicMap } from '../interfaces';

@Directive({
  selector: '[chkCommonDynamic]',
  exportAs: 'chkCommonDynamic'
})
export class CommonDynamicDirective<TData> implements AfterViewInit {
  @Input()
  public containerId!: string;

  @Input()
  public code!: string;

  @Input()
  public data: TData | undefined;

  public containerMap: Record<string, Type<any>> = {};

  constructor(
    protected readonly viewContainerRef: ViewContainerRef,
    @Inject(DYNAMIC_DIRECTIVE_MAP)
    protected readonly map: IDynamicMap
  ) { }

  public ngAfterViewInit(): void {
    this.createComponent();
  }

  protected createComponent(): void {
    this.containerMap = this.map[this.containerId];
    const componentType = this.containerMap[this.code];

    const injector = Injector.create({
      providers: [
        {
          provide: DYNAMIC_DIRECTIVE_DATA,
          useValue: this.data
        }
      ]
    });

    const componentRef = this.viewContainerRef.createComponent(componentType, { injector });

    componentRef.hostView.markForCheck();
  }
}
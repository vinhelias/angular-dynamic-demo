import { ComponentRef, Inject, Injectable, Injector, Type } from '@angular/core';
import { fromEvent, Subject, takeUntil, tap } from 'rxjs';
import { IOverlayCdkService, OVERLAY_CDK_SERVICE } from '../../cdk';
import {
  IOverlayModalConfig,
  IOverlayModalDetection,
  IOverlayModalItem,
  IOverlayModalRef,
  IOverlayModalService
} from '../interfaces';
import { v4 } from 'uuid';
import { OVERLAY_MODAL_DATA, OVERLAY_MODAL_DETECTION } from '../constants';

@Injectable()
export class OverlayModalService implements IOverlayModalService {
  protected readonly items: IOverlayModalItem[] = [];

  constructor(
    @Inject(OVERLAY_CDK_SERVICE)
    protected readonly cdkService: IOverlayCdkService
  ) { }

  public open<TReturn, TData extends any = any, TComponent extends Type<any> = Type<any>>(component: Type<TComponent>, config: Partial<IOverlayModalConfig<TData>> = {}): IOverlayModalRef<TReturn> {
    const id = v4();
    const afterClosed = new Subject<TReturn | undefined>();
    const close = (returnValue: TReturn | undefined) => {
      this.remove(id);
      afterClosed.next(returnValue);
    };
    const injector = Injector.create({
      providers: [
        {
          provide: OVERLAY_MODAL_DATA,
          useValue: config.data
        },
        {
          provide: OVERLAY_MODAL_DETECTION,
          useValue: {
            close
          } as IOverlayModalDetection<TReturn | undefined>
        }
      ]
    })
    const componentRef = this.cdkService.createComponentRefWithCustomInjector(component, injector);
    this.add(id, componentRef);
    const element = this.cdkService.getDomElementFromComponentRef(componentRef);
    this.cdkService.appendToOverlay(element);
    if (config.backdropClick) {
      const destroy$ = new Subject();
      fromEvent(this.cdkService.overlayContainer, 'click')
        .pipe(
          tap((e) => {
            const { target } = e;
            if (!element.contains(target as HTMLElement)) {
              close(undefined);
              destroy$.next(true);
              destroy$.complete();
            }
          }),
          takeUntil(destroy$)
        )
        .subscribe();
    }
    return {
      id,
      afterClosed: afterClosed.asObservable()
    };
  }

  protected remove(id: string): void {
    const item = this.items.find((it) => it.id === id);
    if (!!item) {
      this.cdkService.destroyRef(item.componentRef, 0);
      this.cdkService.hiddenOverlay();
    }
  }

  protected add<TComponent>(id: string, componentRef: ComponentRef<TComponent>): void {
    this.items.push({
      id,
      componentRef
    });
  }
}
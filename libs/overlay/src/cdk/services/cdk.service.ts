import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector,
  Type
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OVERLAY_CDK_DATA } from '../constants';
import { OverlayCdkComponent } from '../containers';
import { IOverlayCdkService } from '../interfaces';

@Injectable()
export class OverlayCdkService implements IOverlayCdkService {

  public get overlayContainer(): HTMLElement {
    return this.dom.getElementById('overlay-cdk') as HTMLElement;
  }

  public get overlayExisted(): boolean {
    return !!this.overlayContainer;
  }

  constructor(
    protected readonly componentFactoryResolver: ComponentFactoryResolver,
    protected readonly applicationRef: ApplicationRef,
    protected readonly injector: Injector,
    @Inject(DOCUMENT) protected readonly dom: Document
  ) { }

  public createComponentRef<TComponent, TData>(component: Type<TComponent>, data: TData | undefined = undefined): ComponentRef<TComponent> {
    const dataInjector = Injector.create({
      providers: [
        {
          provide: OVERLAY_CDK_DATA,
          useValue: data
        }
      ]
    });
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(dataInjector);
    this.applicationRef.attachView(componentRef.hostView);
    return componentRef;
  }

  public createComponentRefWithCustomInjector<TComponent>(component: Type<TComponent>, injector: Injector): ComponentRef<TComponent> {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(injector);
    this.applicationRef.attachView(componentRef.hostView);
    return componentRef;
  }

  public getDomElementFromComponentRef<TComponent>(componentRef: ComponentRef<TComponent>): HTMLElement {
    return (componentRef.hostView as EmbeddedViewRef<TComponent>).rootNodes[0];
  }

  public appendChild(child: HTMLElement, parent: HTMLElement = this.dom.body): void {
    parent.append(child);
  }

  public destroyRef<TComponent>(componentRef: ComponentRef<TComponent>, delay: number = 0): void {
    const timeDestroy = setTimeout(() => {
      this.applicationRef.detachView(componentRef.hostView);
      componentRef.destroy();
      clearTimeout(timeDestroy);
    }, delay);
  }

  public showOverlay(): void {
    const container = this.overlayContainer;
    container.classList.add('show');
  }

  public hiddenOverlay(): void {
    const container = this.overlayContainer;
    container.classList.remove('show');
  }

  public destroyOverlay(): void {
    if (this.overlayExisted) {
      this.dom.removeChild(this.overlayContainer.parentElement as HTMLElement);
    }
  }

  public appendToOverlay(child: HTMLElement): void {
    this.createOverlay();
    this.appendChild(child, this.overlayContainer);
    this.showOverlay();
  }

  public createOverlay(): void {
    if (!this.overlayExisted) {
      const overlay = this.createComponentRef(OverlayCdkComponent);
      this.appendChild(this.getDomElementFromComponentRef(overlay));
    }
  }
}
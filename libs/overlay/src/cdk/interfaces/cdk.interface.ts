import { ComponentRef, Injector, Type } from '@angular/core';

export interface IOverlayCdkService {
  get overlayContainer(): HTMLElement;
  get overlayExisted(): boolean;
  createComponentRef<TComponent, TData>(component: Type<TComponent>, data: TData | undefined): ComponentRef<TComponent>;
  createComponentRefWithCustomInjector<TComponent>(component: Type<TComponent>, injector: Injector): ComponentRef<TComponent>;
  getDomElementFromComponentRef<TComponent>(componentRef: ComponentRef<TComponent>): HTMLElement;
  appendChild(child: HTMLElement, parent: HTMLElement): void;
  destroyRef<TComponent>(componentRef: ComponentRef<TComponent>, delay: number): void;
  showOverlay(): void;
  hiddenOverlay(): void;
  destroyOverlay(): void;
  appendToOverlay(child: HTMLElement): void;
  createOverlay(): void;
}
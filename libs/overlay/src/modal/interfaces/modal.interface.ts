import { Observable } from 'rxjs';
import { ComponentRef, Type } from '@angular/core';

export interface IOverlayModalService {
  open<TReturn, TData extends any = any, TComponent extends Type<any> = Type<any>>(component: TComponent, config: Partial<IOverlayModalConfig<TData>>): IOverlayModalRef<TReturn>;
}

export interface IOverlayModalRef<TReturn> {
  id: string;
  afterClosed: Observable<TReturn | undefined>;
}

export interface IOverlayModalConfig<TData> {
  data: TData;
  backdropClick: boolean;
}

export interface IOverlayModalDetection<TReturn> {
  close(returnValue: TReturn): void;
}

export interface IOverlayModalItem {
  id: string;
  componentRef: ComponentRef<any>;
}
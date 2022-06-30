import { InjectionToken } from '@angular/core';
import { IOverlayModalDetection, IOverlayModalService } from '../interfaces';

export const OVERLAY_MODAL_SERVICE = new InjectionToken<IOverlayModalService>('OVERLAY_MODAL_SERVICE');
export const OVERLAY_MODAL_DATA = new InjectionToken('OVERLAY_MODAL_DATA');
export const OVERLAY_MODAL_DETECTION = new InjectionToken<IOverlayModalDetection<any>>('OVERLAY_MODAL_DETECTION');
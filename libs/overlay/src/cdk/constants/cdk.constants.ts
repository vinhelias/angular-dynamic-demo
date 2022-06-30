import { InjectionToken } from '@angular/core';
import { IOverlayCdkService } from '../interfaces';

export const OVERLAY_CDK_SERVICE = new InjectionToken<IOverlayCdkService>('OVERLAY_CDK_SERVICE');
export const OVERLAY_CDK_DATA = new InjectionToken('OVERLAY_CDK_DATA');
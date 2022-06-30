import { InjectionToken } from '@angular/core';
import { IDynamicMap } from '../interfaces';

export const DYNAMIC_DIRECTIVE_MAP = new InjectionToken<IDynamicMap>('DYNAMIC_DIRECTIVE_MAP');
export const DYNAMIC_DIRECTIVE_DATA = new InjectionToken('DYNAMIC_DIRECTIVE_DATA');
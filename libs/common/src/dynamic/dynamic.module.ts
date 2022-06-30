import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonDynamicDirective } from './directives';
import { IDynamicMap } from './interfaces';
import { DYNAMIC_DIRECTIVE_MAP } from './constants';

@NgModule({
  declarations: [CommonDynamicDirective],
  exports: [CommonDynamicDirective]
})
export class CommonDynamicModule {
  public static config(map: IDynamicMap): ModuleWithProviders<CommonDynamicModule> {
    return {
      ngModule: CommonDynamicModule,
      providers: [
        {
          provide: DYNAMIC_DIRECTIVE_MAP,
          useValue: map
        }
      ]
    }
  }
}
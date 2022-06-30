import { NgModule } from '@angular/core';
import { ExampleDynamicComponent } from './dynamic.component';
import { CommonModule } from '@angular/common';
import { CommonCodeModule, CommonDynamicModule } from '@chk-common';
import {
  ExampleDynamicButtonComponent,
  ExampleDynamicCheckBoxComponent,
  ExampleDynamicInputComponent,
  ExampleDynamicSelectComponent
} from './containers';
import { HighlightModule } from 'ngx-highlightjs';
@NgModule({
  imports: [
    CommonModule,
    CommonCodeModule,
    CommonDynamicModule.config({
      'example': {
        'button': ExampleDynamicButtonComponent,
        'input': ExampleDynamicInputComponent,
        'check-box': ExampleDynamicCheckBoxComponent,
        'select': ExampleDynamicSelectComponent
      }
    }),
    HighlightModule
  ],
  declarations: [
    ExampleDynamicComponent,
    ExampleDynamicButtonComponent,
    ExampleDynamicCheckBoxComponent,
    ExampleDynamicInputComponent,
    ExampleDynamicSelectComponent
  ],
  exports: [ExampleDynamicComponent],
})
export class ExampleDynamicModule {}
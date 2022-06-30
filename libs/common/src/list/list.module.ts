import { NgModule } from '@angular/core';
import { CommonListComponent } from './containers';
import { CommonModule } from '@angular/common';
import { CommonListItemDirective } from './directives';

const UIS = [CommonListComponent, CommonListItemDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [UIS],
  exports: [UIS]
})
export class CommonListModule {}
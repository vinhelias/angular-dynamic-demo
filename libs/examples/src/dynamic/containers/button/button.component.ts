import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'chk-example-dynamic-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleDynamicButtonComponent {


}

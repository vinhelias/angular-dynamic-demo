import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'chk-example-dynamic-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleDynamicSelectComponent {

}

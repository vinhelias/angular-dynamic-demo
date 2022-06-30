import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'chk-example-dynamic-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleDynamicCheckBoxComponent {

}

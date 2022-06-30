import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'chk-example-dynamic-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleDynamicInputComponent {

}

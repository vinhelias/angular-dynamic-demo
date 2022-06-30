import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICodeFile } from '../../interfaces';

@Component({
  selector: 'chk-common-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonCodeComponent {
  @Input()
  public files: ICodeFile[] = [];

  public activeTab = 'Preview';

  public code = '';

  public languages: string[] = [];

  public selectFile(file: ICodeFile): void {
    this.activeTab = file.title;
    this.code = file.code;
    this.languages = file.languages;
  }
}

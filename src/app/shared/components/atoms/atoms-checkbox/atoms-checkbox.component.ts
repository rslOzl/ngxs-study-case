import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {Input} from "@angular/compiler";

@Component({
  selector: 'app-atoms-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <input
      type="checkbox"
      [attr.id]="inputId"
      [disabled]="isDisabled"
      [checked]="isChecked"
      [ngClass]="inputClasses"
      [attr.name]="inputName"
      [(ngModel)]="value"
      (change)="csrchange.emit(value)"
    />
    <label [attr.for]="inputId" [ngClass]="labelClasses">
      {{ labelText}}
      <ng-content></ng-content>
    </label>

  `
})
export class AtomsCheckboxComponent {
  constructor() {
  }


  @Input()
  inputId = 'checboxDefault';

  @Input()
  checkboxClass = '';

  @Input()
  labelClass = '';

  @Input()
  inputClass = '';

  @Input()
  inputName = '';

  @Input()
  labelText = '';

  @Input()
  isDisabled = false;

  @Input()
  isChecked = false;

  @Output()
  csrchange = new EventEmitter<boolean>();

  get labelClasses() {
    return `checkbox-label ${this.labelClass}`;
  }

  get inputClasses() {
    return `checkbox-input ${this.inputClass}`;
  }

  get checkboxClasses() {
    return `checkbox ${this.checkboxClass}`;
  }

}

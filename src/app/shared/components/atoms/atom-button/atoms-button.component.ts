import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Select} from "@ngxs/store";


@Component({
  selector: 'atoms-buton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      [type]="buttonType"
      [class]="classes"
      (click)="onClick($event)"
    >{{buttonLabel}}
    </button>`
})

export class AtomsButtonComponent implements OnInit {
  constructor() {
  }

  @Input()
  buttonClass = '';

  @Input()
  buttonColor = 'primary';

  @Input()
  buttonLabel = '';

  @Input()
  buttonSize = 'md';

  @Input()
  buttonType = 'buton';

  @Output()
  buttonClick = new EventEmitter<MouseEvent>();

  @Select()

  onClick(event?: MouseEvent): void {
    this.buttonClick.emit(event);
  }


  get classes() {
    return this.buttonClass + ` btn-${this.buttonColor}`
  }

  ngOnInit() {
    console.log(this.classes);
  }


}

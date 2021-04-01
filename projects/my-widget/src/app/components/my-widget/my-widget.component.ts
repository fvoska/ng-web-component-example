import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-widget',
  templateUrl: './my-widget.component.html',
  styleUrls: ['./my-widget.component.scss']
})
export class MyWidgetComponent {
  @Input() public counter = 0;
  @Output() public counterChange = new EventEmitter<number>();

  public onPlusClick(): void {
    this.counter++;

    this.counterChange.emit(this.counter);
  }
}

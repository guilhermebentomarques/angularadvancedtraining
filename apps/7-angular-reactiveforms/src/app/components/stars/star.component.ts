import { Component, EventEmitter, HostListener, Input, Output } from "@angular/core";

@Component({
  selector: 'app-star',
  template: `
  <img width="48" [src]="position <= value ? './assets/yellow_star.png' : './assets/black_star.png'" />
  `,
})
export class StarComponent {
  @Input() public position = 1;
  @Input() public value = 1;
  @Output() public valueChange: EventEmitter<number> = new EventEmitter();

  @HostListener('click')
  public onValueChange() {
    this.valueChange.emit(this.position);
  }
}

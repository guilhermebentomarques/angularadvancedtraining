import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IItem } from "./item.interface";

@Component({
  selector: 'app-item',
  template: `<div>{{ item?.id }}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
  private _item: IItem | null = { id: null };

  @Input() set item(value: IItem | null) {
    this._item = value;
  }
  public get item(): IItem | null {
    return this._item;
  }
}

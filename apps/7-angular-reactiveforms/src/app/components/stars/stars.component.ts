import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarsComponent),
      multi: true,
    }
  ],
})
export class StarsComponent implements ControlValueAccessor {
  public value = 1;
  public disabled = false;
  public onChange: (value: number) => void = () => null;
  public onTouched: () => void = () => null;

  public writeValue(value: number): void {
    this.value = value;
  }
  public registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  public dispatchValueChange(value: number): void {
    if (!this.disabled) {
      this.value = value;
      this.onChange(value);
      this.onTouched();
    }
  }
}

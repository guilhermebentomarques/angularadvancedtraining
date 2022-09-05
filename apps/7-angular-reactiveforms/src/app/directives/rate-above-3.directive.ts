import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { Directive } from '@angular/core';
import { RateAbove3Only } from "../validators/rate-above-3.validator";

@Directive({
  selector: '[appRateAbove3Only]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: RateAbove3OnlyDirective,
    multi: true
  }]
})
export class RateAbove3OnlyDirective implements Validator {
  public validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return RateAbove3Only(control)
  }
}

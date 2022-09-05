import { AbstractControl, ValidationErrors } from "@angular/forms";

export function RateAbove3Only(control: AbstractControl): ValidationErrors | null {
  if(control.value < 4) {
    return {
      ratesAbove3Only: true
    }
  }

  return null;
}

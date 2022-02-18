
import { Directive } from '@angular/core';
import { ValidationErrors, ValidatorFn, AbstractControl, FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

export class CustomValidators {
  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }

      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);

      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }

  static passwordMatchValidator(control: AbstractControl): any {
    const password: string = control.get('password').value; // get password from our password form control
    const repeatPassword: string = control.get('repeatPassword').value; // get password from our repeatPassword form control
    // compare is the password math
    if (password !== repeatPassword) {
      // if they don't match, set an error in our repeatPassword form control
      control.get('repeatPassword').setErrors({ NoPassswordMatch: true });
    }
  }
}

@Directive({
  selector: '[requiredFile]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: FileValidator, multi: true },
  ]
})
export class FileValidator implements Validator {
  static validate(c: FormControl): { [key: string]: any } {
    return c.value == null || c.value.length === 0 ? { required: true } : null;
  }

  validate(c: FormControl): { [key: string]: any } {
    return FileValidator.validate(c);
  }
}

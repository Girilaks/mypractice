import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class RegisterValidator {
    static match(controlName: string, matchControlName: string): ValidatorFn {
        return (group: AbstractControl): ValidationErrors | null => {
            
            let passwordCtrl = group.get(controlName);
            let confirmPasswordCtrl = group.get(matchControlName);

            if(!passwordCtrl || !confirmPasswordCtrl) {
                return { controlValueNotFound: true};
            }

            const error = passwordCtrl.value === confirmPasswordCtrl.value ?
                null : { noMatch: true };

            passwordCtrl.setErrors(error);

            return error;
        }
    }
}

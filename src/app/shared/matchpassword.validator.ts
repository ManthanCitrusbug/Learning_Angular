import { FormGroup } from "@angular/forms";

export function confirmPasswordValidators(password:string, confirmPassword:string){
    return (formGroup: FormGroup) => {
        var pw = formGroup.controls[password]
        var cpw = formGroup.controls[confirmPassword]

        if (cpw.errors && !cpw.errors['confirmPassword']){
            return
        }
        if (pw.value !== cpw.value) {
            cpw.setErrors({confirmPassword:true});
        } else {
            cpw.setErrors(null);
        }
    }
}
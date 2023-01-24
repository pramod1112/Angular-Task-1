import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ShoppingUploadValidator{
    static fileSizesValidator(control : AbstractControl): ValidationErrors | null{
        const files = control.value;
        if(files){
            var path = files.replace(/^.*[\\\/]/,"")
            const fileSize = files.item(0).size;
            const fileSizeInKB = Math.round(fileSize/1024);
            if(fileSizeInKB > 200){
                return {fileSizesValidator : true}
            }else{
                return null
            }
        }
        return null
    }
}
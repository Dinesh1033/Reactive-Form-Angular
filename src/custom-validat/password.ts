import {FormGroup} from "@angular/forms";




export function password(
    vaule1:string,
    value2:string
){
    return (FormGroup:FormGroup)=>{
        const password=FormGroup.controls[vaule1];
        const conform=FormGroup.controls[value2];

        if(password.value!==conform.value){
            conform.setErrors({mustMatch:true})
        }else{
            conform.setErrors(null);
        }



    }
}
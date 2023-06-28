
const urlFieldvalidation =(value)=>{
    if(!value){
        return {
            status :false,
            message:"Please enter non empty url !"
        }
    }
    const re=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$|^(?:(?:[a-zA-Z]{1,9}:(?:\/\/)?)(?:[-;:&=+$,\\w]+@)?[a-zA-Z0-9.-]+|(?:www.|[-;:&=+$,\\w]+@)[a-zA-Z0-9.-]+)((?:\/[+~%\/.\w-_]*)?\??(?:[-\\+=&;%@.\w_]*)#?(?:[\w]*))?/
     if(!re.test(value)){
        console.log(90);
        return {
            status :false,
            message:"Please enter valid url !"
        }
    }
    return {
        status :true,
        message:""
    }
}

export function validateFormFields(inputFieldName,inputFieldvalue){
    switch(inputFieldName){
        case "validateUrl":
            return urlFieldvalidation(inputFieldvalue);
        default:
            return false;
    }
}
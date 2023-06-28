
const urlFieldvalidation =(value)=>{
    if(!value){
        return {
            status :false,
            message:"Please enter non empty url !"
        }
    }
    const re=/^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/
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
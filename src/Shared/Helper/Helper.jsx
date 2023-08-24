export const inputValidate = (value, type) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const nameRegex = /^[a-zA-Z ]{3,30}$/;

    let emailError = '';
    let passwordError = '';
    let firstNameError = '';
    let lastNameError = '';
    let response = '';
    let dataType = '';

    if (type === 'email') {
        if(!value){
            response = value
            emailError = ''
            dataType = type
            return { emailError, dataType, response }
        }

        if (!emailRegex.test(value)) {
            response = value
            emailError = 'Enter valid email'
            dataType = type
            return { emailError, dataType, response }
        } else {
            response = value
            emailError = ''
            dataType = type
            return { emailError, dataType, response }
        }
    }

    if (type === 'password') {
        if(!value){
            response = value
            passwordError = ''
            dataType = type
            return { passwordError, dataType, response }
        }

        if (value.length < 6 || value.length >10) {
            response = value
            passwordError = 'Password must be 6-10 charecters'
            dataType = type
            return { passwordError, dataType, response }
        } else {
            response = value
            passwordError = ''
            dataType = type
            return { passwordError, dataType, response }
        }
    } 

    if(type === 'first_name'){
        if(!value){
            response = value
            firstNameError = ''
            dataType = type
            return { firstNameError, dataType, response }
        }

        if(!nameRegex.test(value)){
            response = value
            firstNameError = 'Enter valid first name'
            dataType = type
            return { firstNameError, dataType, response }
        }else{
            response = value
            firstNameError = ''
            dataType = type
            return { firstNameError, dataType, response }
        }
    }

    if(type === 'last_name'){
        if(!value){
            response = value
            lastNameError = ''
            dataType = type
            return { lastNameError, dataType, response }
        }

        if(!nameRegex.test(value)){
            response = value
            lastNameError = 'Enter valid last name'
            dataType = type
            return { lastNameError, dataType, response }
        }else{
            response = value
            lastNameError = ''
            dataType = type
            return { lastNameError, dataType, response }
        }
    }
    
}
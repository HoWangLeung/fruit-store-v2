

// ******************************
export const validator = (fields, fieldName) => {
    
    
    let errors = {};
    switch (fieldName) {
        case "email":
            validateEmail(fields.email, errors);
            break;
        case "password":
            validatePassword(fields.password, errors);
            break;
        case "password_1":
            validatePassword_1(fields.password_1, errors);
            break;
        case "password_2":
            validatePassword_2(fields, errors);
            break;

        default:
    }
    return errors;
};


// ******************************
function validateEmail(email, errors) {
    
    let result = true;
    if (!email) {
        errors.email = "*必須填寫此欄";
        result = false;
    }
    
    return result;
}
// ******************************
function validatePassword(password, errors) {

    let result = true;
    
    if (!password) {
        errors.password = "*必須填寫此欄";
        result = false;
    }


    return result;
}
function validatePassword_1(password_1, errors) {

    let result = true;
    
    if (!password_1) {
        errors.password_1 = "*必須填寫此欄";
        result = false;
    }


    

    return result;
}
function validatePassword_2(fields, errors) {
    let result = true;
    const { password_1, password_2 } = fields

    if (password_2 && password_1 !== password_2) {
        errors.password_2 = "password does not match";
    }

    if (!password_2) {
        errors.password_2 = "*必須填寫此欄";
        result = false;
    }




    return result;
}

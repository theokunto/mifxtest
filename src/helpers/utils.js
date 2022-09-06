export function validateEmail(value) {
    let error
    if (!value) {
        error = 'Email is required'
    } else if (!value.includes("@")){
        error = 'Email is invalid, please include @ '
    }
    return error
}
export function validatePassword(value) {
    let error
    if (!value) {
        error = 'Password is required'
    } 
    return error
}
export function validateName(value) {
    let error
    if (!value) {
        error = 'Name is required'
    } 
    return error
}
export function validateConfirmPassword(pass,value) {
    let error
    if (!value) {
        error = 'You need to confirm the password'
    } else if (pass !== value) {
        error = "Password not matched"
    }
    return error
}

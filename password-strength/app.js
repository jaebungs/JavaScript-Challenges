// use regex!

// must have one lowecase letter
// must have one uppercase letter
// must have one digit
// must have one special character
// at least 8 characters long

function validatePassword (password) {
    let regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9 ])(?=.{8,})/
    let isValid = regex.test(password)
    if (isValid){
        return console.log('Strong password.');
    } else {
        return console.log('Weak password');
    }
    
}

console.log(validatePassword('#Wre9ASDFddsd'));



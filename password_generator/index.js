const result = document.getElementById('result');
const generate = document.querySelector('button');
const inputlength = document.querySelector('input');

function generatedPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const LowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const Numbers = '1234567890';
    const Symbols = '!@#$%^&*()-+';

    let allowedcharacter = '';
    let password = '';

    allowedcharacter += includeLowercase ? LowerCase : "";
    allowedcharacter += includeUppercase ? UpperCase : "";
    allowedcharacter += includeNumbers ? Numbers : "";
    allowedcharacter += includeSymbols ? Symbols : "";

    if(length <= 0){
        return "Password length must be at least 6";
    }

    for(let i = 0; i < length; i++){
        const random = Math.floor(Math.random() * allowedcharacter.length);
        password += allowedcharacter[random];
    }

    return password;
}

generate.addEventListener('click', () => {

    const passwordlength = inputlength.value;

    const includeLowercase = true;
    const includeUppercase = true;
    const includeNumbers = true;
    const includeSymbols = true;

    const result_password = generatedPassword(
        passwordlength,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols
    );

    result.textContent = result_password;
    result.style.padding="10px";
});

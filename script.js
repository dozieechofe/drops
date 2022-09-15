const submit = document.querySelector('.submit');
const form = document.querySelector('form');
form.addEventListener('submit',(e)=> {e.preventDefault();
})

const input = document.querySelector('.email');
const info = document.querySelector('#info');
const password = document.querySelector('.passkey');
const confirmPassword = document.querySelector('.confirm');
const infoPass = document.querySelector('#info-pass');
const reveal = document.querySelector('#togglePassword');
const strength = document.querySelector('#strength');
const username = document.querySelector('.username');
const infoName = document.querySelector('#info-name')

//validation of the email

const validateEmail = (userInput)=> {
    let emailRegExp = /.@/ig;
let result = userInput.match(emailRegExp);
(result===null)? info.innerHTML = 'This is not a valid email' : info.innerHTML = '';
 //playing with the tenary operator if (!userInput){ info.innerHTML ='';}
}
reveal.addEventListener('click', function (e){
    //toggle the type attribute
    const type = password.getAttribute('type')=== 'password' ? 'text' : 'password'; password.setAttribute('type', type);
    //toggle the eye slash icon
    This.classList.toggle('fa-eye-slash');
});

const passwordStrength = () => {
    if (password.value.length <=5){
        strength.innerHTML='Strength:weak';
        strength.style.color ='red';
    }
    if (password.value.length > 5){
        strength.innerHTML='Strength:strong';
        strength.style.color ='green';
}
if(!password.value || password.value.length === 0){
    strength.innerHTML ='';
}
}

const checkUserName =()=>{
    if (password.value.length <4){
        infoName.innerHTML='Enter a valid username';
    }
        else{infoName.innerHTML = '';}
    if (!username.value || username){
        infoName.innerHTML ='';
    }    
}
input.addEventListener('keyup', () => {
    validateEmail(input.value);
})

confirmPassword.addEventListener('keyup', ()=> {checkPassword();
})
password.addEventListener('keyup', ()=> {passwordStrength();
})
username.addEventListener('keyup', ()=> {checkUserName();
})


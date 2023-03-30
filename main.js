
/********************Functions to toggle forms*********************/

const fgtPassLink = document.querySelector (".forgot-password-link");
const sgnUpLink = document.querySelector(".sign-up-link");
const sgnInLink = document.querySelector(".sign-in-link");
const sgnInCont = document.querySelector("#sign-in-container");
const sgnUpCont = document.querySelector("#sign-up-container");
const fgtPassCont = document.querySelector("#forgot-password-container");
const backToSignIn = document.querySelector(".back-to-sign-in-link");

fgtPassLink.addEventListener("click", function(){
    sgnInCont.style.display = "none";
    sgnInCont.style.transition = "1s"
    sgnUpCont.style.display = "none";
    sgnUpCont.style.transition = "1s";
    fgtPassCont.style.display = "inline";
    fgtPassCont.style.marginTop = "150px";
    fgtPassCont.style.transition = "1s";
})

backToSignIn.addEventListener("click", function() {
    fgtPassCont.style.display = "none";
    fgtPassCont.style.transition = "1s"
    sgnUpCont.style.display = "none";
    sgnUpCont.style.transition = "1s";
    sgnInCont.style.display = "inline";
    sgnInCont.style.marginTop = "150px";
    sgnInCont.style.transition = "1s";
})


sgnUpLink.addEventListener("click", function(){
    sgnInCont.style.display = "none";
    sgnInCont.style.transition = "1s";
    fgtPassCont.style.display = "none";
    fgtPassCont.style.transition = "1s"
    sgnUpCont.style.display = "inline";
    sgnUpCont.style.marginTop = "150px";
    sgnUpCont.style.marginBottom = "50px";
    sgnUpCont.style.transition = "1s"
})

sgnInLink.addEventListener("click", function(){
    fgtPassCont.style.display = "none";
    fgtPassCont.style.transition = "1s"
    sgnUpCont.style.display = "none";
    sgnUpCont.style.transition = "1s";
    sgnInCont.style.display = "inline";
    sgnInCont.style.marginTop = "250px";
    sgnInCont.style.transition = "1s";
})



/********************Tips and validations*********************/

/****SIGN-IN-SECTION****/

const signInButton = document.querySelector("#signInBtn");
const signInEmailError = document.querySelector("#signInEmailError");
const signInPasswordError = document.querySelector("#signInPasswordError");

signInButton.addEventListener("click", function(e) {
    if (emailSignInInput.value == "" || passwordSignInInput.value == "") {
        signInEmailError.style.display = "inline";
        signInEmailError.style.fontSize = "12px";
        signInEmailError.style.color = "red";
        signInEmailError.style.transition = "0.3s";
        signInPasswordError.style.display = "inline";
        signInPasswordError.style.fontSize = "12px";
        signInPasswordError.style.color = "red";
        signInPasswordError.style.transition = "0.3s";
        e.preventDefault();
    }
});

/****SIGN-UP-SECTION****/

const emailLabel = document.querySelector("#emailLabel");
const emailConfirmLabel = document.querySelector("#emailConfirmLabel");
const passwordLabel = document.querySelector("#passwordLabel");
const passwordConfirmLabel = document.querySelector("#passwordConfirmLabel");
const registerBtn = document.querySelector("#registerBtn");
const emailLabelError = document.querySelector("#emailLabelError");
const emailConfirmLabelError = document.querySelector("#emailConfirmLabelError");
const passwordLabelError = document.querySelector("#passwordLabelError");
const passwordConfirmLabelError = document.querySelector("#passwordConfirmLabelError");
const emailSignInInput = document.querySelector("#sign-in-email");
const passwordSignInInput = document.querySelector("#sign-in-password");
const checkmark = document.querySelector("#checkmark");
const checkmarkText = document.querySelector("#checkmarkText");
const signUpError1 = document.querySelector("#signUpError1");
const signUpError2 = document.querySelector("#signUpError2");
const missingField1 = document.querySelector("#missingField1");
const missingField2 = document.querySelector("#missingField2");
const missingField3 = document.querySelector("#missingField3");
const missingField4 = document.querySelector("#missingField4");
const missingField5 = document.querySelector("#missingField5");
const missingField6 = document.querySelector("#missingField6");


    registerBtn.addEventListener("click", function(e) {

    if (!checkmark.checked) {
        checkmarkText.style.display = "inline";
        checkmarkText.style.color = "red";
        checkmarkText.style.fontSize = "12px";
        checkmarkText.style.transition = "0.3s";
        e.preventDefault();
    } else {
        checkmarkText.style.display = "none";
    }


    /****Checks whether any fields are missing****/



    if (signUpError1.value == "") {
        missingField1.style.display = "inline";
        missingField1.style.fontSize = "12px";
        missingField1.style.color = "red";
        missingField1.style.transition = "0.3s";
        e.preventDefault();
    } else {
        missingField1.style.display = "none";
    }

    if (signUpError2.value == "") {
        missingField2.style.display = "inline";
        missingField2.style.fontSize = "12px";
        missingField2.style.color = "red";
        missingField2.style.transition = "0.3s";
        e.preventDefault();
    } else {
        missingField2.style.display = "none";
    }

    if (emailLabel.value == "") {
        missingField3.style.display = "inline";
        missingField3.style.fontSize = "12px";
        missingField3.style.color = "red";
        missingField3.style.transition = "0.3s";
        e.preventDefault();
    } else {
        missingField3.style.display = "none";
    }

    if (emailConfirmLabel.value == "") {
        missingField4.style.display = "inline";
        missingField4.style.fontSize = "12px";
        missingField4.style.color = "red";
        missingField4.style.transition = "0.3s";
        e.preventDefault();
    } else {
        missingField4.style.display = "none";
    }

    if (passwordLabel.value == "") {
        missingField5.style.display = "inline";
        missingField5.style.fontSize = "12px";
        missingField5.style.color = "red";
        missingField5.style.transition = "0.3s";
        e.preventDefault();
    } else {
        missingField5.style.display = "none";
    }

    if (passwordConfirmLabel.value == "") {
        missingField6.style.display = "inline";
        missingField6.style.fontSize = "12px";
        missingField6.style.color = "red";
        missingField6.style.transition = "0.3s";
        e.preventDefault();
    } else {
        missingField6.style.display = "none";
    }


    if (emailLabel.value != emailConfirmLabel.value) {
        emailLabel.style.border = "1px solid red";
        emailLabel.style.backgroundColor = "indianred";
        emailLabel.style.transition = "0.3s";
        emailLabelError.style.display = "inline";
        emailLabelError.style.color = "red";
        emailLabelError.style.transition = "0.3s";
        emailConfirmLabel.style.border = "1px solid red";
        emailConfirmLabel.style.backgroundColor = "indianred";
        emailConfirmLabel.style.transition = "0.3s";
        emailConfirmLabelError.style.display = "inline";
        emailConfirmLabelError.style.color = "red";
        emailConfirmLabelError.style.transition = "0.3s";
        e.preventDefault();
    } else {
        emailLabel.style.removeProperty ('border');
        emailLabel.style.removeProperty ('backgroundColor');
        emailLabel.style.removeProperty ('border');
        emailLabelError.style.display = "none";
        emailConfirmLabel.style.removeProperty ('border');
        emailConfirmLabel.style.removeProperty ('backgroundColor');
        emailConfirmLabel.style.removeProperty ('border');
        emailConfirmLabelError.style.display = "none";
    }

    if (passwordLabel.value != passwordConfirmLabel.value) {
        passwordLabel.style.border = "1px solid red";
        passwordLabel.style.backgroundColor = "indianred";
        passwordLabel.style.transition = "0.3s";
        passwordLabelError.style.display = "inline";
        passwordLabelError.style.color = "red";
        passwordLabelError.style.transition = "0.3s";
        passwordConfirmLabel.style.border = "1px solid red";
        passwordConfirmLabel.style.backgroundColor = "indianred";
        passwordConfirmLabel.style.transition = "0.3s";
        passwordConfirmLabelError.style.display = "inline";
        passwordConfirmLabelError.style.color = "red";
        passwordConfirmLabelError.style.transition = "0.3s";
        e.preventDefault();
    } else {
        passwordLabel.style.removeProperty ('border');
        passwordLabel.style.removeProperty ('backgroundColor');
        passwordLabel.style.removeProperty ('border');
        passwordLabelError.style.display = "none";
        passwordConfirmLabel.style.removeProperty ('border');
        passwordConfirmLabel.style.removeProperty ('backgroundColor');
        passwordConfirmLabel.style.removeProperty ('border');
        passwordConfirmLabelError.style.display = "none";
    }
});

/****FORGOT-PASSWORD-SECTION****/
const fgtPassBtn = document.querySelector("#fgtPassBtn");
const forgotPswEmailError = document.querySelector("#forgotPswEmailError");
const fgtPassForm = document.querySelector("#fgtPassForm");

fgtPassBtn.addEventListener("click", function(e) {
    if(fgtPassForm.value == "") {
        forgotPswEmailError.style.display = "inline";
        forgotPswEmailError.style.fontSize = "12px";
        forgotPswEmailError.style.color = "red";
        forgotPswEmailError.style.transition = "0.3s";
        e.preventDefault();
    } else {
        forgotPswEmailError.display = "none";
    }
});


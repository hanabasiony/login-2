var signUpName = document.getElementById('sign-up-name')
var signUpEmail = document.getElementById('sign-up-email')
var signUpPass = document.getElementById('sign-up-pass')
var signUpbtn = document.querySelector('.signup-buttom')

// validation

var allrreg = document.querySelector('.already-msg')
var emptyInput = document.querySelector('.erorr-msg')
var succesMsg = document.querySelector('.succ-msg')



function dnoneAll() {
    allrreg.classList.add('d-none')
    emptyInput.classList.add('d-none')
    succesMsg.classList.add('d-none')
    document.querySelector('.email-msg').classList.add('d-none')
    document.querySelector('.pass-msg').classList.add('d-none')


}


var allUsers = []

if (localStorage.getItem('allUsers') != null) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'))

}
signUpbtn.addEventListener('click', function () {

    signUpName.addEventListener('keyup', dnoneAll)
    signUpEmail.addEventListener('keyup', dnoneAll)
    signUpPass.addEventListener('keyup', dnoneAll)

  
    var signUpNameValue = signUpName.value
    var signUpEmailValue = signUpEmail.value
    var signUpPassValue = signUpPass.value

    function resetForm() {
        signUpName.value = ""
        signUpEmail.value= ""
        signUpPass.value = ""
    }

    var User = {
        name: signUpNameValue,
        email: signUpEmailValue,
        pass: signUpPassValue,
    }

    var emailRegex = /^\S+@\S+\.\S+$/
    function validateEmail() {
        return emailRegex.test(signUpEmail.value)
    }

    var passRegex = /^.{5,}$/
    function validatePass() {
        return passRegex.test(signUpPass.value)
    }

    if (validateEmail() == false) {
        document.querySelector('.email-msg').classList.remove('d-none')
    }
    if (validatePass() == false) {
        document.querySelector('.pass-msg').classList.remove('d-none')
    }
    var checkEmail
    if (signUpNameValue === '' || signUpEmailValue === '' || signUpPassValue === '') {
        emptyInput.classList.remove('d-none')
        allrreg.classList.add('d-none')
        succesMsg.classList.add('d-none')
    } else {
        for (i = 0; i < allUsers.length; i++) {

            if (signUpEmailValue === allUsers[i].email) {
                checkEmail = true
            }
            else {
                checkEmail = false
            }
        }

        if (checkEmail == true) {

            allrreg.classList.remove('d-none')
            emptyInput.classList.add('d-none')
            succesMsg.classList.add('d-none')

        } else {
            if (validateEmail() && validatePass()) {
                allUsers.push(User)
                localStorage.setItem('allUsers', JSON.stringify(allUsers))
                succesMsg.classList.remove('d-none')
                allrreg.classList.add('d-none')
                emptyInput.classList.add('d-none')
                resetForm()
            }
        }
    }
})

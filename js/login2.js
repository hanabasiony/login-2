var signInEmail = document.getElementById('sign-in-email')
var signInPassword = document.getElementById('sign-in-pass')
var signInbtn = document.querySelector('.login-buttom')


var allUsers = []

if (localStorage.getItem('allUsers') != null) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'))

}

var allrreg = document.querySelector('.notreg-msg')
var emptyInput = document.querySelector('.erorr-msg')
var succesMsg = document.querySelector('.succ-msg')


function dnoneAll() {
    allrreg.classList.add('d-none')
    emptyInput.classList.add('d-none')
    succesMsg.classList.add('d-none')
}

signInEmail.addEventListener('keyup',dnoneAll)
signInPassword.addEventListener('keyup',dnoneAll)
signInbtn.addEventListener('keyup' ,dnoneAll)


signInbtn.addEventListener('click', function () {
    // validation
    if (signInEmail.value === '' || signInEmail.value === '') {
        var emptyInput = document.querySelector('.erorr-msg')
        emptyInput.classList.remove('d-none')
    } else {
        // to get the data to be checked and to be stored in local storage
        var signInEmailValue = signInEmail.value
        var signInPasswordValue = signInPassword.value
        var isReg = false
        // to check user data
        for (i = 0; i < allUsers.length; i++) {
            if (signInEmailValue === allUsers[i].email && signInPasswordValue === allUsers[i].pass) {
                console.log("succes")
                var cartoona = [`welcome ${allUsers[i].name}`]
                localStorage.setItem('userName', JSON.stringify(cartoona))
                window.location.href = "html/home.html"
                isReg = true

            }
        }
        if(isReg == false){

            var notreg = document.querySelector('.notreg-msg')
            notreg.classList.remove('d-none')
            console.log("enterd elsr ");


        }
    }
}
)

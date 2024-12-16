var userNameHtml = document.getElementById('user-name')

var allrreg = document.querySelector('.already-msg')
var emptyInput = document.querySelector('.erorr-msg')
var succesMsg = document.querySelector('.succ-msg')


var allUsers = []

if (localStorage.getItem('allUsers') != null) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'))

}


function dnoneAll() {
    allrreg.classList.add('d-none')
    emptyInput.classList.add('d-none')
    succesMsg.classList.add('d-none')
    document.querySelector('.email-msg').classList.add('d-none')
    document.querySelector('.pass-msg').classList.add('d-none')


}

console.log("User is on home");
var nameSelection = []
nameSelection = JSON.parse(localStorage.getItem('userName'))
var x;
for (var i = 0; i < nameSelection.length; i++) {
    x = i
}
userNameHtml.innerHTML = nameSelection[x]
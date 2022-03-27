function logButtonSwap(element) {
    var login = "Login", logout = "Logout"
    if (element.innerText == login) {
        element.innerText = logout;
    }
    else {
        element.innerText = login;
    }
}

function likeAlert(element) {
    alert("Ninja was liked!")
}

function removeBtn(element) {
    element.remove();
}
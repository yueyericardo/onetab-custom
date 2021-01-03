function setSeparatorColor() {
    a = document.querySelector('#contentAreaDiv');
    a.childNodes[1].style.borderBottomColor = "rgb(82 82 82)";
}

window.onload = function() {
    setSeparatorColor();
}
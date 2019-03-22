function ToggleModal(idModal) {
    var modal = document.getElementById(idModal);
    if (modal.style.display == "none" || modal.style.display == '') {modal.style.display = "block"} else {modal.style.display = "none"}
}
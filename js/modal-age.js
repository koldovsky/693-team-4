const modalWindow = document.getElementById('modal_age').style.display = 'block';
const modalWindowClose = document.getElementById('modal_window_close');
const modalWindowOpen = document.getElementById('modal_window_open');

modalWindowClose.onclick = function() {
    document.getElementById('modal_age').style.display = 'none';
}

modalWindowOpen.onclick = function() {
    window.location.href = 'modal_age.html';
}
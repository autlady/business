const btn = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const btnClose = document.querySelector('[data-modal-close]');
const body = document.querySelector('body');
if (modal) {
    btn.addEventListener('click', function() {
        modal.classList.remove('hidden');
        body.classList.add('noscroll');
    });

    btnClose.addEventListener('click', function() {
        modal.classList.add('hidden');
        body.classList.remove('noscroll');
    });

    modal.addEventListener('click', function() {
        modal.classList.add('hidden');
        body.classList.remove('noscroll');
    });

    modal.querySelector('.modal-window').addEventListener('click', function(e) {
        e.stopPropagation();
    });
}
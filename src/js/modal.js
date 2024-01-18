const btn = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const btnClose = document.querySelector('[data-modal-close]');

btn.addEventListener('click', function() {
    modal.classList.remove('hidden');
});

btnClose.addEventListener('click', function() {
    modal.classList.add('hidden');
});

modal.addEventListener('click', function() {
    modal.classList.add('hidden');
});

modal.querySelector('.modal-window').addEventListener('click', function(e) {
    e.stopPropagation();
})
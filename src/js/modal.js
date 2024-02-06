const btns = document.querySelectorAll('[data-modal-button]');
const modals = document.querySelectorAll('.modal-window');
const btnsClose = document.querySelectorAll('[data-modal-close]');
const body = document.querySelector('body');
if (btns) {
    for (let btn of btns){
        btn.addEventListener('click', function(e) {
            
            const thisData = btn.getAttribute('data-modal-button');            
            const thisModal = document.querySelector(`#${thisData}`);
            thisModal.classList.remove('hidden');
            body.classList.add('noscroll');
        });


    }
    for (let close of btnsClose) {
        close.addEventListener('click', function (e) {           
            this.closest('[data-modal]').classList.add('hidden');
            body.classList.remove('noscroll');
        });


    }
    /*клик по полупрозрачной области модалки */
    for (let modal of modals) {
        modal.addEventListener('click', function (e) {

            if (e.target == e.currentTarget){
                modal.closest('[data-modal]').classList.add('hidden');
                body.classList.remove('noscroll');
            }
        });


    }
}
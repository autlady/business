// клик по кнопке. Открыть/закрыть select
document.querySelector('.dropdown__button').addEventListener('click', function () {
    document.querySelector('.dropdown__list').classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
});

// выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
document.querySelectorAll('.dropdown__list-item').forEach(function(listItem){
    listItem.addEventListener('click', function (e){
        e.stopPropagation();
        document.querySelector('.dropdown__button').innerText = this.innerText;
        document.querySelector('.dropdown__button').focus();
        document.querySelector('.dropdown__input-hidden').value = this.dataset.value;
        document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');
    })
})

// клик снаружи дропдауна. Закрыть дропдаун
document.addEventListener('click', function (e){
    if (e.target !== document.querySelector('.dropdown__button')) {
        document.querySelector('.dropdown__button').classList.remove('dropdown__button--active');
        document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');

    }
})

document.addEventListener('keydown', function (e) {
    if ( e.key === 'Tab' || e.key === 'Escape') {
        document.querySelector('.dropdown__button').classList.remove('dropdown__button--active');
        document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');
    }
})
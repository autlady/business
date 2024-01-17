// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden')

    // клик по кнопке. Открыть/закрыть select
    dropDownBtn.addEventListener('click', function (e) {
        e.preventDefault();
        dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
    });

    // выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownBtn.focus();
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove('dropdown__list--visible');
        })
    })

    // клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener('click', function (e) {
        if (e.target !== dropDownBtn) {
            dropDownBtn.classList.remove('dropdown__button--active');
            dropDownList.classList.remove('dropdown__list--visible');

        }
    })

    // нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropDownBtn.classList.remove('dropdown__button--active');
            dropDownList.classList.remove('dropdown__list--visible');
        }
    })

    const form = document.querySelector('#custom-form');
    if (form) {
        const customBtn = document.querySelector('.btn--reset');
        const customSelects = document.querySelectorAll('.dropdown__button');

        customBtn.addEventListener('click', function() {
            for (item of customSelects) {
                item.textContent = "Не выбран";
        }
    });
}

    const formMob = document.querySelector('#custom-form-mob');
    if (form) {
        const customBtn = document.querySelector('.btn-reset-mob');
        const customSelects = document.querySelectorAll('#dropdown-btn-mob');

        customBtn.addEventListener('click', function() {
            for (item of customSelects) {
                item.textContent = "Не выбран";
        }
    });
}

});


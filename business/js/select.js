// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
const dropdowns = document.querySelectorAll('.dropdown');
if (dropdowns.length > 0){
    for (drop of dropdowns){
        const dropDownBtn = drop.querySelector('.dropdown__button');
         const dropDownList = drop.querySelector('.dropdown__list');
        const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
        const dropDownInput = drop.querySelector('.dropdown__input-hidden');

         // клик по кнопке. Открыть/закрыть select
        dropDownBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const dropActive = document.querySelector('.dropdown__list--visible');
            if (dropActive){
                dropActive.classList.remove('dropdown__list--visible');
            }
            if (this.classList.contains('dropdown__button--active')){
                dropDownList.classList.remove('dropdown__list--visible');
                this.classList.remove('dropdown__button--active');
            }else{
                dropDownList.classList.add('dropdown__list--visible');
                this.classList.add('dropdown__button--active');
            }
           
        });

        // выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
        dropDownListItems.forEach(function (listItem) {
            listItem.addEventListener('click', function (e) {
                e.stopPropagation();
                dropDownBtn.querySelector('span').innerText = this.innerText;
                dropDownBtn.querySelector('span').classList.add('text-black');

                dropDownBtn.focus();
                dropDownInput.value = this.dataset.value;
                dropDownList.classList.remove('dropdown__list--visible');
                dropDownBtn.classList.remove('dropdown__button--active');
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

        const forms = document.querySelectorAll('.js-form');
        if (forms) {
            for (let formItem of forms){
                const customBtn = formItem.querySelector('.js-reset');
                const customSelects = formItem.querySelectorAll('.js-btn span');

                customBtn.addEventListener('click', function() {
                    
                    for (item of customSelects) {
                        
                        item.textContent = "Не выбран";
                        item.classList.remove('text-black');
                 }
                });
            }
       
    }
    }

}
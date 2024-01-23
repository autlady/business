const expandBtns = document.querySelectorAll('.cases-card__expand');

console.log(expandBtns)

const cardTexts = document.querySelectorAll('.cases-card__text');

console.log(cardTexts)

expandBtns.forEach(function (btn) {
    btn.addEventListener('click', function() {
        console.log("click on expand!!")
    })
}) 

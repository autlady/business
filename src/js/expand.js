const expandBtn = document.querySelector('.cases-card__expand');

console.log(expandBtn)

const cardText = document.querySelector('.cases-card__text');

console.log(cardText)

expandBtn.addEventListener('click', function() {
        console.log("click on expand!!")
        cardText.classList.add("active");
        expandBtn.classList.add("hidden");
    })


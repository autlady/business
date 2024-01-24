// const expandBtn = document.querySelector('.cases-card__expand');

// console.log(expandBtn)

// const cardText = document.querySelector('.cases-card__text');

// console.log(cardText)

// const closeTextBtn = document.querySelector('.cases-card__close');

// expandBtn.addEventListener('click', function() {
//         console.log("click on expand!!")
//         cardText.classList.add("active");
//         expandBtn.classList.add("hidden");
//         closeTextBtn.classList.remove("hidden");
        
// })

// closeTextBtn.addEventListener('click', function() {
//     console.log("click on close!!")
//     cardText.classList.remove("active");
//     expandBtn.classList.remove("hidden");
//     closeTextBtn.classList.add("hidden");
// })

const casesCards = document.querySelectorAll('.cases-card');

for (card of casesCards) {
    const expandBtn = card.querySelector('.cases-card__expand');
    const cardText = card.querySelector('.cases-card__text');
    const closeTextBtn = card.querySelector('.cases-card__close');
    expandBtn.addEventListener('click', function() {
        console.log("click on close button")
        cardText.classList.add("active");
        expandBtn.classList.add("hidden");
        closeTextBtn.classList.remove("hidden");
    });
    closeTextBtn.addEventListener('click', function() {
        console.log("click on close!!")
        cardText.classList.remove("active");
        expandBtn.classList.remove("hidden");
        closeTextBtn.classList.add("hidden");
})
}







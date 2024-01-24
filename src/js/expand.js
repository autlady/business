const casesCards = document.querySelectorAll('.cases-card');

for (card of casesCards) {
    const expandBtn = card.querySelector('.cases-card__expand');
    const cardText = card.querySelector('.cases-card__text');
    const closeTextBtn = card.querySelector('.cases-card__close');
    expandBtn.addEventListener('click', function() {
        cardText.classList.add("active");
        expandBtn.classList.add("hidden");
        closeTextBtn.classList.remove("hidden");
    });
    closeTextBtn.addEventListener('click', function() {
        cardText.classList.remove("active");
        expandBtn.classList.remove("hidden");
        closeTextBtn.classList.add("hidden");
})
}







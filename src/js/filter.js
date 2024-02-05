const closefFilters = document.querySelectorAll('.close-filter');
if (closefFilters.length > 0) {
    for (let closeBtn of closefFilters) {
        closeBtn.addEventListener('click', () => {
            closeBtn.closest('.filter').remove();
        });
    }
}

const caseFilters = document.querySelector('.select-wrapper');
if (caseFilters) {
    const currentFilters = caseFilters.querySelectorAll('.filter');

    if (currentFilters.length > 0) {
        const currentFiltersRemove = caseFilters.querySelector('#filters-reset');
        currentFiltersRemove.addEventListener('click', function () {
            for (let item of currentFilters) {
                item.remove();
            }
            this.remove();
        });
    }
}

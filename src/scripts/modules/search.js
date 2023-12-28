/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * search
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function initializeSearch() {
    var search = document.getElementById('search');
    if (search) {
        search.addEventListener('submit', function (event) {
            event.preventDefault();

            const searchTerm = event.target.search.value.toLowerCase();
            const listItems = document.querySelectorAll('#search-all-posts [data-monz-search-result]');

            listItems.forEach(item => {
                const textContent = item.textContent.toLowerCase();
                if (textContent.includes(searchTerm)) {
                    // item.classList.add('match');
                    item.classList.remove('hidden');
                } else {
                    // item.classList.remove('match');
                    item.classList.add('hidden');
                }
            });
        });
    }

}
/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * populate the modal gallery
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function initializeModalGallery() {
    // var root = document.documentElement;
    const modalGalleryList = document.getElementById('modal-gallery-list');
    // find all figure elements with data-monz-show-in-modal="true"
    const figures = document.querySelectorAll('figure[data-monz-show-in-modal="true"]');

    if (modalGalleryList && figures) {
        // clone and append each figure to the modal list
        figures.forEach((figure) => {
            const li = document.createElement('li');
            li.className = 'mb-spacer-2';
            li.innerHTML = `
          <div class="monz-tile break-inside-avoid-column">
            ${figure.outerHTML}
          </div>
        `;
            modalGalleryList.appendChild(li);
        });
    }
}
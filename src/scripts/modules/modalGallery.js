/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * populate the modal gallery
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function initializeModalGallery() {
  var root = document.documentElement;
  const modalGalleryActive = document.getElementById('modal-gallery-active');
  const modalGalleryList = document.getElementById('modal-gallery-list');
  const modalGalleryCounterCurrent = document.getElementById('modal-gallery-current');
  const modalGalleryCounterTotal = document.getElementById('modal-gallery-total');

  // find all figure elements with data-monz-show-in-modal="true"
  const figures = document.querySelectorAll('figure[data-monz-show-in-modal="true"]');

  if (modalGalleryList && figures) {
    // clone and append each figure to the modal list
    figures.forEach((figure, index) => {
      const li = document.createElement('li');
      li.className = 'mb-spacer-2';
      // apply 'active' class only to the first item
      const divClass = index === 0 ? 'monz-tile break-inside-avoid-column active' : 'monz-tile break-inside-avoid-column';

      li.innerHTML = `
          <div class="${divClass}">
            ${figure.outerHTML}
          </div>
        `;
      modalGalleryList.appendChild(li);
    });

    // activate the first item
    if (figures[0]) {
      modalGalleryActive.appendChild(figures[0].cloneNode(true));
    }

    // counter
    modalGalleryCounterTotal.innerHTML = figures.length;

    const clonedFiguresInsideTheModal = document.querySelectorAll('#modal-gallery-list .monz-tile');
    clonedFiguresInsideTheModal.forEach(clonedFigureInsideTheModal => {
      clonedFigureInsideTheModal.addEventListener('click', (event) => {
        document.querySelector('#modal-gallery-list .monz-tile.active').classList.remove('active');
        clonedFigureInsideTheModal.classList.add('active');
        modalGalleryActive.innerHTML = '';
        // clone the clicked figure and append it to modalGalleryActive
        const figureToDisplay = clonedFigureInsideTheModal.querySelector('figure').cloneNode(true);
        modalGalleryActive.appendChild(figureToDisplay);

        // update the current counter
        modalGalleryCounterCurrent.innerHTML = Array.from(clonedFiguresInsideTheModal).indexOf(clonedFigureInsideTheModal) + 1;
      });
    });
  }

  // set the modal menu element
  const $targetEl = document.getElementById('modal-gallery');

  // options with default values, https://flowbite.com/docs/components/modal/#javascript-behaviour
  const options = {
    onHide: () => {
      console.debug('modal is hidden');
      root.classList.remove("overflow-hidden");
    },
    onShow: () => {
      console.debug('modal is shown');
      root.classList.add("overflow-hidden");
    },
  };

  // instance options object
  const instanceOptions = {
    id: 'modal-gallery',
    override: true
  };

  const modalGallery = new Modal($targetEl, options, instanceOptions);

  const modalGalleryTriggers = document.querySelectorAll('button[data-monz-modal-trigger]');
  const modalGalleryClose = document.querySelector('button[data-monz-modal-hide]');

  modalGalleryTriggers.forEach(button => {
    button.addEventListener('click', () => {
      modalGallery.show()
    });
  });

  modalGalleryClose.addEventListener('click', () => {
    modalGallery.hide()
  });

}
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-callback]'),
    closeModalBtn: document.querySelector('[data-modal-close-callback]'),
    modal: document.querySelector('[data-modal-callback]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-callback');
  }
})();

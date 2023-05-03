const initOpenMenu = () => {
  const navMain = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');
  navMain.classList.add('main-nav--hidden');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--hidden')) {
      navMain.classList.remove('main-nav--hidden');
    } else {
      navMain.classList.add('main-nav--hidden');
    }
  });
};

const initModalOk = () => {
  const reviewButton = document.querySelector('.review__submit-button');
  const modalOkContainer = document.querySelector('.modal-container-review-send');
  const modalOkCloseButton = document.querySelector('.modal-container__review-send-close-button');

  if (!reviewButton) {
    return;
  }

  reviewButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalOkContainer.classList.remove('modal-container-review-send--close');
  });

  modalOkCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalOkContainer.classList.add('modal-container-review-send--close');
  });

  modalOkContainer.addEventListener('click', (evt) => {
    if (evt.target.closest('.modal-container__review-send')) {
      return;
    }
    evt.preventDefault();
    modalOkContainer.classList.add('modal-container-error--close');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      modalOkContainer.classList.add('modal-container-review-send--close');
    }
  });
};

// const initModalError = () => {
//   const reviewButton = document.querySelector('.review__submit-button');
//   const modalErrorContainer = document.querySelector('.modal-container-error');
//   const modalErrorCloseButton = document.querySelector('.modal-container__error-close-button');

//   if (!reviewButton) {
//     return;
//   }

//   reviewButton.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     modalErrorContainer.classList.remove('modal-container-error--close');
//   });

//   modalErrorCloseButton.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     modalErrorContainer.classList.add('modal-container-error--close');
//   });

//   modalErrorContainer.addEventListener('click', (evt) => {
//     if (evt.target.closest('.modal-container__error')) {
//       return;
//     }
//     evt.preventDefault();
//     modalErrorContainer.classList.add('modal-container-error--close');
//   });

//   document.addEventListener('keydown', (evt) => {
//     if (evt.key === 'Escape') {
//       evt.preventDefault();
//       modalErrorContainer.classList.add('modal-container-error--close');
//     }
//   });
// };

initOpenMenu();
initModalOk();
// initModalError();

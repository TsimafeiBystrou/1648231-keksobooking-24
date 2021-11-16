import { isEscEvent } from './util.js';

const renderErrorMesssage = () => {
  const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  const errorButton = errorMessage.querySelector('.error__button');

  document.body.appendChild(errorMessage);

  const onMessageClick = (evt) => {
    evt.preventDefault();
    errorMessage.remove();
    document.removeEventListener('click', (onMessageClick));
  };

  const onEscapeClick = (evt) => {
    evt.preventDefault();
    if (isEscEvent) {
      errorMessage.remove();
      document.removeEventListener('keydown', (onEscapeClick));
    }
  };

  const onErrorButtonClick = (evt) => {
    evt.preventDefault();
    errorMessage.remove();
    errorButton.removeEventListener('click', (onErrorButtonClick));
  };

  document.addEventListener('click', (onMessageClick));
  document.addEventListener('keydown', (onEscapeClick));
  errorButton.addEventListener('click', (onErrorButtonClick));

};

const renderSuccessMesssage = () => {
  const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);

  document.body.appendChild(successMessage);

  const onMessageClick = (evt) => {
    evt.preventDefault();
    successMessage.remove();
    document.removeEventListener('click', (onMessageClick));
  };

  const onEscapeClick = (evt) => {
    evt.preventDefault();
    if (isEscEvent) {
      successMessage.remove();
      document.removeEventListener('keydown', (onEscapeClick));
    }
  };


  document.addEventListener('click', (onMessageClick));
  document.addEventListener('keydown', (onEscapeClick));
};

const renderServerErrorMessage = () => {
  const serverMessage = document.querySelector('#server__error').content.querySelector('.server__error').cloneNode(true);

  document.body.appendChild(serverMessage);

};

export { renderErrorMesssage, renderSuccessMesssage, renderServerErrorMessage };

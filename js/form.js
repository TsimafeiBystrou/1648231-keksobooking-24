const form = document.querySelectorAll('form');
const formFieldset = document.querySelectorAll('fieldset');

const disableForm = () => {
  form.forEach((status) => {
    status.classList.add('ad-form--disabled');
  });
  formFieldset.forEach((status) => {
    status.setAttribute('disabled');
  });
};

const activeForm = () => {
  form.forEach((status) => {
    status.classList.remove('ad-form--disabled');
  });
  formFieldset.forEach((status) => {
    status.removeAttribute('disabled');
  });
};

export { disableForm, activeForm };

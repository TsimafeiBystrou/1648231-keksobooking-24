const getData = (onSucces) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offersData) => {
      onSucces(offersData);
    });
};

const sendData = (onSucces, onFail, body) => {
  fetch(
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSucces();
      } else{
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };

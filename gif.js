const getCat = () => {
  const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=leBI4z9YLQleG5lKlrmz96foCSXKCGRD&s=cats', {
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((response) => {
      img.src = response.data.images.original.url;
    });
};
const button = document.querySelector('button');

getCat();

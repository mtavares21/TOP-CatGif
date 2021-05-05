const getCat = () => {
  const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=leBI4z9YLQleG5lKlrmz96foCSXKCGRD&s=cats', {
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((response) => {
      img.src = response.data.images.original.url;
    })
    .catch((error) => {
      img.src = 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9';
      alert('Ups, cannot fetch the cat rigth about now! Please try again later.');
    });
};
getCat();

const searchGif = () => {
  const img = document.querySelector('img');
  const search = document.getElementById('search');
  const userInput = search.value;
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=leBI4z9YLQleG5lKlrmz96foCSXKCGRD&q=${userInput}&limit=25&offset=0&rating=g&lang=en`, {
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((response) => {
      let index = Math.floor(Math.random()*Array.from(response.data).length)
      img.src = response.data[index].images.original.url;
    })
    .catch((error) => {
      img.src = 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9';
      alert('Ups, cannot fetch the cat rigth about now! Please try again later.');
    });
};

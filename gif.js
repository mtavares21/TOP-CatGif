const getCat = async () => {
  const img = document.querySelector('img');
  try {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=leBI4z9YLQleG5lKlrmz96foCSXKCGRD&s=cats', {
      mode: 'cors',
    });
    const json = await response.json();
    img.src = json.data.images.original.url;
  } catch {
    img.src = 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9';
    alert('Ups, cannot fetch the cat rigth about now! Please try again later.');
  }
};
getCat();

const searchGif = async () => {
  const img = document.querySelector('img');
  const search = document.getElementById('search');
  const userInput = search.value;
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=leBI4z9YLQleG5lKlrmz96foCSXKCGRD&q=${userInput}&limit=25&offset=0&rating=g&lang=en`, {
      mode: 'cors',
    });
    const json = await response.json();
    const index = Math.floor(Math.random() * Array.from(json.data).length);
    img.src = json.data[index].images.original.url;
  } catch {
    img.src = 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9';
    alert('Ups, cannot fetch the cat rigth about now! Please try again later.');
  }
};

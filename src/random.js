function randomise(value) {
  return Math.floor(Math.random() * (value + 1));
}

const startGame = () => {
  const pool = document.getElementsByClassName('field');
  const img = '<img src="goblin.png">';
  const max = pool.length - 1;
  let index;
  let last;
  setInterval(() => {
    index = randomise(max);
    if (index === last) {
      index += 1;
      if (index > max) {
        index = 0;
      }
    }
    pool.item(index).innerHTML = img;
    pool.item(last).innerHTML = ' ';
    last = index;
  }, 1000);
};

startGame();

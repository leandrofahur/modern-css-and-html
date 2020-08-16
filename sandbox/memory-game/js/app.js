const memoryCard = document.querySelector('.memory-grid');

for (let i = 0; i < 12; i++) {
  const div = document.createElement('div');
  div.innerHTML = `<img src="../img/img1.jpeg" alt="">`;
  memoryCard.appendChild(div);
}



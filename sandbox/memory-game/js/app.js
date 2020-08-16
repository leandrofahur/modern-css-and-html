const memoryCard = document.querySelector('.memory-grid');

for (let i = 1; i < 10; i++) {
  const div = document.createElement('div');
  div.innerHTML = `<img src="../img/img${i}.jpg">`

  memoryCard.appendChild(div)
}







// for (let i = 0; i < 24; i++) {
//   fetch('https://randomuser.me/api/').then(data => {
//     data.json().then(result => {
//       profile = result.results[0].picture.medium;

//       const div = document.createElement('div');
//       div.innerHTML = `<img src="${profile}" alt="">`;
//       memoryCard.appendChild(div);
//     })
//   });
// }






// const logo = document.createElement('img');
// logo.src = './assets/img/logo.png';

// const container = document.createElement('div');
// container.setAttribute('class', 'container');

// app.appendChild(logo);
// app.appendChild(container);



var request = new XMLHttpRequest();
var result = fetch('https://kitsu.io/api/edge/anime')
.then(data => {
return data.json();
});
console.log(result[0])
request.open('GET', 'https://kitsu.io/api/edge/anime', true);
request.onload = function () {

  // Begin accessing JSON data here
  const data = JSON.parse(this.response);
  console.log(data)
  if (request.status >= 200 && request.status < 400) {
        var result = {}

        for (var i in data)
        {
            console.log(data.data[i])
        }

        console.log(result)

        data.forEach(anime => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const h1 = document.createElement('h1');
        h1.textContent = anime.titles;

        const p = document.createElement('p');
        anime.synopsis = anime.synopsis.substring(0, 300);
        p.textContent = ""+anime.synopsis;

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        });
    } 
    else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = "Gah, it's not working!";
        app.appendChild(errorMessage);
    }
}

request.send();
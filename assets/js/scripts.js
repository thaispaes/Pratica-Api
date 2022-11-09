const logo = document.createElement('img');
logo["src"] = './assets/img/logo-anime.jpg';
const app = document.getElementById('root');

const title = document.createElement('h2');
title.setAttribute('class', 'header');
title.textContent = 'Anime Trending';

const paragraph = document.createElement('p');
paragraph.setAttribute('class', 'p-header');
paragraph.textContent = 'List of trending animes most updated';


const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(title);
app.appendChild(paragraph);
app.appendChild(container);




var request = new XMLHttpRequest();
request.open('GET', 'https://kitsu.io/api/edge/trending/anime', true);
request.onload = function () {

  // Begin accessing JSON data here
  const animeAsJson = JSON.parse(this.response);
  console.log(animeAsJson.data[0])
  if (request.status >= 200 && request.status < 400) {
        var result = {}

        for (let i = 0; i < animeAsJson.data.length ;i++)
        {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = animeAsJson.data[i].attributes.canonicalTitle;

            

            const p = document.createElement('p');
            p.textContent = animeAsJson.data[i].attributes.description;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);

        }
        
    } 
    else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = "Gah, it's not working!";
        app.appendChild(errorMessage);
    }
}

request.send();

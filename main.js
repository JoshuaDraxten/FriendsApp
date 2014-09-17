var season = [24,24,25,24,24,25,24,24,24,22];

seasonNum = Math.floor(Math.random() * 10) + 1;

episodeNum = Math.floor(Math.random() * season[seasonNum-1]) + 1;

var element = document.querySelector("#greeting");
element.innerText = 'Season: ' + seasonNum + '\nEpisode: ' + episodeNum;

const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');
const apiURL = 'https://api.lyrics.ovh';

const fetchPaginationPage = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
};

const templateSongListItem = (song) => {
  return `
    <li>
      <span><strong>${song.artist.name}</strong> - ${song.title}</span>
      <button class="btn" data-artist="${song.artist.name}" data-song-title="${song.title}">Get Lyrics</button>
    </li>
  `;
};

const showData = (data) => {
  result.innerHTML = `
    <ul class="songs">
      ${data.data.map((song) => templateSongListItem(song)).join('')}
    </ul>
  `;

  if (data.prev || data.next) {
    more.innerHTML = '';
    if (data.prev) {
      more.innerHTML += `<button class="btn" onclick="fetchPaginationPage('${data.prev}')">Prev</button>`;
    }
    if (data.next) {
      more.innerHTML += `<button class="btn" onclick="fetchPaginationPage('${data.next}')">Next</button>`;
    }
  } else {
    more.innerHTML = '';
  }
};

const searchSongs = async (term) => {
  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();
  showData(data);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert('Please type in a search term');
  } else {
    searchSongs(searchTerm);
  }
});

const getLyrics = async (artist, songTitle) => {
  const fetchURL = `${apiURL}/v1/${artist}/${songTitle}`;
  console.log(fetchURL);
  const res = await fetch(fetchURL);
  const data = await res.json();


  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

  result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
    <span>${lyrics}</span>
  `;

  more.innerHTML = "";
};

// Get lyrics on button click
result.addEventListener('click', (e) => {
  const clickedElement = e.target;
  if(clickedElement.tagName === 'BUTTON') {
    const artist = clickedElement.dataset.artist;
    const songTitle = clickedElement.dataset.songTitle;
    getLyrics(artist, songTitle);
  }
});

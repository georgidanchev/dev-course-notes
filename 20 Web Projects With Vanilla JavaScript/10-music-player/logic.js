const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// songs name list
const songs = ['hey', 'summer', 'ukulele'];

// Keep track of songs
let songIndex = 2;

// Update song details
const loadSong = (song) => {
  title.innerHTML = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

const playSong = () => {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  audio.play();
}

const pauseSong = () => {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  audio.pause();
}

const playPrevSong = () => {
  songIndex - 1 < 0 ? songIndex = songs.length - 1 : songIndex--;
  loadSong(songs[songIndex]);
  playSong();
}

const playNextSong = () => {
  songIndex + 1 > songs.length - 1 ? songIndex = 0 : songIndex++;
  loadSong(songs[songIndex]);
  playSong();
}

const updateProgressBar = (e) => {
  // Destructuring event data
  const {
    duration : totalDuration,
    currentTime
  } = e.srcElement

  // Getting the progress percentage
  const progressPrecent = (currentTime / totalDuration) * 100;

  // Update progress bar width percentage
  progress.style.width = `${progressPrecent}%`;
}

const setAudioProgress = (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Play or pause current song
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');
  isPlaying ? pauseSong() : playSong();
});

// Change song click events
prevBtn.addEventListener('click', playPrevSong)
nextBtn.addEventListener('click', playNextSong)

// Time/song update event
audio.addEventListener('timeupdate', updateProgressBar);

// Set audio progress event
progressContainer.addEventListener('click', setAudioProgress);

// When the song playback ends
audio.addEventListener('ended', playNextSong);

// Initially load song details into DOM
loadSong(songs[songIndex]);
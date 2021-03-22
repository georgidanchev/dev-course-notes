const play = document.querySelector('#play'),
  progress = document.querySelector('#progress'),
  stop = document.querySelector('#stop'),
  timestamp = document.querySelector('#timestamp'),
  video = document.querySelector('#video');

let isTimeBeingUpdated = false;

// Play/pause video on click
const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

// Update play/pause icon
const updatePlayIcon = () => {
  if (video.paused) {
    play.innerHTML = "<i class='fa fa-play fa-2x'></i>";
  } else {
    play.innerHTML = "<i class='fa fa-pause fa-2x'></i>";
  }
};

const zerofiy = (num) => {
  // If less then 10 add 0 in front
  return (num < 10 ? '0' : '') + num;
}

// Update video progress and timestamp
const updateProgress = () => {
  if(!isTimeBeingUpdated) {
    progress.value = (video.currentTime / video.duration) * 100;
  }
  const mins = zerofiy(Math.floor(video.currentTime / 60));
  const secs = zerofiy(Math.floor(video.currentTime % 60));
  timestamp.innerHTML = `${mins}:${secs}`;
};

// Set video time progress
const setVideoProgress = () => {
  video.currentTime = (+progress.value * video.duration) / 100;
};

// Stop video playback
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

const updatingTime = (bool) => {
  isTimeBeingUpdated = bool;
}

// Event listeners
play.addEventListener('click', toggleVideoStatus);
progress.addEventListener('change', setVideoProgress);

progress.addEventListener('mouseup', updatingTime(false));
progress.addEventListener('mousedown', updatingTime(true));

stop.addEventListener('click', stopVideo);
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
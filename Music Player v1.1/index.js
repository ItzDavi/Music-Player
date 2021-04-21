const musicContainer = document.querySelector('.music-container');

const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

const audio = document.querySelector('#audio');

const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');

const title = document.querySelector('#title');
const thumbnail = document.querySelector('#thumbnail');

const songs = ['track', 'track-2', 'track-3'];
const thumbnails = ['thumbnail', 'thumbnail-2', 'thumbnail-3'];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `files/${song}.mp3`;
  thumbnail.src = `files/${song}.jpg`;
}

function playSong() {
  musicContainer.classList.add("play");
}

function pauseSong() {
  musicContainer.classList.remove("play");
}

playBtn.addEventListener("click", event => {
  console.log("gsdhd");
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

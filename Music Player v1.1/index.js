const musicContainer = document.getElementById('music-container');

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');

const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');

const title = document.getElementById('title');
const thumbnail = document.getElementById('thumbnail');

const songs = ['track', 'track-2', 'track-3'];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `files/${song}.mp3`;
  thumbnail.src = `files/${song}.jpg`;
}

function playSong() {
  playBtn.classList.add("play");
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

function pauseSong() {
  playBtn.classList.remove("play");
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
}

playBtn.addEventListener("click", () => {
  console.log("click");
  const isPlaying = playBtn.classList.contains("play");

  if (playBtn.classList.contains("play")) {
    pauseSong();
  } else {
    playSong();
  }
});


prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

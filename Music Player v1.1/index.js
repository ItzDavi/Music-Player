//Container for the whole player
const musicContainer = document.getElementById('music-container');

//Buttons contants
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

//Audio constant
const audio = document.getElementById('audio');
var isPlaying;

//Progressbar container and progressbar
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');

//Song constants
const title = document.getElementById('title');
const thumbnail = document.getElementById('thumbnail');

//Songs array
const songs = ['track', 'track-2', 'track-3'];

//Song index
let songIndex = 0;

//Load the song of position songIndex
loadSong(songs[songIndex]);

function loadSong(song) {
  //Write the title
  title.innerText = song;
  //Get files
  audio.src = `files/${song}.mp3`;
  thumbnail.src = `files/${song}.jpg`;
}

function playSong() {
  //Add the play class
  playBtn.classList.add('play');
  playBtn.classList.remove('pause');

  //Assign true value to isPlaying to stop it after
  isPlaying = true;

  //Replace the play button with the pause
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  //Start playing the song
  audio.play();
}

function pauseSong() {
  //Remove the play class
  playBtn.classList.remove('play');
  playBtn.classList.add('pause');

  isPlaying = false;

  //Replace the pause button with the play
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  //Pause playing the song
  audio.pause();
}

function prevSong() {
  //Decrease the index
  songIndex--;

  //If there arent songs left start from the last
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  //Load the song
  loadSong(songs[songIndex]);
  //Play the song
  playSong();
}

function nextSong() {
  //Increse the index
  songIndex++;

  //If there arent songs left start from the first
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  //Load the song
  loadSong(songs[songIndex]);
  //Play the song
  playSong();
}

function checkPlaying(isPlaying) {
  if (typeof isPlaying == 'undefined') {
    isPlaying = false;
  } else {

  }
}

//Play button click listener
playBtn.addEventListener('click', () => {
  //Check for music playing
  checkPlaying(isPlaying);

  //Is music already playing ?
  //if (playBtn.classList.contains('play')) {
  if (isPlaying) {
    //If yes, pause
    pauseSong();
  } else {
    //If not, play
    playSong();
  }
});

//Previous song button click listener
//If clicked, prev song
prevBtn.addEventListener('click', prevSong);
//Next song button click listener
//If clicked next song
nextBtn.addEventListener('click', nextSong);

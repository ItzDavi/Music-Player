//Song variables
let current_song = document.querySelector(".song-name");
let current_artist = document.querySelector(".artist-name");

//Controls variables
let playpause_btn = document.querySelector(".playpause-track");
let prev_btn = document.querySelector(".prev-track");
let next_btn = document.querySelector(".next-track");

//Sliders variables
let song_slider = document.querySelector(".song-slider");
let volume_slider = document.querySelector(".volume-slider");

//Song time duration variables
let current_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

//Global variables
let track_index = 0;
let song_playing = false;
let update_time;

//Audio variable
let audio_element = document.createElement("audio");

//Track list
let track_list = [
  {
    //Name, artist, image and path of each song
    name: "Track 1",
    artist: "NCS",
    image: "files/thumbnail.png",
    path: "files/track.mp3"
  },

  {
    name: "Track 2",
    artist: "NCS",
    image: "files/thumbnail-2.png",
    path: "files/track-2.mp3"
  },

  {
    name: "Track 3",
    artist: "NCS",
    image: "files/thumbnail-3.png",
    path: "files/track-3.mp3"
  },
];

//Function that loads a track
function loadTrack(track_index) {

  //Clear times
  clearInterval(update_time);
  //Reset song variables
  resetValues();

  //Load current song from path form track list
  current_song.src = track_list[track_index].path;
  current_song.load();

  //Write song and artist information
  current_song.textContent = track_list[track_index].name;
  current_artist.textContent = track_list[track_index].artist;

  //Update time
  update_time = setInterval(song_slider, 1000);

  //Listener for when a song finish
  current_song.addEventListener("ended", nextTrack);
}

//Function that manages the play and pause buttons
function playpauseTrack() {
  if (!song_playing) {
    playTrack();
  } else {
    pauseTrack();
  }
}

//Function that manage the play function
function playTrack() {
    current_song.play();
    song_playing = true;

    playpause_btn.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
}

//Function that manage the pause button
function pauseTrack() {
  current_song.pause();
  song_playing = false;

  playpause_btn.innerHTML = '<i class="fas fa-play fa-2x"></i>';
}

//Function that load the next track when pressing the next button
function nextTrack() {
  if (track_index < track_list.length - 1) {
    track_index += 1;
  } else {
    track_index = 0;
  }

  loadTrack(track_index);
  playTrack();
}

//Function that load the prev track when pressing the prev button
function prevTrack() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = track_list.length;
  }

  loadTrack(track_index);
  playTrack();
}

//Function to manage the song slider
function seekSong() {
  let seeksong = current_song.duration * (song_slider.value / 100);
  current_song.current_time = seeksong;
}

//Function that manage the volume slider
function setVolume() {
  current_song.volume = volume_slider.value / 100;
}

//Function that manage current playing time and total duration
function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(current_song.duration)) {
    seekPosition = current_song.current_time * (100 / current_song.duration);
    song_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }

    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }

    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }

    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    currentTime.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

//Function that resets the song values
function resetValues() {
  current_time.textContent = "00:00";
  total_duration.textContent = "00:00";

  song_slider.value = 0;
}

let current_song = document.querySelector(".song-name");
let current_artist = document.querySelector(".artist-name");

let playpause_btn = document.querySelector(".playpause-track");
let prev_btn = document.querySelector(".prev-track");
let next_btn = document.querySelector(".next-track");

let song_slider = document.querySelector(".song-slider");
let volume_slider = document.querySelector(".volume-slider");

let current_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let song_playing = false;
let update_time;

let audio_element = document.createElement("audio");

let track_list = [
  {
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

function loadTrack(track_index) {

  clearInterval(update_time);
  resetValues();

  current_song.src = track_list[track_index].path;
  current_song.load();

  current_song.textContent = track_list[track_index].name;
  current_artist.textContent = track_list[track_index].artist;

  update_time = setInterval(song_slider, 1000);

  current_song.addEventListener("ended", nextTrack);
}

function playpauseTrack() {
  if (!song_playing) {
    playTrack();
  } else {
    pauseTrack();
  }
}

function playTrack() {
    current_song.play();
    song_playing = true;

    playpause_btn.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
}

function pauseTrack() {
  current_song.pause();
  song_playing = false;

  playpause_btn.innerHTML = '<i class="fas fa-play fa-2x"></i>';
}

function nextTrack() {
  if (track_index < track_list.length - 1) {
    track_index += 1;
  } else {
    track_index = 0;
  }

  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = track_list.length;
  }

  loadTrack(track_index);
  playTrack();
}

function seekSong() {
  let seeksong = current_song.duration * (song_slider.value / 100);
  current_song.current_time = seeksong;
}

function setVolume() {
  current_song.volume = volume_slider.value / 100;
}

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

function resetValues() {
  current_time.textContent = "00:00";
  total_duration.textContent = "00:00";

  song_slider.value = 0;
}

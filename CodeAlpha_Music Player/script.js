const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.getElementById("progress");
const duration = document.getElementById("duration");
const volume = document.getElementById("volume");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playlistEl = document.getElementById("playlist");

// 🎵 Playlist with your 3 BGMs
const songs = [
  { title: "Energetic Action Sport", artist: "AlexGrohl", src: "songs/alexgrohl-energetic-action-sport-500409.mp3" },
  { title: "Motivation Sport Rock Trailer", artist: "AlexGrohl", src: "songs/alexgrohl-motivation-sport-rock-trailer-478796.mp3" }
];

let currentSongIndex = 0;

// Load song
function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  title.textContent = song.title;
  artist.textContent = song.artist;
}

// Play song
function playSong() {
  audio.play();
}

// Pause song
function pauseSong() {
  audio.pause();
}

// Next song
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playSong();
}

// Previous song
function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playSong();
}

// Update progress bar
audio.addEventListener("timeupdate", () => {
  progress.value = audio.currentTime;
  progress.max = audio.duration;
  duration.textContent = formatTime(audio.currentTime) + " / " + formatTime(audio.duration);
});

// Seek
progress.addEventListener("input", () => {
  audio.currentTime = progress.value;
});

// Volume control
volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

// Format time
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

// Playlist rendering
songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = `${song.title} - ${song.artist}`;
  li.addEventListener("click", () => {
    currentSongIndex = index;
    loadSong(index);
    playSong();
  });
  playlistEl.appendChild(li);
});

// Autoplay next song
audio.addEventListener("ended", nextSong);

// Button events
playBtn.addEventListener("click", playSong);
pauseBtn.addEventListener("click", pauseSong);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

// Initialize
loadSong(currentSongIndex);

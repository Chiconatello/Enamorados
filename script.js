// ---- Floating background hearts ----
const bg = document.getElementById('bg');
const heartChars = ['💖', '💕', '💗', '❤️', '💓'];

for (let i = 0; i < 25; i++) {
  const h = document.createElement('div');
  h.className = 'heart';
  h.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
  h.style.left = Math.random() * 100 + 'vw';
  h.style.fontSize = (16 + Math.random() * 24) + 'px';
  h.style.animationDuration = (6 + Math.random() * 8) + 's';
  h.style.animationDelay = (Math.random() * 8) + 's';
  bg.appendChild(h);
}


// ---- Valentine card ----
let cardOpened = false;
let dodgeEnabled = false;
let songPicked = false;
let userName = '';

function goToStep(stepId) {
  document.querySelectorAll('.step').forEach((s) => s.classList.add('hidden'));
  document.getElementById(stepId).classList.remove('hidden');
}

document.getElementById('card').addEventListener('click', () => {
  document.getElementById('cardWrap').classList.add('hidden');
  document.getElementById('mainContent').classList.remove('hidden');

  cardOpened = true;
  dodgeEnabled = false;

  setTimeout(() => {
    dodgeEnabled = true;
  }, 700);
});


// ---- No button ----
document.getElementById('noBtn').addEventListener('pointerenter', () => {
  if (dodgeEnabled) dodge();
});

function sayYes() {
  const result = document.getElementById('result');

  result.textContent = `Yay! I knew you'd say yes, ${userName}! 🎉`;

  goToStep('stepResult');
}

function submitName() {
  const input = document.getElementById('nameInput');
  const val = input.value.trim();

  userName = val || 'you';

  document.getElementById('helloText').textContent = `hello, ${userName}`;

  goToStep('stepQuestion');
}

document.getElementById('nameSubmitBtn').addEventListener('click', submitName);

document.getElementById('nameInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') submitName();
});

document.getElementById('pickSongBtn').addEventListener('click', () => {
  playlistModal.classList.remove('hidden');
});

function dodge() {
  const btn = document.getElementById('noBtn');

  const maxX = Math.max(10, window.innerWidth - 150);
  const maxY = Math.max(10, window.innerHeight - 100);

  btn.style.position = 'fixed';
  btn.style.left = Math.random() * maxX + 'px';
  btn.style.top = Math.random() * maxY + 'px';
}


// ---- Decorative XP window controls ----
['xpMin', 'xpMax', 'xpClose'].forEach((id) => {
  const el = document.getElementById(id);

  if (!el) return;

  el.addEventListener('click', () => {
    const win = document.getElementById('xpWindow');

    win.classList.remove('shake');

    void win.offsetWidth;

    win.classList.add('shake');
  });
});


// ---- Heart burst effect ----
function heartBurst(x, y) {
  const count = 18;

  for (let i = 0; i < count; i++) {
    const h = document.createElement('div');

    h.className = 'burst-heart';
    h.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];

    h.style.left = x + 'px';
    h.style.top = y + 'px';

    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 120;

    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    h.style.setProperty(
      '--burst-transform',
      `translate(${dx}px, ${dy}px) scale(1.2)`
    );

    document.body.appendChild(h);

    setTimeout(() => {
      h.remove();
    }, 950);
  }
}


// =====================================================
// PLAYLIST
// =====================================================

const songs = [
  { title: "A Thousand Miles", file: "A Thousand Miles.mp3" },
  { title: "a thousand years", file: "a thousand years.mp3" },
  { title: "All This Time", file: "All This Time.mp3" },
  { title: "Beauty And A Beat", file: "Beauty And A Beat.mp3" },
  { title: "BIRDS OF A FEATHER", file: "BIRDS OF A FEATHER.mp3" },
  { title: "Bound 2", file: "Bound 2.mp3" },
  { title: "Can't Fight This Feeling", file: "Can't Fight This Feeling.mp3" },
  { title: "Crazy for You", file: "Crazy for You.mp3" },
  { title: "Cupid (Twin Version)", file: "Cupid (Twin Version).mp3" },
  { title: "did i tell u that i miss u", file: "did i tell you that i miss u.mp3" },
  { title: "Die With A Smile", file: "Die With A Smile.mp3" },
  { title: "Don't Matter", file: "Don't Matter.mp3" },
  { title: "Dress", file: "Dress.mp3" },
  { title: "Every Breath You Take", file: "Every Breath You Take.mp3" },
  { title: "Faithfully", file: "Faithfully.mp3" },
  { title: "God Only Knows", file: "God Only Knows.mp3" },
  { title: "Heaven", file: "Heaven.mp3" },
  { title: "Here, There and Everywhere", file: "Here, There and Everywhere.mp3" },
  { title: "I Love You", file: "I Love You.mp3" },
  { title: "I Thought I Saw Your Face Today", file: "I Thought I Saw Your Face Today.mp3" },
  { title: "I Wanna Be Yours", file: "I Wanna Be Yours.mp3" },
  { title: "I Want It That Way", file: "I Want It That Way.mp3" },
  { title: "Iris", file: "Iris.mp3" },
  { title: "Kay Tagal Kitang Hinintay", file: "Kay Tagal Kitang Hinintay.mp3" },
  { title: "Line Without A Hook", file: "Line Without A Hook.mp3" },
  { title: "Love Me Like You Do", file: "Love Me Like You Do.mp3" },
  { title: "Marry You", file: "Marry You.mp3" },
  { title: "My Love Mine All Mine", file: "My Love Mine All Mine.mp3" },
  { title: "My Love", file: "My Love.mp3" },
  { title: "No Tomorrow", file: "No Tomorrow.mp3" },
  { title: "Nothing's Gonna Stop Us Now", file: "Nothing's Gonna Stop Us Now.mp3" },
  { title: "One Less Lonely Girl", file: "One Less Lonely Girl.mp3" },
  { title: "Pasilyo", file: "Pasilyo.mp3" },
  { title: "Perfect", file: "Perfect.mp3" },
  { title: "Say Yes To Heaven", file: "Say Yes To Heaven.mp3" },
  { title: "Together - Ne-Yo", file: "Together - Ne-Yo (Lyrics).mp3" },
  { title: "Until I Found You", file: "Until I Found You.mp3" },
  { title: "You & I", file: "You & I.mp3" }
];


// ---- Music player elements ----
let currentIndex = -1;

const audio = document.getElementById('bgMusic');
const nowPlaying = document.getElementById('nowPlaying');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const playerVolume = document.getElementById('playerVolume');
const songListEl = document.getElementById('songList');
const playlistModal = document.getElementById('playlistModal');


// Default volume
audio.volume = 0.3;

// CREATE SPOTIFY-STYLE PROGRESS BAR

const playerBody = document.querySelector('.player-body');


// Create progress container
const progressContainer = document.createElement('div');
progressContainer.className = 'player-progress-container';


// Create current time
const currentTimeEl = document.createElement('span');
currentTimeEl.className = 'player-time';
currentTimeEl.textContent = '0:00';


// Create progress bar
const progressBar = document.createElement('input');
progressBar.type = 'range';
progressBar.className = 'player-progress';
progressBar.min = '0';
progressBar.max = '100';
progressBar.value = '0';
progressBar.step = '0.1';


// Create duration
const durationEl = document.createElement('span');
durationEl.className = 'player-time';
durationEl.textContent = '0:00';


// Add everything
progressContainer.appendChild(currentTimeEl);
progressContainer.appendChild(progressBar);
progressContainer.appendChild(durationEl);


// Put progress bar below the track and above the controls
const playerControls = document.querySelector('.player-controls');

if (playerControls) {
  playerBody.insertBefore(progressContainer, playerControls);
}

// TIME FORMAT

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return '0:00';
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// BUILD SONG LIST

songs.forEach((song, index) => {
  const btn = document.createElement('button');

  btn.className = 'song-item';
  btn.textContent = song.title;

  btn.addEventListener('click', (e) => {
    heartBurst(e.clientX, e.clientY);

    playSong(index);

    closePlaylist();

    if (!songPicked) {
      songPicked = true;
      goToStep('stepName');
      document.getElementById('nameInput').focus();
    }
  });

  songListEl.appendChild(btn);
});

// PLAY SONG

function playSong(index) {
  currentIndex = (index + songs.length) % songs.length;

  const song = songs[currentIndex];

  // Set audio source
  audio.src = encodeURI(song.file);

  // Update Now Playing immediately
  nowPlaying.textContent = song.title;

  // Reset progress
  progressBar.value = 0;
  currentTimeEl.textContent = '0:00';
  durationEl.textContent = '0:00';

  // Highlight selected song
  highlightActiveSong();

  // Play
  audio.play()
    .then(() => {
      playPauseBtn.textContent = '⏸';
    })
    .catch(() => {
      // Browser may block playback until user interacts.
      playPauseBtn.textContent = '▶';
    });
}

// HIGHLIGHT CURRENT SONG

function highlightActiveSong() {
  const items = songListEl.querySelectorAll('.song-item');

  items.forEach((item, i) => {
    item.classList.toggle('active', i === currentIndex);
  });
}

// PREVIOUS SONG

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIndex === -1) return;

  playSong(currentIndex - 1);
});

// NEXT SONG

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentIndex === -1) return;

  playSong(currentIndex + 1);
});

// PLAY / PAUSE

playPauseBtn.addEventListener('click', () => {
  if (currentIndex === -1) return;

  if (audio.paused) {
    audio.play()
      .then(() => {
        playPauseBtn.textContent = '⏸';
      })
      .catch(() => {
        playPauseBtn.textContent = '▶';
      });
  } else {
    audio.pause();

    playPauseBtn.textContent = '▶';
  }
});

// MUTE

muteBtn.addEventListener('click', () => {
  audio.muted = !audio.muted;

  muteBtn.textContent = audio.muted ? '🔈' : '🔊';
});

// VOLUME

playerVolume.addEventListener('input', () => {
  audio.volume = playerVolume.value / 100;

  // If volume is raised, automatically unmute
  if (audio.volume > 0 && audio.muted) {
    audio.muted = false;
    muteBtn.textContent = '🔊';
  }
});

// AUDIO LOADED

audio.addEventListener('loadedmetadata', () => {
  if (Number.isFinite(audio.duration)) {
    progressBar.max = audio.duration;

    durationEl.textContent = formatTime(audio.duration);
  }
});

// UPDATE CURRENT TIME

audio.addEventListener('timeupdate', () => {
  if (!progressBar.matches(':active')) {
    progressBar.value = audio.currentTime;
  }

  currentTimeEl.textContent = formatTime(audio.currentTime);

  if (Number.isFinite(audio.duration)) {
    durationEl.textContent = formatTime(audio.duration);
  }
});


// SEEK / ADJUST SONG POSITION

progressBar.addEventListener('input', () => {
  const newTime = Number(progressBar.value);

  audio.currentTime = newTime;

  currentTimeEl.textContent = formatTime(newTime);
});


// SONG ENDED

audio.addEventListener('ended', () => {
  if (currentIndex !== -1) {
    playSong(currentIndex + 1);
  }
});

// PLAYBACK STATE

audio.addEventListener('play', () => {
  playPauseBtn.textContent = '⏸';
});

audio.addEventListener('pause', () => {
  playPauseBtn.textContent = '▶';
});

// PLAYLIST POPUP

document.getElementById('playlistToggle').addEventListener('click', () => {
  playlistModal.classList.remove('hidden');
});

document.getElementById('closePlaylist').addEventListener(
  'click',
  closePlaylist
);


function closePlaylist() {
  playlistModal.classList.add('hidden');

  if (!cardOpened) {
    document.getElementById('cardWrap').classList.remove('hidden');
  }
}

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound.charAt(0).toUpperCase() + sound.slice(1);

  btn.addEventListener('click', () => {
    /* Stop all the song*/
    stopSongs();

    /* Play the song */
    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}

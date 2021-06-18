const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

let flag = false;

speed.addEventListener('mousedown', (e) => {
  flag = true;
});

speed.addEventListener('mouseup', (e) => {
  flag = false;
});

speed.addEventListener('mousemove', function(e) {
  if(!flag) return;
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.floor(percent * 100) + '%';
  const playback = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playback.toFixed(2) + 'x';
  video.playbackRate = playback;
});

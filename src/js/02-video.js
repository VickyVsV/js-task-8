import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
let currentTime = 0;

player.getVideoTitle().then(function(title) {
  console.log('title:', title);
});

player.on('timeupdate', throttle(myCurretTime, 1000));

function myCurretTime (time){
  currentTime = time.seconds; //get currenTime
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTime));
  console.log('currentTime: ' + currentTime);
}

localTime = localStorage.getItem(LOCALSTORAGE_KEY);
console.log('localTime: ' + localTime);

if (localTime === null){
  return;
}
else {
  player.setCurrentTime(localTime);
}


// layer.getCurrentTime().then(function(seconds) {
//   // Сохранение текущего времени в локальное хранилище
//   localStorage.setItem("videoplayer-current-time", seconds.toString());
//   console.log(currentTime);
// });

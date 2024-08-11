"use strict"

import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

const player = new Vimeo('vimeo-player');

const throttleSavePlaybackTime = throttle(function(time) {
  localStorage.setItem('videoplayer-current-time', time);
}, 1000);

player.on('timeupdate', function(data) {
  throttleSavePlaybackTime(data.seconds);
});

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime).then(function()   
 {
    player.play();
  }).catch(function(error) {
    console.error('Error:', error);
  });
}
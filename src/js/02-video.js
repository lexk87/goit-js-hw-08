import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);
const CURRENT_PLAYBACK_TIME = "videoplayer-current-time";
const currentTimeGetter = localStorage.getItem(CURRENT_PLAYBACK_TIME);

function localStorageCheck() {
    if (currentTimeGetter) {
        player.setCurrentTime(currentTimeGetter);
    };
};

function onTimeUpdate(e) {
    if (e.percent === 1) {
        return localStorage.removeItem(CURRENT_PLAYBACK_TIME);
    };
    localStorage.setItem(CURRENT_PLAYBACK_TIME, e.seconds);
}

localStorageCheck();

player.on("timeupdate", throttle(onTimeUpdate, 1000));
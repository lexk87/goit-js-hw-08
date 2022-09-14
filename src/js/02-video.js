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
    localStorage.setItem(CURRENT_PLAYBACK_TIME, e.seconds);
}

function onPlaybackEnd() {
    localStorage.removeItem(CURRENT_PLAYBACK_TIME);
}

localStorageCheck();

player.on("timeupdate", throttle(onTimeUpdate, 1000));
player.on("ended", onPlaybackEnd);
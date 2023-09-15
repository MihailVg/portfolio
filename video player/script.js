const videoEl = document.querySelector(`.video`);
const controlEls = document.querySelector(`.controls-cover`);
const playPauseEl = document.querySelector(`.play-pause-btn`);
const volumeEl = document.querySelector(`.volume`);
const timingTextEl = document.querySelector(`.time-text`);
const timingRangeEl = document.querySelector(`.timing`);
const videoDurationEl = document.querySelector(`.video-duration`);

videoEl.addEventListener(`mouseover`, () => {
    controlEls.classList.add(`make-visible`)
});

videoEl.addEventListener(`mouseout`, () => {
    controlEls.classList.remove(`make-visible`)
});

controlEls.addEventListener(`mouseover`, () => {
    controlEls.classList.add(`make-visible`)
});

controlEls.addEventListener(`mouseout`, () => {
    controlEls.classList.remove(`make-visible`)
});

videoEl.addEventListener("click", () => {
    if (videoEl.paused){
        playPauseEl.src = `img/pause-img.png`;
        videoEl.play();
    } else {
        playPauseEl.src = `img/play-img.png`;
        videoEl.pause();
    } 
});

playPauseEl.addEventListener("click", () => {
    if (videoEl.paused){
        playPauseEl.src = `img/pause-img.png`;
        videoEl.play();
    } else {
        playPauseEl.src = `img/play-img.png`;
        videoEl.pause();
    } 
});

videoEl.addEventListener(`timeupdate`, () => {
    timingTextEl.innerText = videoEl.currentTime;
    timingRangeEl.value = videoEl.currentTime / videoEl.duration * 100;
    timingTextEl.innerText = currentTimeFunction(videoEl.currentTime)
});

volumeEl.addEventListener(`input`, () => {
    videoEl.volume = volumeEl.value;
});

timingRangeEl.addEventListener(`input`, () => {
    videoEl.currentTime = timingRangeEl.value / 100 * videoEl.duration;
});

function currentTimeFunction (time) { 
    let seconds = Math.trunc(time % 60);
    let minutes = Math.trunc(time / 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
} 
var audio = document.querySelector('#audio');
var isDrag = false;
var play_btn = document.querySelector('.play');
var pause_btn = document.querySelector('.pause');
var currentTime = document.querySelector('.currentTime');
var duration = document.querySelector('.duration-bar');
var slider_bar = document.querySelector('.slider-bar');
var slider_handle = document.querySelector('.slider-handle');


play_btn.addEventListener('click', function (e) {
    audio.play();
    play_btn.style.display = 'none';
    pause_btn.style.display = 'block';
})

pause_btn.addEventListener('click', function (e) {
    audio.pause();
    play_btn.style.display = 'block';
    pause_btn.style.display = 'none';
})

duration.addEventListener('click', function (e) {
    var percent = e.offsetX / this.offsetWidth;
    update_slider_bar_handle(percent);
    audio.currentTime = percent * audio.duration;
})

audio.ontimeupdate = function () {
    // console.log("duration", formatTime(audio.duration));
    // console.log("currentTime", formatTime(audio.currentTime));
    var currentTime = document.querySelector('.currentTime');
    var duration = document.querySelector('.duration');
    currentTime.innerHTML = formatTime(audio.currentTime);
    duration.innerHTML = formatTime(audio.duration);
    var percent = audio.currentTime / audio.duration;
    update_slider_bar_handle(percent);
}

audio.onplay = function () {
    play_btn.style.display = 'none';
    pause_btn.style.display = 'block';
}

audio.onpause = function () {
    play_btn.style.display = 'block';
    pause_btn.style.display = 'none';
}

duration.addEventListener("mousedown", function (e) {
    isDrag = true;
})
window.addEventListener("mouseup", function (e) {
    isDrag = false;
})
window.addEventListener("mousemove", function (e) {
    if (isDrag) {
        //e.clientX : from left page to mouse point
        //getOffset(duration): from left page to left duration-bar
        var width = e.clientX - getOffset(duration).left;
        if (width <= 0) width = 0;
        if (width >= duration.offsetWidth) width = duration.offsetWidth;
        percent = width / duration.offsetWidth;
        update_slider_bar_handle(percent);
        audio.currentTime = percent * audio.duration;
    }
})


function formatTime(time) {
    var min = Math.floor(time / 60);
    var sec = Math.floor(time) - min * 60;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    return min + ":" + sec;
}

function update_slider_bar_handle(percent) {
    slider_bar.style.width = percent * 100 + "%";
    slider_handle.style.left = percent * 100 + "%";
}

function getOffset(elem) {
    if (!elem) return; //ko ton tai return

    if (!elem.getClientRects().length) {// if not return
        return { top: 0, left: 0 };
    }

    var rect = elem.getBoundingClientRect();
    var win = elem.ownerDocument.defaultView;
    return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
    };
}
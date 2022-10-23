var maiarjtum = new Audio("maiarjtum.wav");
var maiarjpen = new Audio("maiarjpen.wav");
var haihategarn = new Audio("haihategarn.wav");
let songs_arr = [maiarjtum, maiarjpen, haihategarn];

function stop_playing() {
    songs_arr.forEach((song) => { song.pause(); } );
}

$("#maiarjtum").click( () => {
    stop_playing();
    maiarjtum.play();
});

$("#maiarjpen").click( () => {
    stop_playing();
    maiarjpen.play();
});

$("#haihategarn").click( () => {
    stop_playing();
    haihategarn.play();
});

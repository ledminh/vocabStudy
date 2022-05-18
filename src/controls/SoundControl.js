import { Howl } from "howler";

export {
    createSound
}


function createSound(soundFile, autoplay, loop, volume) {
    const sound = new Howl({
        src: [soundFile],
        autoplay: autoplay,
        loop: loop,
        volume: volume
    });

    let playID = null;

    const play = () => playID = sound.play();
    const stop = () => sound.stop(playID);
    const pause = () => sound.pause(playID);
    const fade = (from, to) => sound.fade(from, to, playID);

    return {
        play,
        pause,
        stop,
        fade
    }
}



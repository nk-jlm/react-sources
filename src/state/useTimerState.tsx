import {useState} from "react";
let isStop = false;
let interval = 0;

const copyDom = () => {
    const timer = document.getElementsByClassName('real-timer')[0].getElementsByClassName('timer-data')[0];
    const wrapperToCopy = document.getElementsByClassName('previous-results')[0];
    const copyOfTimer = timer.cloneNode(true);
    wrapperToCopy.appendChild(copyOfTimer);
}

export const useTimerState = () => {
    const [time, setTime] = useState(0);
    const start = () => {
        interval = window.setInterval(() => {
            if(!isStop) {
                setTime((time) => time + 10);
            }
        }, 1000);
    }
    const stop = () => {
        isStop = true;
        clearInterval(interval);
        copyDom();
        setTime(0);
        isStop = false;
    }
    return {time, isStop, start, stop};
}

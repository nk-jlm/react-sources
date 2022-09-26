import './App.css';
import {useTimerState} from "./state/useTimerState";

type TimerProps = {
    time: number,
    isStop: boolean,
    onStart: ()=> void,
    onStop: ()=> void
}

const Timer = ({time, onStart, onStop}: TimerProps) => {

    return (
        <div className="timer">
            <div className="previous-results"></div>
            <div className="real-timer">
                <div className="timer-data">
                    <p className="hours">{("0" + Math.floor((time / 6000) % 60)).slice(-2)}</p>
                    <p className="separator">:</p>
                    <p className="mins">{("0" + Math.floor((time / 600) % 60)).slice(-2)}</p>
                    <p className="separator">:</p>
                    <p className="seconds">{("0" + ((time / 10) % 60)).slice(-2)}</p>
                </div>
            </div>
            <button className="start" onClick={() => {onStart()}}>Start</button>
            <button className="stop" onClick={() => {onStop()}}>Stop</button>
        </div>
    )
}
const App = () =>{
    const {time, isStop, start, stop} = useTimerState();
    return (
        <div className="App">
            <h1>Timer</h1>
            <Timer time={time} isStop={isStop} onStart={start} onStop={stop}/>
        </div>
    )
}


export default App;

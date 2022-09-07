import React from 'react';
import './App.css';
import {HeaderWithCounter} from "./HeaderWithCounter";
import {ResetButton} from "./ResetButton";
import {BattleField} from "./BattleField";
import {useGameState} from "./state/useGameState";


const App = () => {
    const {turn, reset, matrix, fire, won } = useGameState();
    return (
        <div className="App">
            <HeaderWithCounter turn={turn} won={won}/>
            <BattleField matrix={matrix} onFire={fire}/>
            <ResetButton reset={reset}/>
        </div>
    )
}


export default App;

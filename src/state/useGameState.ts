import {createArray} from "../utils/array";
import {createWarShip} from "../utils/battleFIeld";
import {useState} from "react";
import {CHECKED_SHIP, CHECKED_WATER, SHIP, WATER} from "./cellState";

const MAX_MATRIX_LENGTH = 10;


const createEmptyBattleField = () =>
    createArray(MAX_MATRIX_LENGTH, () => createArray(MAX_MATRIX_LENGTH, () => 0));
const createBattleField = () => {
    const emptyBattleField = createEmptyBattleField();
    const newWarShip = createWarShip(4, MAX_MATRIX_LENGTH);
    newWarShip.forEach(({x, y})=> {
       emptyBattleField[y][x] = SHIP;
    });
    return emptyBattleField;
}
export const useGameState = () => {
    const [state, setState] = useState({
        matrix: createBattleField(),
        turn: 0,
        won: false
    });
    const reset = () => {
        setState({
            matrix: createBattleField(),
            turn: 0, won: false
        })
    };
    const fire = (y: number, x:number) => {
        const cell = state.matrix[y][x];
        if (cell === CHECKED_WATER || cell === CHECKED_SHIP ) {
            return;
        }
        const newState = (cell === WATER) ? CHECKED_WATER : CHECKED_SHIP;
        state.matrix[y][x] = newState;
        const won = state.matrix.every(line=> line.every((x)=> x !== SHIP ));
        setState({...state, turn: state.turn + 1, won})
    }
    const {turn, matrix, won} = state;

    return {turn, reset, matrix, fire, won};
}

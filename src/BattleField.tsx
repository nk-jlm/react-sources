import React from "react";
import {CHECKED_SHIP, CHECKED_WATER, SHIP, WATER} from "./state/cellState";

type CellProps = {
    value: number
    handleClick: (y: number, x: number) => void;
    x: number;
    y: number;
}
const cellStateMap = {
    [WATER]: '',
    [SHIP]: '',
    [CHECKED_WATER]: '🌊',
    [CHECKED_SHIP]: '🚢'
};
const Cell = ({value, handleClick, x, y}: CellProps) => {
    return (<button className={'cell'} onClick={() => {
        handleClick(y, x)
    }}>{cellStateMap[value as keyof typeof cellStateMap]}
    </button>);
}
type BattleFieldProps = {
    matrix: number[][];
    onFire: (y: number, x: number) => void;
}
export const BattleField = ({matrix, onFire}: BattleFieldProps) => {
    return <div>
        {
            matrix.map(
                (line, lineNumber) => (
                    <div className={'line'} key={lineNumber}>{line.map((v, i) =>
                        <Cell key={`${lineNumber}${i}`} value={v} x={i} y={lineNumber} handleClick={onFire}/>)}
                    </div>
                )
            )
        }
    </div>;
}


type HeaderWithCounterProps = {
    turn: number;
    won: boolean;
}
export const HeaderWithCounter = ({turn, won}: HeaderWithCounterProps) => {
    return (
        <div>
            <h2>{turn}</h2>
            <p>{won && 'You are winner!'}</p>
        </div>
    );
}

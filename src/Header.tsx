import {FC} from "react";

type HeaderProps = {
    label: string;
    header: string;
}
export const Header: FC<HeaderProps> = (props) => (
    <header>
        <p className='label'>{props.label}</p>
        <h2>{props.header}</h2>
    </header>
)

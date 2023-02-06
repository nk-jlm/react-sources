import React from "react";

type AboutProps = {
    title: string | null;
    name: string | null;
}

export const About: React.FC<AboutProps> = (props) => {
    return (
    <div>
        <div>
            <h2>{props.title}</h2>
            <p className='name'>{props.name}</p>
        </div>
    </div>
)}

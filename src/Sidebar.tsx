import React from "react";

type SidebarProps = {
    header: string;
}
export const Sidebar: React.FC<SidebarProps> = (props) => (
    <aside>
        <h3>{props.header}</h3>
        <nav>
            <a href="#">Link1</a>
            <a href="#">Link2</a>
            <a href="#">Link3</a>
        </nav>
    </aside>
)

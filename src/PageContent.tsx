import { PureComponent } from "react";

type ContentProps = {
    header: string;
}
export class PageContent extends PureComponent<ContentProps> {
    render() {
        return <div><h1>{this.props.header}</h1></div>
    }
}

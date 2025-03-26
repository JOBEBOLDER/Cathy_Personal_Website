import React from  "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

class ExternalLinks extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded:true,
            activeKey :"1"
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey:eventKey
        })
    }
    render() {
        return (
            <span className="external-links">













                
            </span>
        )
    }
}
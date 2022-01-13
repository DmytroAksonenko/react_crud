import React, { Component } from "react";

import {
    BrowserRouter,
    Switch,
    Redirect,
    Route,
    withRouter,
} from 'react-router-dom';

const testFunc = () => {
    console.log("test editor");
};

class Editor extends Component {
    constructor(props){
        super(props);
        testFunc();
    }

    render() {
        return (
            <div>
                test Editor
            </div>
        );
    }
}

export default Editor;
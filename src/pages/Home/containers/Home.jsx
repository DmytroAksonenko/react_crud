import React, { Component } from "react";

import {
    BrowserRouter,
    Switch,
    Redirect,
    Route,
    withRouter,
} from 'react-router-dom';

const testFunc = () => {
    console.log("test home");
};

class Home extends Component {
    constructor(props){
        super(props);
        testFunc();
    }

    render() {
        return (
            <div>
                test Home
                <div className="dropdown">
                    <button className="dropbtn">Dropdown</button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
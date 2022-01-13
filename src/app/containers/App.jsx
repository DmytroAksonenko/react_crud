import React, { Component } from "react";
//import { useEffect, useState } from 'react';
//import { useDispatch } from 'react-redux';
import {
    BrowserRouter,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom';
//import {
//    fetchBook,
//} from '../actions/book';

const testFunc = () => {
    console.log("test msg");
};

class App extends Component {
    constructor(props){
        super(props);
        testFunc();
    }

    render() {
        return (
            <div>
                IntelliJ IDEA test
            </div>
        );
    }
}

export default App;
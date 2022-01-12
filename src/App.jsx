import React, { Component } from "react";

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
// import React from "react";
// import {render} from "react-dom";

// import { User } from './components/User';
// import { Main } from './components/Main';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Max"
//         };
//     }

//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)}/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }

// render(<App />, window.document.getElementById('app'));

import { createStore } from 'redux';

const initialState = {
    result:1,
    lastValues: [],
    userName : 'Max'
}

//this is mutable approach
/*
const reducer = (state = initialState,action) => {
    switch (action.type){
        case 'ADD':
            state.result += action.payload;
            break;
        case 'SUBTRACT':
            state.result -= action.payload;
            break;
    };
    return state;
};
*/
//this is immutable approach
const reducer = (state = initialState,action) => {
    switch (action.type){
        case 'ADD':
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues,action.payload]
            };
            break;
        case 'SUBTRACT':
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues,action.payload]
            };
            break;
    };
    return state;
};

const store = createStore(reducer);

store.subscribe(()=>{
    console.log("Store updated! ", store.getState());
});

store.dispatch({
    type:"ADD",
    payload : 100
});

store.dispatch({
    type:"ADD",
    payload : 42
});

store.dispatch({
    type:"SUBTRACT",
    payload : 80
});

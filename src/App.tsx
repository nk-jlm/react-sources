import React from 'react';
import './App.css';
import {Footer} from './Footer';
import {Header} from './Header';


const App = () => (
    <div className="App">
        <Header label="React App" header="This is App for learning features"/>
        <h1>Hello world</h1>
        <Footer copyright='C'/>
    </div>
)


export default App;

import React from 'react';
import './App.css';
import {Footer} from './Footer';
import {Header} from './Header';
import {Sidebar} from './Sidebar';
import {PageContent} from './PageContent';

const App = () => (
    <div className="App">
        <Header label="React App" header="This is App for learning features"/>
        <article>
            <Sidebar header="Sidebar menu"></Sidebar>
            <PageContent header="Hello world"></PageContent>
        </article>
        <Footer copyright='C'/>
    </div>
)


export default App;

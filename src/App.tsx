import React from 'react';
import './App.css';
import {Footer} from './Footer';
import {Header} from './Header';
import {Sidebar} from './Sidebar';
import {PageContent} from './PageContent';
import {About} from "./About";
import {Route, Routes, useSearchParams} from "react-router-dom";

const translations : object = {
    'ua': {
        name: "тест",
        title: "Інформація про користувача"
    },
    'en': {
        name: "test",
        title: "Information about user"
    }
}


const App = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchValue = searchParams.get("ln");
    const languageCode: string | null = searchValue ? searchValue : "ua";
    const languageObj = translations[languageCode as keyof typeof translations];
    return(
        <div className="App">
            <Routes>
                <Route path="/" element={<About name={languageObj["name"]} title={languageObj["title"]}></About>} />
            </Routes>
            <Header label="React App" header="This is App for learning features"/>
            <div>
                <button onClick={()=> setSearchParams({ln: 'ua'})}>UA</button>
                <button onClick={()=> setSearchParams({ln: 'en'})}>EN</button>
            </div>
            <article>
                <Sidebar header="Sidebar menu"></Sidebar>
                <PageContent header="Hello world"></PageContent>
            </article>
            <Footer copyright='C'/>
        </div>
    )
}

export default App;

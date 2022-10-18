import React from 'react';
import News from "./containers/news";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ViewNews from "./components/ViewNews";

function App() {
    return (
        <>
                <Routes>
                    <Route path="/" element={<News/>}/>
                    <Route path={"/news/:id"} element={<ViewNews/>}/>
                </Routes>
        </>
    );
}

export default App;

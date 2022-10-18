import React from 'react';
import News from "./containers/news";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ViewNews from "./components/ViewNews";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<News/>}/>
                    <Route path={"/news/:id"} element={<ViewNews/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

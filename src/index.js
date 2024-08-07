import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from "./App";
import { Woke } from "./pages/WokePfp/Woke";
import { Home } from "./pages/Homepage/home";

//just memes, i will probably use this at some point
const subRoutes = {
    "rupert": () => <img src={"https://samwich.dev/assets/rupert.jpg"}/>,
    "appl": () => <img src={"https://samwich.dev/assets/appl.png"}/>,
    "cat": () => <img src={"https://cataas.com/cat"} style={{width: "50vh", height: "50vh", objectFit: "cover"}}/>,
    "woke": () => <Woke/>,
    "home": () => <Home/>
};

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        {Object.entries(subRoutes).map(([key]) => (
          <Route key={key} path={`/${key}`} element={subRoutes[key]()} />
        ))}
        <Route path="/" element={<App />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from "./App";

const subRoutes = {
    "rupert": () => <img src={"https://samwich.dev/assets/rupert.jpg"}/>,
    "appl": () => <img src={"https://samwich.dev/assets/appl.png"}/>
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

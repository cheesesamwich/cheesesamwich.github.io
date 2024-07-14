import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersonalSite } from "./pages/PersonalSite/PersonalSite";
import { Tobleronecord } from "./pages/Tobleronecord/Tobleronecord"
const subRoutes = {
    "rupert": () => <img src={"https://samwich.dev/assets/rupert.jpg"} alt="rupert" />,
    "toblerone": () => <Tobleronecord/>
};

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        {Object.entries(subRoutes).map(([key]) => (
          <Route key={key} path={`/${key}`} element={subRoutes[key]()} />
        ))}
        <Route path="/" element={<PersonalSite/>} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

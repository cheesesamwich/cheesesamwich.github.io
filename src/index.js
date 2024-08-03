import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from "./App";
import { Helmet } from 'react-helmet';

function CatImage()
{
  return (
    <>
      <Helmet>
        <title>Cat</title>
        <meta property="og:title" content={"Look at that cat"} />
        <meta property="og:description" content={"What a nice cat"} />
        <meta property="og:image" content={"https://cataas.com/cat"} />
      </Helmet>
      <img src={"https://cataas.com/cat"} style={{width: "50vh", height: "50vh", objectFit: "cover"}}/>
    </>
  )
}
//just memes, i will probably use this at some point
const subRoutes = {
    "rupert": () => <img src={"https://samwich.dev/assets/rupert.jpg"}/>,
    "appl": () => <img src={"https://samwich.dev/assets/appl.png"}/>,
    "cat": () => <CatImage/>
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

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App, CatSection } from "./App";
import { useAwaiter } from './utils/useAwaiter';
import { Helmet } from 'react-helmet';

function CatImage()
{
  const [cat, setCat] = useState("");
  useAwaiter(async () => 
  {
    const response = await fetch("https://api.thecatapi.com/v1/images/search").then(e => e.json());

    setCat(response[0].url);
  });
  return (
    <img src={cat ?? ""} style={{width: "50vh", height: "50vh", objectFit: "cover"}}/>

  )
}
//just memes, i will probably use this at some point
const subRoutes = {
    "rupert": () => <img src={"https://samwich.dev/assets/rupert.jpg"}/>,
    "appl": () => <img src={"https://samwich.dev/assets/appl.png"}/>,
    "cat": () => 
    <>
      <Helmet>
        <title>Cat</title>
        <meta property="og:title" content={"Look at that cat"} />
        <meta property="og:description" content={"What a nice cat"} />
        <meta property="og:url" content={cat} />
        <meta property="og:image" content={cat} />
      </Helmet>
      <CatImage/>
    </>
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

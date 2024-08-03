import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App, CatSection } from "./App";
import { useAwaiter } from './utils/useAwaiter';

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

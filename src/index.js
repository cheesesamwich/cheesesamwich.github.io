import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./App.tsx";

function Route()
{
  const currentLocation = new URL(window.location.href).pathname.substring(1);
  if(subRoutes[currentLocation])
  {
    return subRoutes[currentLocation]();
  }
  return <App/>;
}

const subRoutes = {
    "rupert": () => <img src={"https://samwich.dev/assets/rupert.jpg"}/>,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <React.StrictMode>
    <Route/>
  </React.StrictMode>
);

import { useState } from 'react';
import './Tobleronecord.css';
import { ScrollBar } from '../../components/ScrollBar';

export function Tobleronecord() {
  const sections = 
  [
    <>
      <img src='https://samwich.dev/assets/toblerone.png'/>
      <h1>The sigmaest client mod...</h1>
    </>,
    <>
      <img src='https://samwich.dev/assets/favourites.png'/>
      <h1>Super sigma favourites...</h1>
    </>,
    <>
      <img src='https://samwich.dev/assets/dataexport.png'/>
      <h1>Datastore values in settings exports...</h1>
    </>,
    <>
      <img src='https://samwich.dev/assets/nodeletesafety.png'/>
      <h1>Very sigma plugins.... (made by me)</h1>
    </>,
    <>
      <h1>That's all thanks, use it if you want</h1>
      <h2><a href='https://github.com/cheesesamwich/tobleronecord'>Github</a></h2>
    </>
  ]
  return (
    <div className="Tobleronecord" style={{ userSelect: "none" }}>
      {sections.map(e => 
        <div className='InfoModal'>
          {e}
        </div>
      )}
    </div>
  );
}
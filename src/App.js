import React, { useState } from 'react';
import { getScripts, getTuts } from './ContentData';
import { Helmet } from 'react-helmet';
import './style.css';

const scripts = getScripts();
const tuts = getTuts();

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const urlParams = new URLSearchParams(window.location.search);
  const infoPage = urlParams.get('info');
  
  const [isScriptSearch, setIsScriptSearch] = useState(true); // Initialize with 'true' for default script search

  const handleSwitch = (btnId) => {
    const btn1 = document.getElementById("scriptButton");
    const btn2 = document.getElementById("tutButton");
  
    if (btnId === "scriptButton") {
      btn1.checked = true;
      btn2.checked = false;
      setIsScriptSearch(true); // Update the state variable
    } else {
      btn1.checked = false;
      btn2.checked = true;
      setIsScriptSearch(false); // Update the state variable
    }
  };

  return (
    <div className="container">
      <header className="header">
        {infoPage &&
          <>
            <a className='rounded-link backButton buttonAnim' href={window.location.toString().split("?")[0]}>
              <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{scale: "0.7"}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
              </svg>
            </a>  
          </>
        }
        {!infoPage && <><h1>SamSam</h1> <h3 id='subHeader'>The best place for all of your fan game needs</h3></>} 
        {infoPage &&  <h1 id='infoHeader'>{infoPage} instructions</h1>}
      </header>
      {!infoPage && 
        <>
            <div id='tutSwitch'>
              <input type="radio" id="scriptButton" name="switch" defaultChecked={true}/>
              <label className="btn" htmlFor="scriptButton" onClick={() => handleSwitch("scriptButton")}>Scripts</label>
              <input type="radio" id="tutButton" name="switch"/>
              <label className="btn" htmlFor="tutButton" onClick={() => handleSwitch("tutButton")}>Tutorials</label>
            </div>
            <div id='inputWrapper'>
              <input id='searchBar' placeholder='Search for something!' onChange={(e) => setSearchTerm(e.target.value)}></input>
            </div>
            <div className="script-tiles">
                <ScriptTiles searchTerm={searchTerm} videos={isScriptSearch ? scripts : tuts} download={isScriptSearch}/>
            </div>
        </>
      }
      {infoPage && <div id='scriptInfo'><ScriptInfo scriptName={infoPage}></ScriptInfo></div>}  
      <a className='rounded-link discordButton buttonAnim' href="https://discord.gg/SvJMAnUgM3">
        <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" style={{scale:"1.3"}}>
          <path fill="currentColor" d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z" className=""></path>
        </svg>
      </a>  
    </div>
  );
}

function ScriptInfo(props) {
  let infoElement;
  infoElement = scripts.concat(tuts).find(video => video.name === props.scriptName);
  
  if (infoElement) {
    return (
      <div>
        <Helmet>
          <meta
            name="description"
            content={infoElement.description}
          />
          <title>SamSam | {infoElement.name}</title>
        </Helmet>
        <div>
          {infoElement.tutorial}
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h1>404</h1>
        <br/>
        <p>Are you lost?</p>
      </>
    );
  }
}

function ScriptTiles({ searchTerm, videos, download }) {
  let tiles = [];
  videos.filter(video => video.name.toLowerCase().replace(/ /g, "").includes(searchTerm.toLowerCase().replace(/ /g, "")) || video.description.replace(/ /g, "").toLowerCase().includes(searchTerm.toLowerCase().replace(/ /g, "")) || searchTerm.length === 0).forEach((element, index) => {
    tiles.push(
      <ScriptTile
        key={index}
        scriptName={element.name}
        scriptDescription={element.description}
        scriptUrl={element.url}
        tutorial={element.tutorial}
        videos={videos}
        download={download}
      />
    );
  });
  return tiles;
}

async function DownloadScript(url) {
    const response = await fetch(url);
    const data = await response.blob();

    const blob = new Blob([data], { type: 'text/plain' });

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);

    link.download = url.split('/').pop();

    link.style.display = 'none';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}

function ScriptTile(props) {
  return (
    <div className="script-tile">
      <h2 id='script-tile-header'>{props.scriptName}</h2>
      <p>{props.scriptDescription}</p>
      <div className="button-container">
        {props.download && 
          <button className="rounded-button buttonAnim" onClick={() => 
            {
              if(typeof props.scriptUrl === "string") 
              { 
                DownloadScript(props.scriptUrl) 
              } 
              else
              { 
                props.scriptUrl.forEach((url) => DownloadScript(url)); 
              }
            }}>
            <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" id='buttonIcon'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"></path>
            </svg>
          </button>
        }
        <a className='rounded-link buttonAnim' href={`?info=${props.scriptName}`}>
          <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" id='linkIcon'>
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
          </svg>  
        </a>  
      </div>
    </div>
  );
}

export default App;

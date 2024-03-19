import React, { useState } from 'react';

import './style.css';

let scripts = [
  { url: ["https://raw.githubusercontent.com/cheesesamwich/cheesesamwich.github.io/main/scripts/HitSounds.cs", "https://raw.githubusercontent.com/cheesesamwich/cheesesamwich.github.io/main/scripts/HitSoundTrigger.cs"], 
    name: "HitSounds", 
    description: "Allows you to group materials and audio clips to create hit sounds",
    tutorial: 
    <>
      <p>- Import both downloaded scripts into your unity project.</p>
      <p>- Add the HitSoundTrigger script to your hand collider.</p>
      <p>- Add an audio source to your hands</p>
      <p><i>You can increase the "Spatial Blend" property for higher realism.</i></p>
      <p>- Add the HitSounds script to your gorilla rig. Here is where you can associate materials with the sound they should make when hit.</p>
      <p>- Press the plus in the "Sound Groups" list to create a new sound group.</p>
      <p>- Drag in the materials you want to associate into the "Materials" List</p>
      <p>- Drag all audio clips into the "Sounds" list.</p>
      <p><i>The script supports random audio, so you can upload as many audio clips as you want for variation.</i></p>
      <p>You're good to go!</p>
      <h3>Example</h3>
      <img src='https://files.catbox.moe/at5wds.webp'></img>
    </>
  },
  { url: "https://raw.githubusercontent.com/cheesesamwich/cheesesamwich.github.io/main/scripts/SpeedZone.cs", 
    name: "SpeedZone", 
    description: "Allows you to make an object that changes the speed of the player when you walk into it",
    tutorial: 
    <>
      <p>- Import the downloaded script into your unity project.</p>
      <p><i>If you havent already, ensure you have a non movement colliding layer by making a new layer, and unchecking it in the "locomotion enabled layers" variable on the GorillaPlayer</i></p>
      <p>- Find the object you want to slow the player</p>
      <p>- Make sure the objects collider is set to "isTrigger"</p>
      <p>- Add the SpeedZone script to the object.</p>
      <p>- Set the "playerSpeed" variable on the script to the speed of the player when in the object. (1.2 is the gorillaPlayer default)</p>
      <p>You're good to go!</p>
    </>
  }
];

let tuts = [
  { url: ["https://raw.githubusercontent.com/cheesesamwich/cheesesamwich.github.io/main/scripts/HitSounds.cs", "https://raw.githubusercontent.com/cheesesamwich/cheesesamwich.github.io/main/scripts/HitSoundTrigger.cs"], 
    name: "Grabbables", 
    description: "Shows you how to create grabbable objects",
    tutorial: 
    <>
      <p>- shit here</p>
      <p>- meow.</p>
      <h3>Example</h3>
      <img src='https://cdn.discordapp.com/avatars/361575984639770625/0370221e38b7113d687003cd2a873180.webp'></img>
    </>
  },
  { url: ["https://raw.githubusercontent.com/cheesesamwich/cheesesamwich.github.io/main/scripts/HitSounds.cs", "https://raw.githubusercontent.com/cheesesamwich/cheesesamwich.github.io/main/scripts/HitSoundTrigger.cs"], 
    name: "Reflection Probes", 
    description: "Shows how to create and use reflection probes",
    tutorial: 
    <>
      <h1>Creation:</h1>
      <p>- To create a probe, right click in the hierarchy, go to light, then reflection probe.</p>
      <h3>Example</h3>
      <img src='https://files.catbox.moe/rmnqxp.png'></img>
      <p>- Reflection probes have a cube area that the reflections will affect. If the cube is as big as a room, the reflections will only show on objects in the room.</p>
      <h3>Example</h3>
      <img src='https://files.catbox.moe/kwirmq.png'></img>
      <p>- Once your probe is set up, you can either manually bake it by pressing bake, or have it bake automatically the next time you bake lights.</p>
      <p>- When the probe is baked, it will show the finished reflections when selected.</p>
      <h3>Example</h3>
      <img src='https://files.catbox.moe/pedn5q.png'></img>
      <p>- Any smooth/metallic object inside of the area will have the reflections applied.</p>
      <h1>Settings:</h1>
      <p>- TYPE is how the reflections will be made. Realtime makes the probe create reflections every frame update. Baked allows you to have the probe create a reflection using your computer's hardware.</p>
      <p className='warning'>NEVER use realtime with any standalone VR game. Baked reflections should never impact performance.</p>
      <p>- IMPORTANCE is how the game will choose which probe to use over others.</p>
      <p><i>For example, the game would use a probe with the priority of 2 over one with the priority of 1.</i></p>
      <p>- INTENSITY is how much the probe will show on smooth/metallic objects.</p>
      <p>- BOX PROJECTION just changes the way the reflections show up on objects. Typically this should be on.</p>
      <p>- BLEND DISTANCE is the distance (in meters) that the reflection will fade into view on objects.</p>
      <p><i>For example, a blend distance of 0 would make the reflections appear instantly upon entering the area.</i></p>
      <p>- BOX SIZE defines how large the area of effect is.</p>
      <p>- RESOLUTION is how high quality the reflections will be. Typically you'll want this to be very low.</p>
      <p><i>Due to how reflections are rendered, high quality reflections will use more power, but wont look much different. 128x128 is the best option for most occasions.</i></p>
      <p>- HDR decides if the reflections will be rendered in a higher color range.</p>
      <p><i>Using HDR really depends on your project. If you're going for more realistic graphics, you'll want this on. However, it can cause some very minor performance impacts.</i></p>
      <p>- SHADOW DISTANCE defines how far away shadows will be rendered. This doesn't affect performance unless you're using realtime rendering.</p>
      <p><i>This shouldn't be set to anything higher than 100, as it will majorly increase bake and/or render times.</i></p>
      <p>- CLEAR FLAGS is what will be rendered as the "background" of sorts.</p>
      <p>- BACKGROUND COLOR is only used if clear flags is set to "Solid Color."</p>
      <p>- CULLING MASK defines what will be rendered in the reflection. All included layers are rendered, while the others are not.</p>
      <p>- OCCLUSION CULLING decides if the reflections will take occlusion into account.</p>
      <p><i>This setting only really matters if you're using realtime probes.</i></p>
      <p>- CLIPPING PLANES define how far/close an object must be before being cut out of the render.</p>
      <p><i>For example, if you have a building 1000 meters away, and the FAR clipping plane is set to 100, the building won't be rendered.</i></p>
    </>
  }
];
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
        {!infoPage && <><h1>SamSam Scripts</h1> <h3 id='subHeader'>The best place for all of your fan game needs</h3></>} 
        {infoPage &&  <h1 id='infoHeader'>{infoPage} instructions</h1>}
      </header>
      {!infoPage && 
        <>
            <div id='tutSwitch'>
              <input type="radio" id="scriptButton" name="switch" checked/>
              <label className="btn" htmlFor="scriptButton" onClick={() => handleSwitch("scriptButton")}>Scripts</label>
              <input type="radio" id="tutButton" name="switch"/>
              <label className="btn" htmlFor="tutButton" onClick={() => handleSwitch("tutButton")}>Tutorials</label>
            </div>
            <div id='inputWrapper'>
              <input id='searchBar' placeholder='Search for a script!' onChange={(e) => setSearchTerm(e.target.value)}></input>
            </div>
            <div className="script-tiles">
                {isScriptSearch && <ScriptTiles searchTerm={searchTerm} videos={scripts} download={true}/>}
                {!isScriptSearch && <ScriptTiles searchTerm={searchTerm} videos={tuts}/>}
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
  videos.filter(video => video.name.toLowerCase().includes(searchTerm.toLowerCase()) || video.description.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm.length === 0).forEach((element, index) => {
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

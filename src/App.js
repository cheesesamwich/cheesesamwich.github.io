import React, { useState, useEffect } from 'react';
import './style.css'; 

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const changePage = (newPage) => {
    console.log("set page to " + newPage);
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div id="navmenu">
        <img id="pfp" src="favicon.png" alt="" draggable="false" />
        <ButtonBar changePage={changePage} /> 
      </div>
      <div id="content" style={{ paddingLeft: '2%', paddingRight: '2%' }}>
        <MainAppContent page={currentPage} />
      </div>
    </div>
  );
}

function ButtonBar({ changePage }) {
  return (
    <div id="buttonbar">
      <ChangeButton pagename='home' changePageFunc={changePage} svgPath='M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z'></ChangeButton>      
      <ChangeButton pagename='dev' changePageFunc={changePage} svgPath='M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z'></ChangeButton>
      <ChangeButton pagename='skills' changePageFunc={changePage} svgPath='M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z'></ChangeButton>
      <ChangeButton pagename='socials' changePageFunc={changePage} svgPath='M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z'></ChangeButton>
      <ChangeButton pagename='music' changePageFunc={changePage} svgPath='M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Zm-80-240h-80v160h80v-160Zm400 0v160h80v-160h-80Zm-400 0h-80 80Zm400 0h80-80Z'></ChangeButton> 
      <ChangeButton pagename='blog' changePageFunc={changePage} svgPath='M160-120q-33 0-56.5-23.5T80-200v-640l67 67 66-67 67 67 67-67 66 67 67-67 67 67 66-67 67 67 67-67 66 67 67-67v640q0 33-23.5 56.5T800-120H160Zm0-80h280v-240H160v240Zm360 0h280v-80H520v80Zm0-160h280v-80H520v80ZM160-520h640v-120H160v120Z'></ChangeButton>
      

     
    </div>
  );
}
function ChangeButton(props)
{
  return(
    <button onClick={() => props.changePageFunc(props.pagename)}>
      <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960"><path d={props.svgPath}/></svg>
    </button>
  )
}
function MainAppContent(props) {
  if (props.page === "home") {
    return (
      <div id='mainAppContent'>
        <h1>Home</h1>
        <p>
          Hi! I'm Sam (INTP-T), I enjoy messing about with game, web, software development, modding, and sometimes music.
          If you want to talk to me or look at my socials then you can check the socials tab, and if you wanna see stuff I've done/can do then you can check the other tabs. Feel free to message me on Discord about literally anything if you wanna talk :P
        </p>
      </div>
      
    );
  }
  if (props.page === "dev") {
    return (
      <div id='mainAppContent'>
        <h1 style={{ paddingTop: '20px' }}>Links</h1>
        <p>This is all of my dev sites, sometimes I might post games, software, mods, plugins, or anything else I make.</p>
        <ShieldsTile link="https://github.com/cheesesamwich?tab=repositories" shieldslink="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
        <ShieldsTile link="https://cheeesesamwich.itch.io" shieldslink="https://img.shields.io/badge/Itch.io-FA5C5C?style=for-the-badge&logo=itchdotio&logoColor=white" />
      </div>
    );
  }
  if (props.page === "socials") {
    return (
      <div id='mainAppContent'>
        <h1>Socials</h1>
        <p>Blah blah blah something about socials. This was a placeholder text but honestly its pretty fitting</p>
        <ShieldsTile link="https://bsky.app/profile/cheesesamwich.bsky.social" shieldslink="https://img.shields.io/badge/Bluesky-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />
        <ShieldsTile link="https://open.spotify.com/user/1c4rsd0w05thao0gsc5vqrq72?si=4e8582a98b4c433f" shieldslink="https://img.shields.io/badge/Spotify-1ED760?&style=for-the-badge&logo=spotify&logoColor=white" />
        <ShieldsTile link="https://discordapp.com/users/976176454511509554" shieldslink="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" />
        <ShieldsTile link="https://discord.gg/Fnnw4Spf9P" shieldslink="https://img.shields.io/badge/My Emoji Server-5865F2?style=for-the-badge&logo=discord&logoColor=white" />
      </div>
    );
  }
  if (props.page === "skills")
  {
    return (
      <div id='mainAppContent'>
        <h3>High Experience</h3>
          <ShieldsTile shieldslink="https://img.shields.io/badge/CSHARP-28046c?style=for-the-badge&logo=csharp&logoColor=white" />
          <ShieldsTile shieldslink="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" />
          <ShieldsTile shieldslink="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
          <ShieldsTile shieldslink="https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white" />
        <h3>Medium Experience</h3>
          <ShieldsTile shieldslink="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
          <ShieldsTile shieldslink="https://img.shields.io/badge/blender-%23F5792A.svg?style=for-the-badge&logo=blender&logoColor=white" />
          <ShieldsTile shieldslink="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
          <ShieldsTile shieldslink="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
      </div>
    )
  }
  if (props.page === "music")
  {
    return (
      <div id='mainAppContent'>
        <h1>Recent Tracks</h1>
        <LastFmRecentTracks></LastFmRecentTracks>
        <h1>Most Listened</h1>
        <LastFmTopTracks></LastFmTopTracks>
      </div>
    )
  }
  if (props.page === "blog")
  {
    return (
      <div id='mainAppContent'>
        <h1>Blog</h1>
        <p>There will probably be something here at some point <br></br>uhhhhh<br></br>dont count on it</p>
      </div>
    )
  }
}


function ShieldsTile(props) {
  if (props.link === undefined) {
    return (
      <img src={props.shieldslink} alt="" style={{ borderRadius: '20px', height: '35px', padding: '5px' }} />
    );
  } else {
    return (
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.shieldslink} alt="" style={{ borderRadius: '20px', height: '35px', padding: '5px' }} />
      </a>
    );
  }
}

function LastFmRecentTracks() {
  let username = 'cheesesamwich';
  let apiKey = process.env.FM_API_KEY;
  const [recentTracks, setRecentTracks] = useState([]);

  useEffect(() => {
    const fetchRecentTracks = async () => {
      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&limit=5&format=json`
        );
        
        if (!response.ok) {
          return(
            <div>
            <p>server error -_-</p>
          </div>
          )
        }

        const data = await response.json();
        if (data.recenttracks) {
          setRecentTracks(data.recenttracks.track);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecentTracks();
  }, [username, apiKey]);

  const uniqueTracks = recentTracks.filter((track, index, self) => {
    return (
      index === self.findIndex((t) => t.name === track.name && t.artist['#text'] === track.artist['#text'])

    );
  });

  let Tracks = [];
  uniqueTracks.forEach((element, index) => {
    Tracks.push(
      <span key={index}>
        {element.name} - {element.artist['#text']} {(element['@attr'] && element['@attr']['nowplaying'] === 'true') ? " (Currently Playing)" : ""}
        <br />
      </span>
    );
  });

  if(uniqueTracks.length === 0)
  {
    return(
      <div>
        <h2>Server error</h2>
      </div>
    )
  }
  return (
    <div>
      <p>{Tracks}</p>
    </div>
  );
}

function LastFmTopTracks() {
  let username = 'cheesesamwich';
  let apiKey = process.env.FM_API_KEY;
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${username}&api_key=${apiKey}&limit=5&format=json`
        );
        
        if (!response.ok) {
          return(
            <div>
            <p>server error -_-</p>
          </div>
          )
        }

        const data = await response.json();
        console.log(data);
        if (data.toptracks) {
          setTopTracks(data.toptracks.track);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopTracks();
  }, [username, apiKey]);

  const uniqueTracks = topTracks.filter((track, index, self) => {
    return (
      index ===
      self.findIndex((t) => t.name === track.name && t.artist.name === track.artist.name)
    );
  });

  let Tracks = [];
  uniqueTracks.forEach((element, index) => {
    Tracks.push(
      <span key={index}>
        {uniqueTracks.indexOf(element) + 1}. {element.name} - {element.artist.name} {(element['@attr'] && element['@attr']['nowplaying'] === 'true') ? " (Currently Playing)" : ""}
        <br />
      </span>
    );
  });

  if(uniqueTracks.length === 0)
  {
    return(
      <div>
        <h2>Server error</h2>
      </div>
    )
  }
  return (
    <div>
      <p>{Tracks}</p>
    </div>
  );
}

export default App;

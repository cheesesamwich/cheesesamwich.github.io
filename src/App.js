import React, { useState } from 'react';
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

      <button onClick={() => changePage("home")}>
        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
      </button>

      <button onClick={() => changePage("dev")}>
        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960"><path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z"/></svg>
      </button>

      <button onClick={() => changePage("socials")}>
        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" ><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
      </button>

      <button onClick={() => changePage("skills")}>
      <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
      </button>

    </div>
  );
}

function MainAppContent(props) {
  if (props.page === "home") {
    return (
      <div id='mainAppContent'>
        <h1>Home</h1>
        <p>
          Hi! I'm Sam (INTP-T), I go by <i>check my discord pronouns i cba to keep updating my pronouns on here</i> and I enjoy messing about with game, web, software development, modding, and sometimes music.
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
  if (props.page == "skills")
  {
    return (
      <div id='mainAppContent'>
        <h3>High Experience</h3>
        <h1> uhhh something here test (sam dont forget to remove this)</h1>
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
}


function ShieldsTile(props) {
  if (props.link === undefined) {
    return (
      <img src={props.shieldslink} alt="" style={{ borderRadius: '20px', height: '35px', padding: '5px' }} />
    );
  } else {
    return (
      <a href={props.link} target="_blank">
        <img src={props.shieldslink} alt="" style={{ borderRadius: '20px', height: '35px', padding: '5px' }} />
      </a>
    );
  }
}

export default App;

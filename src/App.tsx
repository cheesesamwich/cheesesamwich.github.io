import { useState, useEffect } from 'react';
import './App.css';
import { friends, artists, sociallinks } from './constants';
import { LinkList, UserIcon } from './components';

function GetSong()
{
  const songs = 
  [
    // "lofi1.mp3",
    "lofi2.mp3",
    "lofi3.mp3",
    "lofi4.mp3"
  ];
  
  return `https://github.com/cheesesamwich/cheesesamwich.github.io/raw/main/src/assets/${songs[Math.floor(Math.random() * songs.length)]}`
}



const songChoice = GetSong();

export interface Person
{
  pfp: string;
  url: string;
  //unused right now but might be useful
  name?: string;
}


function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [musicEnabled, setMusicEnabled] = useState(false);

  function enterSite(playMusic)
  {
    setMusicEnabled(playMusic);
    setHasEntered(true);
  }

  const ScrollSections = 
  [
    <>
      <h1>Hey!</h1>
      <h2>
        I'm Samwich, but you can call me Sam.
        I like programming, gaming, and a bunch of other stuff i can't cram into this bio :P
        I have a vencord fork called <a href='https://github.com/cheesesamwich/Tobleronecord' target='_blank'>tobleronecord</a> that i maintain with my dumb plugins,
        as well as some more random projects that pique my interest. You might find me in programming or game development communities, so if you do, say hi!!
      </h2>
    </>,
    <div className='FriendsParent'>
      <h1>Friends</h1>
      {friends.map(e => <UserIcon {...e}/>)}
    </div>,
    <div className='MusicParent'>
      <h1>Artists I Like</h1>
      {artists.map(e => <UserIcon {...e}/>)}
    </div>,
    <>
      <h1>Social Links</h1>
      <LinkList links={sociallinks}/>
    </>,
    <>
    <h1>Other good links</h1>
    <LinkList links={
      [
        {
          name: "Don't ask to ask",
          url: "https://dontasktoask.com/"
        },
        {
          name: "No hello",
          url: "https://nohello.net/en/"
        },
        {
          name: "Upgrade from windows",
          url: "https://upgradefromwindows.com/"
        }
      ]}/>
  </>
  ]

  useEffect(() => 
  {
    if(musicEnabled)
    {
      let audioElement = new Audio(songChoice);
      audioElement.volume = 0.05;
  
      if (hasEntered) {
        audioElement.play();
      }
  
      return () => {
        audioElement.pause();
      };
    }
  }, [hasEntered, musicEnabled]);

  useEffect(() => 
  {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        setScroll((prevScroll) => Math.max(prevScroll - 1, 0));
      } else {
        setScroll((prevScroll) => {
          return Math.min(prevScroll + 1, ScrollSections.length - 1);
        });
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => 
    {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="App" style={{ userSelect: "none" }}>

      <div className={`IntroBlur CenterDiv ${hasEntered ? "IntroFadeOut" : ""}`}>
        <div className="IntroButton">
          <h1 style={{ cursor: "pointer" }}>Enable music?</h1>
          <div className='MusicPrompt'>
            <h2 onClick={() => enterSite(true)}>Yes</h2>
            <h2 onClick={() => enterSite(false)}>No</h2>
          </div>
        </div>
      </div>

      <div className='Content'>
        <div className="CenterModal">
          {ScrollSections[scroll]}
        </div>
        <div className='IndicatorBars'>
          {ScrollSections.map((_, index) => (
            <div
              key={index}
              onClick={() => setScroll(index)}
              className={`ScrollChip ${index === scroll ? "ScrollChipHighlight" : ""}`}
            />
          ))}
        </div>
        <h4 className='ScrollHint'>Hint: scroll :)</h4>
      </div>
    </div>
  );
}

export default App;
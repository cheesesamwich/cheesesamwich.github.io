import { useState, useEffect } from 'react';
import './App.css';

//hosted on github now

function GetSong()
{
  const songs = 
  [
    "lofi1.mp3",
    "lofi2.mp3",
    "lofi3.mp3",
    "lofi4.mp3"
  ];
  
  return `https://github.com/cheesesamwich/cheesesamwich.github.io/raw/main/src/assets/${songs[Math.floor(Math.random() * songs.length)]}`
}

function IconLink(props)
{
  let {path, url, viewBox, style} = props;

  return(
    <a href={url} target="_blank">
      <div className='IconCircle'>
        <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox ?? "0 0 24 24"} className='IconLink'><path fillRule="evenodd" d={path} clipRule="evenodd"></path></svg>
      </div>
    </a>
  )
}

function UserIcon(props)
{
  let {pfp, url, name} = props;
  return (
    <a href={url} target='_blank'>
      <img className='UserIcon' src={pfp} alt={name && name}></img>
    </a>
  )
}

const songChoice = GetSong();

interface Person
{
  pfp: string;
  url: string;
  //unused right now but might be useful
  name?: string;
}

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [scroll, setScroll] = useState(0);

  const friends : Person[] = 
  [
    {
      pfp: "https://files.catbox.moe/x7zcwg.png",
      url: "https://sadan.zip/",
      name: "sadan"
    },
    {
      pfp: "https://files.catbox.moe/92t8q8.webp",
      url: "https://krstlskll69.github.io/",
      name: "Krystal"
    },
    {
      pfp: "https://files.catbox.moe/pq3jg6.webp",
      url: "https://kart.framer.website/",
      name: "Kart"
    },
    {
      pfp: "https://files.catbox.moe/fb8zke.png",
      url: "https://ashley0143.xyz/",
      name: "Ashley"
    }
  ];

  const artists : Person[] = 
  [
    {
      pfp: "https://files.catbox.moe/bkujkb.png",
      url: "https://open.spotify.com/artist/4LLpKhyESsyAXpc4laK94U?si=RepcYQ5lSVi6CAT9hlo1fw",
      name: "Mac Miller"
    },
    {
      pfp: "https://files.catbox.moe/6x5mh3.jpg",
      url: "https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF?si=63891c008f7841fe",
      name: "Tyler, the Creator"
    },
    {
      pfp: "https://files.catbox.moe/1sgsw5.jpg",
      url: "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg?si=3156ee0df559461b",
      name: "Kendrick Lamar"
    },
    {
      pfp: "https://files.catbox.moe/om75dw.jpg",
      url: "https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5?si=0576205f05204ac6",
      name: "J Cole"
    },
    {
      pfp: "https://files.catbox.moe/rfwbpi.jpg",
      url: "https://open.spotify.com/artist/4DiZJ3Gg7B1EWeKoQO36Ae?si=yYYGCQE9ShGkdVVCphBIvg",
      name: "Ricky Jamaraz"
    },
    {
      pfp: "https://files.catbox.moe/29pc3t.png",
      url: "https://open.spotify.com/artist/3Uobr6LgQpBbk6k4QGAb3V?si=IB8kcdpJSxiWM5-s8sXErg",
      name: "I Prevail"
    },
    {
      pfp: "https://files.catbox.moe/wcpbxt.jpg",
      url: "https://open.spotify.com/artist/3uwAm6vQy7kWPS2bciKWx9?si=qnAJMljIS3i7hB-YHeG4YA",
      name: "girl in red"
    }
  ]

  const ScrollSections = 
  [
    <>
      <h1>Hey!</h1>
      <h2>
        I'm Samwich, but you can call me Sam.
        I like programming, gaming, and a bunch of other stuff i can't cram into this bio :P
        I have a vencord fork called <a href='https://github.com/cheesesamwich/Tobleronecord' target='_blank'>tobleronecord</a> that i maintain with my dumb plugins,
        as well as some more random projects that peak my interest. You might find me in programming or game development communities, so if you do, say hi!!
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
      <h1>Links i dont have a place for</h1>
      <a href='https://github.com/cheesesamwich'><h2>Github</h2></a>
      <a href='https://discord.com/users/976176454511509554'><h2>Discord</h2></a>
      <a href='https://open.spotify.com/user/1c4rsd0w05thao0gsc5vqrq72?si=f9c8747cd108423d'><h2>Spotify</h2></a>
    </>
  ]
  //slightly cursed, but the audio has a stroke and replays a ton of times otherwise
  useEffect(() => {
    let audioElement = new Audio(songChoice);
    audioElement.volume = 0.05;

    if (hasEntered) {
      audioElement.play();
    }

    return () => {
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, [hasEntered]);



  useEffect(() => {
    let audioElement = new Audio(songChoice);
    audioElement.volume = 0.05;

    if (hasEntered) {
      audioElement.play();
    }

    return () => {
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, [hasEntered]);

    useEffect(() => {
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

      return () => {
        window.removeEventListener('wheel', handleWheel);
      };
    }, []);

  return (
    <div className="App" style={{ userSelect: "none" }}>

      <div className={`IntroBlur CenterDiv ${hasEntered ? "IntroFadeOut" : ""}`}>
        <div className="IntroButton" onClick={() => setHasEntered(true)}>
          <h1 style={{ color: "var(--subtext1)", cursor: "pointer" }}>Click to enter.</h1>
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
      </div>
    </div>
  );
}

export default App;
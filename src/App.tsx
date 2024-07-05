import { useState, useEffect } from 'react';
import './App.css';

//hosted on github now
const lofiSong = "https://github.com/cheesesamwich/cheesesamwich.github.io/raw/main/src/assets/lofi.mp3";

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

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  //slightly cursed, but the audio has a stroke and replays a ton of times otherwise
  useEffect(() => {
    let audioElement = new Audio(lofiSong);
    audioElement.volume = 0.05;

    if (hasEntered) {
      audioElement.play();
    }

    return () => {
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, [hasEntered]);

  return (
    <div className="App" style={{ userSelect: "none" }}>

      <div className={`IntroBlur CenterDiv ${hasEntered ? "IntroFadeOut" : ""}`}>
        <div className="IntroButton" onClick={() => setHasEntered(true)}>
          <h1 style={{ color: "var(--subtext1)", cursor: "pointer" }}>Click to enter.</h1>
        </div>
      </div>

      <div className='Content'>
        <div className="CenterModal">
          <h1>Hey!</h1>
          <h2>
            I'm Samwich, but you can call me Sam.
            I like programming, gaming, and a bunch of other stuff i can't cram into this bio :P
            I have a vencord fork called <a href='https://github.com/cheesesamwich/Tobleronecord' target='_blank'>tobleronecord</a> that i maintain with my dumb plugins,
            as well as some more random projects that peak my interest. You might find me in programming or game development communities, so if you do, say hi!!
            </h2>
        </div>
        <div className="ButtonBar">
          {/*THE SCALE IS SO UNEVEN UGHH I HATE IT*/}
          <IconLink url="https://github.com/cheesesamwich" path="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"/>
          <IconLink style={{transform: "scale(0.75"}} url="https://discord.com/users/976176454511509554" path="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1a14.66 14.66 0 0 0-4.58 0a10.14 10.14 0 0 0-.53-1.1a16 16 0 0 0-4.13 1.3a17.33 17.33 0 0 0-3 11.59a16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83a3.39 3.39 0 0 0 .42-.33a11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84a12.41 12.41 0 0 0 1.08 1.78a16.44 16.44 0 0 0 5.06-2.59a17.22 17.22 0 0 0-3-11.59a16.09 16.09 0 0 0-4.09-1.35M8.68 14.81a1.94 1.94 0 0 1-1.8-2a1.93 1.93 0 0 1 1.8-2a1.93 1.93 0 0 1 1.8 2a1.93 1.93 0 0 1-1.8 2m6.64 0a1.94 1.94 0 0 1-1.8-2a1.93 1.93 0 0 1 1.8-2a1.92 1.92 0 0 1 1.8 2a1.92 1.92 0 0 1-1.8 2"></IconLink>
          <IconLink style={{transform: "scale(0.85"}}  url="https://open.spotify.com/user/1c4rsd0w05thao0gsc5vqrq72?si=f9c8747cd108423d" path="M17.61 16.906v-.007a.905.905 0 0 0-.464-.791l-.005-.002a13.236 13.236 0 0 0-6.999-1.797h.015a20.964 20.964 0 0 0-4.626.559l.142-.028a.752.752 0 0 0-.656.816v-.003v.012c0 .205.081.391.212.528c.132.14.318.227.525.227l.031-.001h-.001c.225-.034.42-.077.611-.133l-.032.008a18.536 18.536 0 0 1 3.786-.422h.01a11.736 11.736 0 0 1 6.258 1.639l-.054-.03c.146.097.323.159.513.172h.004a.734.734 0 0 0 .734-.734v-.017v.001zm1.5-3.36v-.032c0-.395-.219-.74-.542-.918l-.005-.003c-2.358-1.387-5.195-2.207-8.223-2.207c-.118 0-.237.001-.354.004h.018a17.46 17.46 0 0 0-4.858.687l.123-.031a.939.939 0 0 0-.749 1.004v-.004v.004c0 .516.418.934.934.934h.004c.218-.028.414-.072.603-.131l-.024.007a14.593 14.593 0 0 1 3.894-.516h.027h-.001a14.596 14.596 0 0 1 7.695 1.975l-.07-.038c.169.108.371.181.588.203h.01a.934.934 0 0 0 .934-.934v-.004zm1.69-3.874l.001-.052c0-.449-.251-.839-.62-1.039l-.006-.003a15.808 15.808 0 0 0-4.472-1.707l-.106-.019c-1.596-.372-3.429-.586-5.312-.586h-.05h.003a20.216 20.216 0 0 0-5.83.769L4.55 7a1.244 1.244 0 0 0-.6.398l-.002.002a1.135 1.135 0 0 0-.24.761v-.003v.029c0 .305.122.582.321.784c.196.203.471.328.775.328h.032h-.002c.23-.02.443-.064.645-.131l-.02.006a17.521 17.521 0 0 1 4.814-.578h-.014h.044c1.699 0 3.352.194 4.939.56l-.147-.029a13.65 13.65 0 0 1 4.028 1.519l-.067-.035c.178.111.393.18.623.187h.012c.304 0 .579-.122.778-.32c.205-.194.333-.469.333-.773l-.001-.035zM24 12v.09c0 2.187-.598 4.234-1.64 5.987l.03-.054a12.045 12.045 0 0 1-4.311 4.337l-.056.03c-1.729 1.012-3.806 1.609-6.024 1.609s-4.295-.597-6.081-1.64l.057.031a12.045 12.045 0 0 1-4.337-4.311l-.03-.056C.596 16.294-.001 14.217-.001 11.999s.597-4.295 1.64-6.081l-.031.057a12.045 12.045 0 0 1 4.311-4.337l.056-.03C7.704.596 9.781-.001 11.999-.001s4.295.597 6.081 1.64l-.057-.031a12.045 12.045 0 0 1 4.337 4.311l.03.056A11.606 11.606 0 0 1 24 11.908v.096v-.005z"/>
        </div>
      </div>
    </div>
  );
}

export default App;

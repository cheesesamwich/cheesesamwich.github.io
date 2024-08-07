import { useState } from 'react';
import './App.css';
import { coolPeople, sociallinks, bulletPoint } from './constants';

import { UserIcon } from './components/UserIcon';
import { TitleList } from './components/TitleList';
import { LinkList } from './components/LinkList';
import { ScrollBar } from './components/ScrollBar';
import { Hyperlink } from './components/HyperLink';
import { useAwaiter } from './utils/useAwaiter';

function isMobileDevice() {
  return ['iphone', 'android', 'webos', 'ipad', 'ipod', 'blackberry', 'windows phone'].some(keyword => navigator.userAgent.toLowerCase().includes(keyword))
  ||
  window.innerWidth <= 800
  ;
}

export function CatSection()
{
  return (
    <>
      <h1>Cat Image</h1>
      <h2>There was space to fill, so have a cat</h2>
      <img src={"https://cataas.com/cat"} className='catImage'/>
    </>
  )
}

export function App() {
  const [scroll, setScroll] = useState(0);

  const ScrollSections = 
  [
    <>
      <h1>Hey!</h1>
      <h2>
        I'm Samwich, but you can call me Sam.
        I like programming, gaming, and i have a bunch of random projects that pique my interest.
        You might find me in programming or game development communities, so if you do, say hi!!
      </h2>
    </>,
    <div>
      <h1>Cool People</h1>
      <div className='UserCollection'>
        {coolPeople.map(e => <UserIcon {...e}/>)}
      </div>
    </div>,
    /*
    //too stinky and takes 80 years to load
    <div className='MusicParent'>
      <h1>Artists I Like</h1>
      <div className='UserCollection'>
        {artists.map(e => <UserIcon {...e}/>)}
      </div>
    </div>,
    */
    <>
      <h1>Links</h1>
      <div className='RaisedElevation'>
        <h2>Social</h2>
        <LinkList links={sociallinks}/>
      </div>

      <div className='RaisedElevation'>
        <h2>Topics</h2>
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
      </div>
    </>,
    <CatSection/>
    //NOBODY IS GOING TO HIRE ME BRO
    /*
    <>
      <h1>Portfolio</h1>
      <TitleList data={
        [
          {
            title: "JavaScript/TypeScript",
            subjects: 
            [
              <h3>{bulletPoint} <Hyperlink href="https://github.com/cheesesamwich/cheesesamwich.github.io">This site</Hyperlink></h3>,
              <h3>{bulletPoint} <Hyperlink href="https://github.com/cheesesamwich/Tobleronecord">Tobleronecord</Hyperlink></h3>,
              <h3>{bulletPoint} <Hyperlink href="https://github.com/cheesesamwich/Meowify">Meowify</Hyperlink></h3>
            ]
          }
        ]}/>
    </>
    */
  ]

  if(isMobileDevice())
  {
    return (
      <h1>No mobile yet :(</h1>
    )
  }

  return (
    <div className="MainApp" style={{ userSelect: "none" }}>
      <div className='Content'>
        <div className="CenterModal">
          {ScrollSections[scroll]}
        </div>
        <div className='IndicatorBars'>
          <ScrollBar ScrollSections={ScrollSections} scroll={scroll} setScroll={setScroll}></ScrollBar>
        </div>
        <h4 className='ScrollHint'>Hint: scroll :)</h4>
      </div>
    </div>
  );
}
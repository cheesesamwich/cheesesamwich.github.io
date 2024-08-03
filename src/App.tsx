import { useState } from 'react';
import './App.css';
import { friends, artists, sociallinks, bulletPoint } from './constants';

import { UserIcon } from './components/UserIcon';
import { TitleList } from './components/TitleList';
import { LinkList } from './components/LinkList';
import { ScrollBar } from './components/ScrollBar';
import { Hyperlink } from './components/HyperLink';

function isMobileDevice() {
  return ['iphone', 'android', 'webos', 'ipad', 'ipod', 'blackberry', 'windows phone'].some(keyword => navigator.userAgent.toLowerCase().includes(keyword))
  ||
  window.innerWidth <= 800
  ;
}

export function App() {
  const [scroll, setScroll] = useState(0);

  const ScrollSections = 
  [
    <>
      <h1>Hey!</h1>
      <h2>
        I'm Samwich, but you can call me Sam.
        I like programming, gaming, and a bunch of other stuff i can't cram into this bio :P
        I have a vencord fork called <a href='https://samwich.dev/toblerone' target='_blank' rel="noreferrer">tobleronecord</a> that i maintain with my dumb plugins,
        as well as some more random projects that pique my interest. You might find me in programming or game development communities, so if you do, say hi!!
      </h2>
    </>,
    <div className='FriendsParent'>
      <h1>Friends</h1>
      <div className='UserCollection'>
        {friends.map(e => <UserIcon {...e}/>)}
      </div>
    </div>,
    <div className='MusicParent'>
      <h1>Artists I Like</h1>
      <div className='UserCollection'>
        {artists.map(e => <UserIcon {...e}/>)}
      </div>
    </div>,
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
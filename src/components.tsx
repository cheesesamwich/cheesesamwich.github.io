import { ReactNode, useEffect } from "react";
import { bulletPoint } from "./constants";

export function UserIcon(props)
{
  let {pfp, url, name} = props;
  return (
    <a href={url} target='_blank'>
      <img className='UserIcon' src={pfp} alt={name && name}></img>
    </a>
  )
}

export function LinkList(props)
{
  const { links } = props;

  if(!links) return null;

  return (
    <div style={{display: "flex", gap: "1vh"}}>
      {
        links.map((e, index) => 
          <>
            <a href={e.url} target="_blank"><h2>{e.name}</h2></a>
            {/*genius or insane? someone tell me please*/}
            <h2>{index != (0 | links.length - 1) ? bulletPoint : ""}</h2>
          </>
        )
      }
    </div>
  )
}

interface TitleListObject
{
  title: string;
  subjects: (string | ReactNode)[];
}

export function TitleList(props)
{
  const { data } : {data : TitleListObject[]} = props;
  return (
    <div className="TitleList">
      {data.map(e => 
          <>
            <h2>{e.title}</h2>
            {e.subjects.map(s => 
              {
                if(typeof s == "string")
                {
                  return <h3>{bulletPoint} {s}</h3>;
                }
                else
                {
                  return s;
                }
              }
            )}
          </>
      )}
    </div>
  )
}

export function ScrollBar({ScrollSections, setScroll, scroll})
{
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
    ScrollSections.map((_, index) => (
      <div
        key={index}
        onClick={() => setScroll(index)}
        className={`ScrollChip ${index === scroll ? "ScrollChipHighlight" : ""}`}
      />
    ))
  )
}

//basically a shorthand because i am so tired of typing this out 
export function Hyperlink({ href, children, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
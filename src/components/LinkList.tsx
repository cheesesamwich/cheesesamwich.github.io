import { bulletPoint } from "../constants";

export function LinkList(props)
{
  const { links } = props;

  if(!links) return null;

  return (
    <div style={{display: "flex", gap: "1vh"}}>
      {
        links.map((e, index) => 
          <>
            <a href={e.url} target="_blank" rel="noreferrer"><h2>{e.name}</h2></a>
            {/*genius or insane? someone tell me please*/}
            <h2>{index != (0 | links.length - 1) ? bulletPoint : ""}</h2>
          </>
        )
      }
    </div>
  )
}



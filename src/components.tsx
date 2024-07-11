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
            <h2>{index != (0 | links.length - 1) ? "•" : ""}</h2>
          </>
        )
      }
    </div>
  )
}
import { useState } from "react";

export function UserIcon(props)
{
  const { pfp, url, name } = props;
  const [loaded, setLoaded] = useState(false);

  return (
    <a href={url} target='_blank' rel="noreferrer">
      {!loaded && <h1 className="UserIcon">...</h1>}
      <img
        className='UserIcon'
        src={pfp}
        alt={name || 'User icon'}
        onLoad={() => setLoaded(true)}
        style={{ display: loaded ? 'inherit' : 'none' }}
      />
    </a>
  );
}

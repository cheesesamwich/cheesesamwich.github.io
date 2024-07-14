export function UserIcon(props)
{
  const {pfp, url, name} = props;
  return (
    <a href={url} target='_blank' rel="noreferrer">
      <img className='UserIcon' src={pfp} alt={name && name}></img>
    </a>
  )
}
export function UserIcon(props)
{
  let {pfp, url, name} = props;
  return (
    <a href={url} target='_blank'>
      <img className='UserIcon' src={pfp} alt={name && name}></img>
    </a>
  )
}
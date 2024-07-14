
//basically a shorthand because i am so tired of typing this out 
export function Hyperlink({ href, children, ...rest }) 
{
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
}
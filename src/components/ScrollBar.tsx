import { useEffect } from "react";

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

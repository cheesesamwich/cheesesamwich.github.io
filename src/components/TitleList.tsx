import { bulletPoint } from "../constants";
import { ReactNode } from "react";

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


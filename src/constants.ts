export const bulletPoint = "•";

export interface Person
{
  pfp: string;
  url: string;
  //unused right now but might be useful
  name?: string;
}

export const sociallinks = 
[
  {
    url: "https://github.com/cheesesamwich",
    name: "Github"
  },
  {
    url: "https://discord.com/users/976176454511509554",
    name: "Discord"
  },
  {
    url: "https://open.spotify.com/user/1c4rsd0w05thao0gsc5vqrq72?si=f9c8747cd108423d",
    name: "Spotify"
  }
];

export const coolPeople : Person[] = 
[
  {
    pfp: "https://samwich.dev/assets/sadan.png",
    url: "https://sadan.zip/",
    name: "sadan"
  },
  {
    pfp: "https://samwich.dev/assets/krystal.webp",
    url: "https://krstlskll69.github.io/",
    name: "Krystal"
  },
  {
    pfp: "https://samwich.dev/assets/ashley.png",
    url: "https://ashley0143.xyz/",
    name: "Ashley"
  }
];
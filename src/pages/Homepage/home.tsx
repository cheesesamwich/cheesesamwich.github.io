import { useLocation } from 'react-router-dom';
import "./style.css";

const siteDictionary = {
    'GitHub': 'https://github.com',
    'YouTube': 'https://youtube.com',
    'Discord': 'https://discord.com',
    'OpenAI': 'https://chatgpt.com/',
    'Spotify': 'https://open.spotify.com',
    'Proton': 'https://mail.proton.me/u/1/inbox',
    'Pinterest': 'https://www.pinterest.co.uk/',
    'Reddit': 'https://www.reddit.com',
    'Twitter': 'https://twitter.com',
    'Facebook': 'https://www.facebook.com',
    'Instagram': 'https://www.instagram.com',
    'LinkedIn': 'https://www.linkedin.com',
    'Twitch': 'https://www.twitch.tv',
    'Netflix': 'https://www.netflix.com',
    'Amazon': 'https://www.amazon.com',
    'Wikipedia': 'https://www.wikipedia.org',
    'Stack Overflow': 'https://stackoverflow.com',
    'Medium': 'https://medium.com',
    'WhatsApp': 'https://www.whatsapp.com',
    'Tumblr': 'https://www.tumblr.com',
    'SoundCloud': 'https://soundcloud.com',
    'Vimeo': 'https://vimeo.com',
    'Dropbox': 'https://www.dropbox.com',
    'GitLab': 'https://gitlab.com',
    'Bitbucket': 'https://bitbucket.org',
    'Khan Academy': 'https://www.khanacademy.org',
    'Coursera': 'https://www.coursera.org',
    'Udemy': 'https://www.udemy.com',
    'HackerRank': 'https://www.hackerrank.com',
    'CodePen': 'https://codepen.io',
    'Dribbble': 'https://dribbble.com',
    'Behance': 'https://www.behance.net'
};

export function Home() {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);

    const names = queryParams.get('names') ? queryParams.get('names').split(',') : [];

    return (
        <>
            <div className="iconWrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 410 512" className="icon">
                    <path d="M223.5 32C100 32 0 132.3 0 256s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
                </svg>
            </div>
            <div id="navbar">
                <h2>
                    {names.filter(e => siteDictionary[e]).map((link) => (
                        <a href={siteDictionary[link]} className="navitem">{link}</a>
                    ))}
                </h2>
            </div>
        </>
    );
}
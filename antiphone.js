console.log(navigator.platform); // Outputs the platform to the console for debugging.

if (!/(Win|Mac|Linux)/i.test(navigator.platform) && !window.location.href.includes('nophone.html')) {
    console.log('Redirecting to nophone.html');
    window.location.href = 'nophone.html';
} else {
    console.log('No redirection necessary.');
}

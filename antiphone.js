const isMobile = navigator.userAgentData.mobile; //resolves true/false
if(isMobile)
{
    console.log("device is mobile");
    window.location.href = '/nophone.html'
}
else
{
    console.log("device isnt mobile");
}
const isMobile = navigator.userAgentData.mobile; //resolves true/false
console.log(isMobile);
if(isMobile)
 {
    window.location.href = '/nophone.html'
}
else
{
    console.log("device isnt mobile");
}
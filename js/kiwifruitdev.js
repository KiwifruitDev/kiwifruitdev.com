const mysteryText = [
    "IMG ****",
    "MVI ****",
    "MOV ****",
    "100 ****",
    "SAM ****",
    "DSC ****",
    "SDV ****",
    "DSCF****",
    "DSCN****",
    "PICT****",
    "MAQ0****",
    "FILE****",
    "GOPR****",
    "GP01****",
    "GX01****",
    "DJI****",
    "WA0***",
    "P10*****",
    "MOL0**",
    "VTS *** 1",
    "VTS 01 ***"
]
const mysteryPrefix = "https://www.youtube.com/results?search_query=";
let isDisabled = false;

const gifMapper = {
    "firefox4.png": "https://88x31.nl/gifs/firefox4.gif",
    "firefox4.gif": "img/88x31/firefox4.png",
    "mysterysite.png": "https://88x31.nl/gifs/mysterysite.gif",
    "mysterysite.gif": "img/88x31/mysterysite.png",
    "steam.png": "https://tripixel.gay/steam%20button.gif",
    "steam%20button.gif": "img/88x31/steam.png",
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mystery-site').addEventListener('click', function(event) {
        const randomIndex = Math.floor(Math.random() * mysteryText.length);
        const mysteryFile = mysteryText[randomIndex];
        const mysteryFileName = mysteryFile.replace(/\*/g, () => Math.floor(Math.random() * 10));
        const mysteryUrl = mysteryPrefix + encodeURIComponent(mysteryFileName);
        window.open(mysteryUrl, '_blank');
        event.preventDefault();
    });
    const disableMotionLinks = document.querySelectorAll('a#motion-disabler');
    const subpages = document.querySelectorAll('#subpage');
    const giftoggles = document.querySelectorAll('#giftoggle');
    const hash = window.location.hash;
    if (hash === '#disable-motion') {
        console.log('Motion is disabled');
        isDisabled = true;
        const image = document.getElementById('motion-disabler-image');
        image.src = 'img/switchon.png';
        const background = document.getElementById('background');
        background.className = 'background';
        for (const link of disableMotionLinks) {
            link.href = '#untagged';
        }
        for (const link of subpages) {
            link.href = link.href.replace('#', '#disable-motion');
        }
        for (const link of giftoggles) {
            const src = link.src.split('/').pop();
            if (gifMapper[src]) {
                link.src = gifMapper[src];
            }
        }
    }
    disableMotionLinks.forEach(link => {
        link.href = isDisabled ? '#disable-motion' : '#';
        link.addEventListener('click', function(event) {
            isDisabled = !isDisabled;
            const image = document.getElementById('motion-disabler-image');
            image.src = isDisabled ? 'img/switchon.png' : 'img/switchoff.png';
            const background = document.getElementById('background');
            background.className = isDisabled ? 'background' : 'background motion-enabled';
            // set # to #disable-motion
            for (const link of disableMotionLinks) {
                link.href = isDisabled ? '#disable-motion' : '#untagged';
            }
            for (const link of subpages) {
                link.href = isDisabled ? link.href.replace('#', '#disable-motion') : link.href.replace('#disable-motion', '#');
            }
            for (const link of giftoggles) {
                const src = link.src.split('/').pop();
                if (gifMapper[src]) {
                    link.src = gifMapper[src];
                }
            }
        });
    });
});

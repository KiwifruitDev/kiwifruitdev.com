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

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mystery-site').addEventListener('click', function(event) {
        const randomIndex = Math.floor(Math.random() * mysteryText.length);
        const mysteryFile = mysteryText[randomIndex];
        const mysteryFileName = mysteryFile.replace(/\*/g, () => Math.floor(Math.random() * 10));
        const mysteryUrl = mysteryPrefix + encodeURIComponent(mysteryFileName);
        window.open(mysteryUrl, '_blank');
        event.preventDefault();
    });
});

async function shareCanvas() {
    const canvasElement = document.getElementById('myCanvas');
    const dataUrl = canvasElement.toDataURL();
    console.log(dataUrl)
    const blob = await (await fetch(dataUrl)).blob();
    const filesArray = [
        new File(
        [blob],
        'animation.png',
        {
            type: blob.type,
            lastModified: new Date().getTime()
        }
        )
    ];
    const shareData = {
        files: filesArray,
    };
    navigator.share(shareData);
}

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.font="30px Heebo";
ctx.fillText("אבשך",10,50);
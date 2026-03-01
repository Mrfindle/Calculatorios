function calculateLove() {
    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();
    let result = document.getElementById("result");

    if (name1 === "" || name2 === "") {
        result.innerText = "Please enter both names 😅";
        result.style.opacity = 1;
        return;
    }

    // Generate consistent percentage based on names
    let combined = name1 + name2;
    let total = 0;

    for (let i = 0; i < combined.length; i++) {
        total += combined.charCodeAt(i);
    }

    let lovePercent = total % 101; // 0 - 100%

    let message = "";

    if (lovePercent > 80) {
        message = `🔥 ${lovePercent}% – Soulmates alert! 💖`;
    } 
    else if (lovePercent > 50) {
        message = `💞 ${lovePercent}% – Looking good 😉`;
    } 
    else if (lovePercent > 30) {
        message = `🙂 ${lovePercent}% – Needs some effort bro`;
    } 
    else {
        message = `💀 ${lovePercent}% – Friendzone detected`;
    }

    result.style.opacity = 0;

    setTimeout(() => {
        result.innerText = message;
        result.style.opacity = 1;
    }, 200);
}

function openCreator() {
    window.open("https://instagram.com/hello._.siva", "_blank");
}
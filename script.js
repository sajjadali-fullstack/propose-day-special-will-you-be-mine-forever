const romanticLines = [
    "I want to spend all my tomorrows with you... ❤️",
    "Life is better when we are together. ✨",
    "Every heartbeat of mine belongs to you. 💓",
    "Will you give me the honor of being yours? 💍",
    "I promise to love you more with every passing day. 🌹"
];

const noDialogues = [
    "No? Ek bar phir socho... 😉", "Arey, mazaak kar raha tha! ❤️", "Maann bhi jao na? 🥰", "Rommio ko mana karoge? 🥺"
];

const successImages = [
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExODFuYXU2cjVpeGUyZndvaW5hbXJkdHJ1cnRkbjEwNjNiMnNqZXJ6YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5dUllWbKVlaqmMTvHb/giphy.gif",
    "https://media.tenor.com/3G-r0jTZmDkAAAAi/laugh-cute.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHk0d2txdHhtYXo3OTNicjRjbWt4dmwwaXBkYmRwNDh2cm5zaWI5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1wmOyZYoGzz003R03Y/giphy.gif"
];

let currentIndex = 0;
let imgIndex = 0;

// Elements
const textElement = document.getElementById("romanticText");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const successImg = document.getElementById("successImg");

// 1. Text Switcher
setInterval(() => {
    textElement.style.opacity = 0;
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % romanticLines.length;
        textElement.innerText = romanticLines[currentIndex];
        textElement.style.opacity = 1;
    }, 500);
}, 10000);

// 2. Funny No Button
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.querySelector("span").innerText = noDialogues[Math.floor(Math.random() * noDialogues.length)];
});

// 3. Yes Button Click
yesBtn.addEventListener("click", () => {
    document.getElementById("main-card").style.display = "none";
    document.getElementById("success-msg").classList.remove("hidden");
    startBlast();
});

// 4. Success Image Loop
setInterval(() => {
    if (!document.getElementById("success-msg").classList.contains("hidden")) {
        successImg.style.opacity = 0;
        setTimeout(() => {
            imgIndex = (imgIndex + 1) % successImages.length;
            successImg.src = successImages[imgIndex];
            successImg.style.opacity = 1;
        }, 800);
    }
}, 5000);

// 5. WhatsApp Logic
document.getElementById("whatsappBtn").addEventListener("click", () => {
    const msg = encodeURIComponent("Haan ji Rommio! Maine accept kar liya! ❤️💍");
    window.open(`https://api.whatsapp.com/send?text=${msg}`, "_blank");
});

function startBlast() {
    for (let i = 0; i < 50; i++) {
        const p = document.createElement("div");
        p.innerHTML = "❤️";
        p.style.position = "fixed";
        p.style.left = "50vw"; p.style.top = "50vh";
        p.style.fontSize = "24px";
        p.style.transition = "all 2s ease-out";
        document.body.appendChild(p);
        const angle = Math.random() * Math.PI * 2;
        const vel = Math.random() * 300;
        requestAnimationFrame(() => {
            p.style.transform = `translate(${Math.cos(angle)*vel}px, ${Math.sin(angle)*vel}px) scale(0)`;
            p.style.opacity = "0";
        });
        setTimeout(() => p.remove(), 2000);
    }
}
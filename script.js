function showStory(index) {
    const stories = [
        "Trichy, Jan 24, 2025: A digital pulse on Chitchat—Mannu, you rewired my universe.",
        "Hyderabad, April 12, 2025: Systems aligned—our first meet, a cosmic collision.",
        "Beach Eternity: Protocols set—our vows sync with the waves, infinite."
    ];
    document.getElementById("story-text").textContent = stories[index - 1];
}

const baseReasons = [
    "When you smile, it feels like my world clicks into place.",
    "Your voice, even tired, quiets every loud thought in my head.",
    "Even on your hardest days, you still find ways to be kind.",
    "The way you say ‘hmm’ makes me feel heard without explaining.",
    "With you, even silence feels warm.",
    "You don’t realize how naturally lovable you are, and that makes me love you more.",
    "Your care is never loud, but it’s always felt.",
    "One text from you can shift my whole mood.",
    "You let me be me—stupid, chaotic, messy—and you still stay.",
    "With you, I laugh like a kid again.",
    "You don’t pretend. You’re just you, real, raw, and honest.",
    "You make me want to become better, not just for you, but with you.",
    "A meme from you means more than paragraphs from anyone else.",
    "Even your sleepy ‘I’ll sleep now’ texts feel like a kiss.",
    "You’re not just the girl I love—you’re my mirror, my safe space, my rhythm.",
    "When I look at you, I feel something I can’t explain, just home.",
    "Your ‘good mornings’ feel like sun touching my face.",
    "When life tests me, you’re the reason I want to pass every damn exam."
];

function generateReason() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const baseIndex = dayOfYear % baseReasons.length;
    const suffix = ["Muah!", "Forever yours!", "Hey cutie!", "Love ya!", "Always!"][dayOfYear % 5];
    return `${baseReasons[baseIndex]} ${suffix}`;
}

function revealReason() {
    document.getElementById("reason").textContent = generateReason();
}

const startDate = new Date("2025-01-24T00:00:00Z");
const today = new Date();
today.setUTCHours(0, 0, 0, 0);
const daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
document.getElementById("days-together").textContent = daysTogether;

const guy = document.getElementById("animated-guy");
const actionText = guy.querySelector(".action-text");
const actions = [
    "Flying kiss, Mannu! Muah!",
    "Hug protocol initiated! Muah!",
    "Heart signal transmitted! Hey sweetie!",
    "Proposal sequence engaged! Love ya!",
    "Dancing for you, my love! Muah!",
    "Dreaming of you always! Hey cutie!",
    "Sending all my love! Love ya!",
    "You’re my everything, Mannu! Muah!",
    "Kissing the stars for you! Hey sweetie!",
    "Forever yours, my darling! Love ya!"
];

function animateGuy() {
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    actionText.textContent = randomAction;
    guy.style.left = `${Math.random() * 80 + 10}%`;
    guy.style.top = `${Math.random() * 60 + 20}%`;
    guy.style.animation = "guyMove 5s ease-in-out";
    setTimeout(() => guy.style.animation = "", 5000);
}

animateGuy();
setInterval(animateGuy, 10000);

function showDream(element) {
    const detail = element.querySelector(".dream-detail");
    detail.style.display = "block";
}

function hideDream(element) {
    const detail = element.querySelector(".dream-detail");
    detail.style.display = "none";
}

const heartMessages = [
    "You’re my universe, Mannu—every star shines for you.",
    "I’d cross galaxies just to see you smile.",
    "Every beat of my heart whispers your name.",
    "You’re my forever, my always, my everything.",
    "Loving you is my greatest adventure."
];

let messageIndex = 0;
function rotateMessages() {
    document.getElementById("heart-message").textContent = heartMessages[messageIndex];
    messageIndex = (messageIndex + 1) % heartMessages.length;
}

rotateMessages();
setInterval(rotateMessages, 5000);

function revealLetter(index) {
    const letters = [
        "Mannu, You’ve made every day brighter. I’m still in awe of how you make my heart race with just a smile. Love you endlessly.",
        "We’ve built so many memories, and I still get butterflies when I see you. You’re my best friend, my love, my everything. Here’s to forever.",
        "We’ve grown so much, but my love for you is as fierce as day one. You’re my home, my safe space, my joy. I love you more each day.",
        " We’ve lived a lifetime of love, and I’d choose you again in every universe. You’re my eternity, my heart, my soul. Always."
    ];
    document.getElementById(`letter-text-${index}`).textContent = letters[index - 1];
}

function decodeMessage() {
    const decoded = "HEART";
    document.getElementById("decoded-message").textContent = `Decoded: ${decoded} - You have mine forever, Mannu.`;
}
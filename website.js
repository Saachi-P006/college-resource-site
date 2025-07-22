const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "You are stronger than you think.",
    "Dream it. Wish it. Do it.",
    "Push yourself, because no one else is going to do it for you.",
    "Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them.",
    "Don’t stop until you’re proud.",
    "Work hard in silence. Let success make the noise.",
    "Be so good they can’t ignore you.",
    "The goal is to die with memories not dreams.",
    "When the world tells you to shrink, expand.",
    "It always seems impossible until it’s done.",
    "Mistakes are proof that you are trying."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

document.getElementById('learnButton').addEventListener('click', function() {
    document.getElementById('departments').scrollIntoView({ behavior: 'smooth' });
});


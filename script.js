const quotes = [
    "私はその人を常に先生と呼んでいた。（こころ/夏目漱石）",
    "私は、その男の写真を三葉、見たことがある。(人間失格/太宰治)",
    "吾輩は猫である。名前はまだ無い。（吾輩は猫である/夏目漱石）"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.getElementById("quote").textContent = getRandomQuote();

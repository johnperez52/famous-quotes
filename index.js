import fetch from 'node-fetch';

let quotes = ["NO ONE CARED WHO I WAS UNTIL I PUT ON THE MASK.` - Bane", //0
"`You Should Have Gone For The Head.`-Thanos", //1
"`If you’re good at something, never do it for free.`-The Joker"] //2


console.log(Math.floor(Math.random() * 2))

const response = await fetch('https://quotable.io/random');
const data = await response.json();
console.log(data)


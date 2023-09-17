const url = 'http://api.callmebot.com/text.php?source=web&user=@george_hall5123&text=It Worked';

const response = await fetch(url);

const text = await response.text();

console.log(text);
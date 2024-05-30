var body = document.querySelector("body");

var words = document.createElement("div");
words.style.width = "500px";
words.style.height = "500px";
//words.style.background = "red";
words.style.display = 'inline-block';
body.appendChild(words);

var mario = document.createElement("div");
body.appendChild(mario);
mario.style.width = "400px";
mario.style.height = "500px";
//mario.style.background = "blue";
mario.style.display = 'inline-block';

//words div
var title = document.createElement("h1");
title.textContent = ("Homework 01");
title.style.fontSize = "36px";
title.style.fontFamily = "Mulish, sans-serif";
words.appendChild(title);

var firstParagraph = document.createElement("p");
firstParagraph.textContent = ("For this homework, I want you to recreate this HTML page using JavaScript and the DOM API. This means, the HTML should have a blank body and minimal head. Once the page loads, use JavaScript to recreate all the elements from the original page.");
firstParagraph.style.marginBottom = "10px";
firstParagraph.style.fontSize = "24px"; firstParagraph.style.fontFamily = "Mulish, sans-serif";
words.appendChild(firstParagraph);

var secondParagraph = document.createElement("p");
secondParagraph.textContent = ("To make it fun, and maybe a bit tricky, I've added several types of elements. Some elements are pretty simple like these <p> tags. Others are more going to require extra attributes or mixing text nodes with element nodes.");
secondParagraph.style.fontSize = "24px"; secondParagraph.style.fontFamily = "Mulish, sans-serif";
words.appendChild(secondParagraph);

//mario div
var pic = document.createElement("img");;
pic.src = 'mario.webp';
pic.style.width = "300px";

mario.appendChild(pic);

var description = document.createElement("blockquote");
description.textContent = ("Mario says 'Wahoo!' to homework")
description.style.fontSize = "24px"; 
description.style.fontFamily = "Mulish, sans-serif";
//description.style.textAlign = "center"
mario.appendChild(description);

var audio = document.createElement("audio")
audio.src = 'mario.mp3';
audio.controls = 'true';
audio.style.width = '300px'
audio.style.height = '54px'
mario.appendChild(audio);
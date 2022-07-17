window.onload = function() {
    type().then(r => "")
    setInterval(type, 10000);
};

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function type() {
    const title =document.getElementById('typing-title')
    await typeSentence("Software Developer", title);
    await waitForMs(1500);
    await deleteSentence("Software Developer", title, 20);

    await typeSentence("Audio Signal Processing Enthusiast", title);
    await waitForMs(1500);
    await deleteSentence("Audio Signal Processing Enthusiast", title, 12);

    await typeSentence("Engineer", title);
    await waitForMs(1500);
    await deleteSentence("Engineer", title, 20);
}

async function typeSentence(sentence, element, delay = 25) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    element.append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(text, element, ms = 10) {
  const sentence = text;
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(ms);
    letters.pop();
    element.innerText=letters.join("");
  }
}
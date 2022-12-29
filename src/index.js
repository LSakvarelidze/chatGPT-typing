const askTxt = document.querySelector(".askInput");
const askBtn = document.querySelector(".askBtn");
const msg = document.querySelector(".msg");
const msgTxt = document.querySelector(".msgTxt");
const askInput = document.querySelector(".askInput");
const txt = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
placeat, quisquam odio sapiente, architecto hic enim magnam, quibusdam
earum exercitationem repudiandae incidunt voluptatum at ut quod.Lorem
ipsum dolor sit amet,`;

function loader(element) {
  msg.classList.remove("hidden");
  element.textContent = "";
  return new Promise((res, rej) => {
    const loaderInterval = setInterval(() => {
      element.textContent += ".";
      if (element.textContent == "....") {
        clearInterval(loaderInterval);
        res();
      }
    }, 300);
  });
}

function msgTyping(text) {
  msgTxt.textContent = "";
  let index = 0;
  msg.classList.remove("hidden");
  const typingInterval = setInterval(() => {
    if (index < text.length) {
      msgTxt.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
      return;
    }
  }, 20);
}

askBtn.addEventListener("click", () => {
  askInput.value = "";
  loader(msgTxt).then(() => {
    msgTyping(txt);
  });
});

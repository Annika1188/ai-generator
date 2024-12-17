function generateFact(event) {
  event.preventDefault();
  new Typewriter("#answer", {
    strings: "Fun Facts coming....",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let factFormElement = document.querySelector("#fact-generator");
factFormElement.addEventListener("submit", generateFact);

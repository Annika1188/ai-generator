function displayFact(response) {
  new Typewriter("#answer", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateFact(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2t140860597f63afo033b6cda0bf4143";
  let context =
    "You are a fun fact expert. You mission is to generate a 1 line fact, the funnier the better, in basic HTML. Make sure to follow the user instructions.  Sign the fact with 'SheCodes AI' inside a <strong> element at the end ßand NOT at the beginning";
  let prompt = `User instructions: Generate a fun fact about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let answerElement = document.querySelector("#answer");
  answerElement.classList.remove("hidden");
  answerElement.innerHTML = `<div class="generating">⏳ Finding you a fun fact! ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayFact);
}

let factFormElement = document.querySelector("#fact-generator");
factFormElement.addEventListener("submit", generateFact);

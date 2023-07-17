const inputArray = document.querySelectorAll(".input");
const main = document.querySelector("#main");
inputArray.forEach((inputItem) => {
  inputItem.addEventListener("click", () => {
    inputArray.forEach((i) => i.classList.remove("active"));
    inputItem.classList.toggle("active");
  });
});

const resultpage = (feedback) => {
  main.innerHTML = `
    <h1>your feedback is : ${feedback}</h1>
    <button id="back">back</button>
    `;
  const back = document.querySelector("#back");
  back.addEventListener("click", backToNormal);
  document.querySelectorAll(".input").forEach((inputItem) => {
    inputItem.addEventListener("click", () => {
      document.querySelectorAll(".input").forEach((i) => i.classList.remove("active"));
      inputItem.classList.toggle("active");
    });
  });
};

const backToNormal = () => {
  main.innerHTML = `
  <div class="input-container">
  <div class="input">
      <h1>🥰</h1>
      <p class="feedback-detail">Happy!</p>
  </div>
  <div class="input">
      <h1>😒</h1>
      <p class="feedback-detail">bad</p>
  </div>
  <button id="submitBtn">submit</button>
</div>
    `;
    document.querySelectorAll(".input").forEach((inputItem) => {
      inputItem.addEventListener("click", () => {
        document.querySelectorAll(".input").forEach((i) => i.classList.remove("active"));
        inputItem.classList.toggle("active");
      });
    });

  document.querySelector("#submitBtn").addEventListener("click", () => {
    const activeFeedback = document.querySelector(".input.active");
  let selectedFeedback = "";
  if (activeFeedback) {
    selectedFeedback = activeFeedback.querySelector(".feedback-detail").innerText;
  }
  resultpage(selectedFeedback)
  });  
};
const submit = document.querySelector("#submitBtn");

submit.addEventListener("click", () => {
  document.querySelectorAll(".input").forEach((inputItem) => {
    inputItem.addEventListener("click", () => {
      document.querySelectorAll(".input").forEach((i) => i.classList.remove("active"));
      inputItem.classList.toggle("active");
    });
  });
  const activeFeedback = document.querySelector(".input.active");
  let selectedFeedback = "";
  if (activeFeedback) {
    selectedFeedback = activeFeedback.querySelector(".feedback-detail").innerText;
  }
  resultpage(selectedFeedback)
});

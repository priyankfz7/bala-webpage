let inputFields = document.querySelectorAll("form>input,textarea");
console.log(inputFields);
const form = document.querySelector("form");
let submitBtn = document.querySelector("form>button");
form.addEventListener("submit", (e) => handleSubmit(e));

function TogglePop() {
  let popup = document.querySelector(".popup");
  popup.classList.toggle("popup-active");
}

async function handleSubmit(e) {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.innerText = "Wait ...";
  let obj = {};
  inputFields.forEach((e) => {
    obj[e.name] = e.value;
  });
  let res = await fetch("https://impossible-kit-hen.cyclic.app/mailforjob", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  res = await res.json();
  console.log(res);
  const name = document.querySelector(".popup>h3");
  name.innerText = `Thank You ${obj.name}`;
  TogglePop();

  submitBtn.disabled = false;
  submitBtn.innerText = "Submit";
  inputFields.forEach((e) => {
    e.value = "";
  });
}

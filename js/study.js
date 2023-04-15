const content = document.querySelector(".content");
async function getData() {
  let res = await fetch("https://impossible-kit-hen.cyclic.app/pdf/all");
  res = await res.json();
  return res.data;
}
function append(data = []) {
  content.innerHTML = null;
  data.forEach((e) => {
    const div = document.createElement("div");
    div.className = "sm";
    const titleEle = document.createElement("h2");
    titleEle.innerHTML = `<a href=${e.link} target="_blank">${e.title}</a>`;
    const dateEle = document.createElement("p");
    dateEle.innerText = e.date;
    const moreEle = document.createElement("a");
    moreEle.innerText = "read more ➤";
    moreEle.setAttribute("href", e.link);
    moreEle.setAttribute("target", "_blank");
    div.append(titleEle, dateEle, moreEle);
    content.append(div);
  });
}
getData().then((res) => append(res));

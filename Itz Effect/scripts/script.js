const btn = document.getElementById("btn");

let counter;

btn.addEventListener("mouseenter", function () {
  counter = setTimeout(function () {
    let ele = document.createElement("span");
    ele.textContent = btn.dataset.hoverText;
    ele.className = "title";

    btn.appendChild(ele);
  }, 1500);
});

btn.addEventListener("mouseleave", function () {
  clearTimeout(counter);

  let title = document.getElementsByClassName("title")[0];

  if (typeof title !== "undefined") {
    title.remove();
  }
});

btn.addEventListener("click", function () {
  const iCounter = setInterval(function () {
    let top = Math.trunc(Math.random() * window.innerHeight);
    let left = Math.trunc(Math.random() * window.innerWidth);
    let img = document.createElement("img");
    img.className = "itz";
    img.src = "https://is.gd/wuco1E";

    img.style.top = top + "px";
    img.style.left = left + "px";

    document.body.appendChild(img);

    setTimeout(function () {
      img.remove();
    }, 1000);
  }, 10);

  setTimeout(() => clearInterval(iCounter), 1000 * 15);
});

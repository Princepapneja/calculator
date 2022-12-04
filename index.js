let str = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e.target.innerText)
    if (e.target.innerText == "=") {
      str = eval(str);
      document.querySelector(".display").value = str;
    } else if (e.target.innerText == "AC") {
      str = "";
      document.querySelector(".display").value = str;
    } else if (e.target.innerText == "%") {
      str = eval(str) * (1 / 100);
      document.querySelector(".display").value = str;
    } else if (e.target.innerText == "c") {
      str = str.slice(0, -1);
      document.querySelector(".display").value = str;
    } else if (e.target.innerText == "+/-") {
      str =-str
      document.querySelector(".display").value = str;
    } else {
      str += e.target.innerText;
      document.querySelector(".display").value = str;
    }
    // console.log(str)
  });
});

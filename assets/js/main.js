const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");

const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");

const period = document.getElementById("period");
const period2 = document.getElementById("period2");

monthlyBtn.onclick = function(){

monthlyBtn.classList.add("active");
yearlyBtn.classList.remove("active");

price1.innerText = "0";
price2.innerText = "99";

period.innerText="/ month";
period2.innerText="/ month";

}

yearlyBtn.onclick = function(){

yearlyBtn.classList.add("active");
monthlyBtn.classList.remove("active");

price1.innerText = "0";
price2.innerText = "999";

period.innerText="/ year";
period2.innerText="/ year";

}
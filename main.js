// Load saved theme
let theme = localStorage.getItem("theme");
setTheme(theme === "1" ? "dark" : "light");

// WhatsApp Message
function sendWhatsApp(message) {
  const phone = "918910600039";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

// Send Email
function sendEmail() {
  const email = "sudip251992@gmail.com";
  const subject = "Query";
  const body = "Write your query...";
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Theme Toggle
function setTheme(mode) {
  const dark = (mode === "dark");
  document.body.style.background = dark ? "black" : "white";
  document.body.style.color = dark ? "white" : "black";
  
  const nav = document.querySelector("nav");
  nav.style.background = dark ? "black" : "white";
  nav.style.color = dark ? "royalblue" : "blue";
  nav.style.borderColor = dark ? "black" : "#f0f0f0";
  
  document.querySelector("header").style.background = dark ? "black" : "white";
  document.querySelector("header a").style.color = dark ? "white" : "royalblue";
  
  document.querySelectorAll("#txt1, #txt2, #txt3, #txt4").forEach(el => {
    el.style.color = dark ? "white" : "black";
  });
  
  document.querySelector("#o1").style.display = dark ? "inline-flex" : "none";
  document.querySelector("#o").style.display = dark ? "none" : "inline-flex";
  
  document.querySelectorAll(".i1, .i2").forEach(el => {
    el.style.color = dark ? "white" : "royalblue";
  });
  
  localStorage.setItem("theme", dark ? "1" : "0");
}

// Toggle function for button click
function toggleTheme() {
  const current = localStorage.getItem("theme") === "1" ? "light" : "dark";
  setTheme(current);
}

// src/index.js

console.log("✅ Custom H5P JS Loaded");

document.addEventListener("DOMContentLoaded", () => {
  const msg = document.createElement("div");
  msg.textContent = "Hello from bundle.js!";
  msg.style.cssText = "position:fixed;top:10px;left:10px;background:#eef;padding:10px;border:1px solid #ccc;";
  document.body.appendChild(msg);
});

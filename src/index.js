console.log("✅ Custom H5P JS Loaded");

document.addEventListener("DOMContentLoaded", () => {
  function waitForH5P() {
    if (typeof H5PStandalone !== 'undefined') {
      const container = document.getElementById("h5p-container");
      new H5PStandalone.H5P(container, "h5p");
    } else {
      setTimeout(waitForH5P, 100);
    }
  }

  waitForH5P();

  const msg = document.createElement("div");
  msg.textContent = "Hello from bundle.js!";
  msg.style.cssText = "position:fixed;top:10px;left:10px;background:#eef;padding:10px;border:1px solid #ccc;";
  document.body.appendChild(msg);
});

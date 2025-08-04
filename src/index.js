console.log("✅ Custom H5P JS Loaded");

document.addEventListener("DOMContentLoaded", () => {
  function waitForH5P() {
    if (typeof H5PStandalone !== "undefined") {
      const container = document.getElementById("h5p-container");
      new H5PStandalone.H5P(container, "workspace");  // ✅ Updated path
    } else {
      setTimeout(waitForH5P, 100);
    }
  }

  waitForH5P();
});

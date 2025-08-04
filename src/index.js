console.log("✅ Custom H5P JS Rebuilt");

document.addEventListener("DOMContentLoaded", () => {
  function waitForH5P() {
    if (typeof H5PStandalone !== "undefined") {
      const container = document.getElementById("h5p-container");
      new H5PStandalone.H5P(container, "h5p");
    } else {
      setTimeout(waitForH5P, 100);
    }
  }

  waitForH5P();
});

(function() {
  console.log("✅ Custom H5P JS Loaded");

  document.addEventListener("DOMContentLoaded", function () {
    function waitForH5P() {
      var container = document.getElementById("h5p-container");

      if (typeof H5PStandalone === "function") {
        new H5PStandalone(container, "workspace");
      } else if (
        typeof H5PStandalone === "object" &&
        typeof H5PStandalone.default === "function"
      ) {
        new H5PStandalone.default(container, "workspace");
      } else if (
        typeof H5PStandalone === "object" &&
        typeof H5PStandalone.H5P === "function"
      ) {
        new H5PStandalone.H5P(container, "workspace");
      } else {
        setTimeout(waitForH5P, 100);
      }
    }

    waitForH5P();
  });
})();
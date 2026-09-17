// Reveal the compact sticky nav once the masthead has scrolled out of view.
(function () {
  var sticky = document.getElementById("stickynav");
  var masthead = document.querySelector(".masthead");
  if (!sticky || !masthead) return;

  function onScroll() {
    var trigger = masthead.offsetHeight - 60;
    if (window.scrollY > trigger) {
      sticky.classList.add("is-visible");
    } else {
      sticky.classList.remove("is-visible");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* Etica_Lab prototype — scroll reveals, parallax, nav, counters, form. Vanilla JS. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- Background images for photo bands --- */
  document.querySelectorAll("[data-parallax-bg]").forEach(function (el) {
    el.style.backgroundImage = "url('" + el.getAttribute("data-parallax-bg") + "')";
  });

  /* --- Scroll reveal --- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* --- Nav state, progress bar, header parallax --- */
  var nav = document.getElementById("nav");
  var progress = document.getElementById("progress");
  var parallax = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
  var ticking = false;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle("nav--solid", y > 80);
    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
    if (!reduce && y < window.innerHeight * 1.2) {
      parallax.forEach(function (el) {
        var f = parseFloat(el.getAttribute("data-parallax")) || 0.25;
        el.style.transform = "translateY(" + (y * f) + "px)";
      });
    }
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* --- Animated counters (real values are in the HTML; we only animate them) --- */
  var counters = document.querySelectorAll("[data-count]");
  function runCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    if (isNaN(target)) return;
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && !reduce) {
    counters.forEach(function (el) { el.textContent = "0"; });
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { runCount(e.target); co.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* --- Mobile menu --- */
  var burger = document.getElementById("burger");
  var links = document.getElementById("navlinks");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* --- Contact form: submit to Netlify Forms without leaving the page --- */
  document.querySelectorAll("form[data-ajax]").forEach(function (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var btn = form.querySelector("button[type=submit]");
      var msg = form.querySelector(".pform__msg");
      var label = btn.textContent;
      btn.textContent = btn.getAttribute("data-sending") || label;
      btn.disabled = true;
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      }).then(function (res) {
        if (!res.ok) throw new Error(res.status);
        form.classList.add("is-sent");
        msg.textContent = msg.getAttribute("data-ok");
        btn.textContent = label;
      }).catch(function () {
        msg.textContent = msg.getAttribute("data-err");
        btn.textContent = label;
        btn.disabled = false;
      });
    });
  });
})();

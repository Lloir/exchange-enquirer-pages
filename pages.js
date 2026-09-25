// Shows one page of the issue at a time. Without JavaScript every page is
// shown in order and the tabs work as plain anchor links.
(function () {
  var pages = Array.prototype.slice.call(document.querySelectorAll(".page"));
  var tabs = Array.prototype.slice.call(document.querySelectorAll("nav.pages a"));
  var nav = document.querySelector("nav.pages");
  if (pages.length < 2) return;

  function current() {
    var m = /^#p(\d+)$/.exec(window.location.hash);
    var i = m ? parseInt(m[1], 10) : 0;
    return i >= 0 && i < pages.length ? i : 0;
  }

  function show(i, scroll) {
    pages.forEach(function (page, n) { page.hidden = n !== i; });
    tabs.forEach(function (tab, n) {
      if (n === i) tab.setAttribute("aria-current", "page");
      else tab.removeAttribute("aria-current");
    });
    if (scroll && nav) nav.scrollIntoView({ block: "start" });
  }

  window.addEventListener("hashchange", function () { show(current(), true); });
  show(current(), false);
})();

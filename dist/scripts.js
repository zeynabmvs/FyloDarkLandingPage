"use strict";
(() => {
  // assets/js/main.js
  var body = document.querySelector("body");
  function toggleClass(element, className) {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }
  var toggleElementDisplay = function(hiddenElement, transitionDuration) {
    if (getComputedStyle(hiddenElement).display === "none") {
      hiddenElement.style.display = "block";
      setTimeout(() => {
        hiddenElement.style.opacity = "1";
      }, 100);
    } else {
      hiddenElement.style.opacity = "0";
      setTimeout(() => {
        hiddenElement.style.display = "none";
      }, transitionDuration);
    }
  };
  var header = document.querySelector(".header");
  var onScroll = () => {
    var scrolledPage = Math.round(window.pageYOffset);
    if (scrolledPage > 60) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };
  document.addEventListener("scroll", onScroll);
  var darkMode = localStorage.getItem("darkMode");
  var htmlElement = document.querySelector("html");
  var darkModeToggles = document.querySelectorAll(".dark-mode-toggle");
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    preferredTheme = "dark";
  } else {
    preferredTheme = "light";
  }
  var preferredTheme;
  var enableDarkMode = () => {
    htmlElement.classList.add("dark");
    localStorage.setItem("darkMode", "enabled");
  };
  var disableDarkMode = () => {
    htmlElement.classList.remove("dark");
    localStorage.setItem("darkMode", null);
  };
  if (darkMode === "enabled") {
    enableDarkMode();
  }
  darkModeToggles.forEach((darkModeToggle) => {
    darkModeToggle.addEventListener("click", () => {
      darkMode = localStorage.getItem("darkMode");
      if (darkMode !== "enabled") {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
  });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    event.matches ? enableDarkMode() : disableDarkMode();
  });
  var searchButtons = document.querySelectorAll(".search-form-toggle");
  searchButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const searchBox = document.getElementById(btn.getAttribute("data-target-box"));
      toggleElementDisplay(searchBox, 300);
    });
  });
  var megaButton = document.querySelector("#mega-menu-toggle");
  var megaMenu = document.querySelector("#mega-menu");
  megaButton.addEventListener("click", () => {
    toggleElementDisplay(megaMenu, 300);
  });
  var openButtons = document.querySelectorAll(".open-modal-btn");
  var closeButtons = document.querySelectorAll(".close-modal");
  var pauseVideoBtns = document.querySelectorAll(".pauseVideoJs");
  function openModal(event) {
    const modalId = event.target.dataset.modalTarget;
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
  openButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      closeModal(button.closest(".modal").id);
    });
  });
  pauseVideoBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
      const videoId = event.target.dataset.videoTarget;
      const vid = document.getElementById(videoId);
      vid.pause();
    });
  });
  var drawer = document.querySelector(".drawer");
  var headerMobile = document.querySelector(".header-mobile");
  var drawerCloseBtn = document.querySelector(".drawer-close-btn");
  var closeSide = document.querySelector("#drawer-close-side");
  var drawerMenueHasChild = drawer.querySelectorAll(".menu-item-has-children");
  function openCloseDrawer() {
    toggleClass(headerMobile, "open");
    toggleClass(body, "body-scroll-lock");
    toggleClass(closeSide, "drawer-close-side-show");
  }
  document.querySelector("#jsbtnHamburgur").addEventListener("click", function() {
    openCloseDrawer();
  });
  drawerCloseBtn.addEventListener("click", function() {
    openCloseDrawer();
  });
  closeSide.addEventListener("click", function() {
    openCloseDrawer();
  });
  if (drawerMenueHasChild !== null) {
    drawerMenueHasChild.forEach(function(item) {
      const firstLink = item.querySelector("a:first-child");
      firstLink.addEventListener("click", function(event) {
        event.preventDefault();
        item.classList.toggle("opened");
      });
    });
  }
  var listTitles = document.querySelectorAll(".drawer .list-title");
  listTitles.forEach((title) => {
    title.addEventListener("click", () => {
      const subMenu = title.nextElementSibling;
      if (subMenu.style.display === "none") {
        subMenu.style.display = "block";
      } else {
        subMenu.style.display = "none";
      }
    });
  });
  function copyToClipboardFun() {
    var copyText = document.getElementById("copyToClipboard");
    if (copyText) {
      console.log(copyText);
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      window.navigator.clipboard.writeText(copyText.value);
      showToast("\u0631\u0645\u0632 \u06A9\u067E\u06CC \u0634\u062F", "");
    }
  }
  var copyButton = document.querySelector(".copyToClipboardBtn");
  if (copyButton) {
    copyButton.addEventListener("click", copyToClipboardFun);
  }
})();

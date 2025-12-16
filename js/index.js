//button-darkMood
var themeToggleBtn = document.getElementById("theme-toggle-button");
var html = document.documentElement;

themeToggleBtn.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    themeToggleBtn.setAttribute("aria-pressed", "false");
  } else {
    html.classList.add("dark");
    themeToggleBtn.setAttribute("aria-pressed", "true");
  }
});

//nav scrollPosition
var sections = document.querySelectorAll("section");
var links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
  let current = "";

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });

  links.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


//slide-one === navTabs
var filterButtons = document.querySelectorAll(".portfolio-filter");
var portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    var filter = button.getAttribute("data-filter");

    portfolioItems.forEach(item => {
      if(filter === "all") {
        item.style.display = "block";
      } else {
        if(item.getAttribute("data-category") === filter) {
          item.style.display = "block";
        } else {
          item.style.display = item.getAttribute("data-category") === filter ? "block" : "none";
        }
      }
    });
  });
});

//gearIconBtn
var settingsToggle = document.getElementById("settings-toggle");
var settingsSidebar = document.getElementById("settings-sidebar");
var closeSettings = document.getElementById("close-settings");

settingsToggle.addEventListener("click", () => {
  settingsSidebar.classList.toggle("translate-x-full");

  var isOpen = !settingsSidebar.classList.contains("translate-x-full");
  settingsToggle.setAttribute("aria-expanded", isOpen);
  settingsSidebar.setAttribute("aria-hidden", !isOpen);
});

closeSettings.addEventListener("click", () => {
  settingsSidebar.classList.add("translate-x-full");
  settingsToggle.setAttribute("aria-expanded", "false");
  settingsSidebar.setAttribute("aria-hidden", "true");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollToTopBtn.classList.remove("opacity-0", "invisible");
  } else {
    scrollToTopBtn.classList.add("opacity-0", "invisible");
  }
});

//roctIconBtn
document.addEventListener("DOMContentLoaded", () => {
  var scrollToTopBtn = document.getElementById("scroll-to-top");

  window.addEventListener("scroll", () => {
    scrollToTopBtn.classList.toggle(
      "opacity-0",
      window.scrollY < 300
    );
    scrollToTopBtn.classList.toggle(
      "invisible",
      window.scrollY < 300
    );
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

//refreshBodyBtn
var fontButtons = document.querySelectorAll(".font-option");
fontButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    var selectedFont = btn.dataset.font;
    document.body.style.fontFamily = selectedFont;
    fontButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});


var resetButton = document.getElementById("reset-settings");

var defaultFont = "tajawal";
var defaultColor = "";

resetButton.addEventListener("click", () => {
  document.body.style.fontFamily = defaultFont;
  document.body.style.color = defaultColor;

  document.querySelectorAll("span,button, [data-icon=code]").forEach(el => {
    el.style.color = defaultColor;
  });
 document.querySelectorAll(".one,.two").forEach(el => {
    el.style.background = defaultColor;
  });
scrollToTopBtn.style.background = defaultColor;
  document.querySelectorAll(".font-option").forEach(btn => {
    if (btn.dataset.font === defaultFont) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

});

//colorsBodyBtn
var themeColors = [
  { name: "violet", value: "#8b5cf6" },
  { name: "secondary", value: "#f43f5e" },
  { name: "accent", value: "#10b981" },
  { name: "pink", value: "#ec4899" },
  { name: "orange", value: "#f97316" },
  { name: "cyan", value: "#06b6d4" },
];

var colorsGrid = document.getElementById("theme-colors-grid");
var scrollToTopBtn = document.getElementById("scroll-to-top");

themeColors.forEach(color => {
  var btn = document.createElement("button");
  btn.style.backgroundColor = color.value;
  btn.className =
    "w-10 h-10 rounded-full border-2 border-slate-200 dark:border-slate-700 transition-all hover:scale-110";
  btn.title = color.name;

  btn.addEventListener("click", () => {
    document.querySelectorAll(" span,[data-icon=code]").forEach(el => {
      el.style.color = color.value;
    });
    scrollToTopBtn.style.background = color.value;
  document.querySelector(".one,button").style.background = color.value;
  document.querySelectorAll(".two").forEach(el => {
  el.style.background = color.value;
});
    colorsGrid.querySelectorAll("button").forEach(b => b.classList.remove("border-primary"));
    btn.classList.add("border-primary");
  });

  
  colorsGrid.appendChild(btn);
});

//slideTwo Have A Problem
var carousel = document.getElementById("testimonials-carousel");
var nextBtn = document.getElementById("next-testimonial");
var prevBtn = document.getElementById("prev-testimonial");
var cards = document.querySelectorAll(".testimonial-card");
var indicators = document.querySelectorAll(".carousel-indicator");

var totalCards = cards.length;
var visibleCards = 3;
let currentIndex = 0;

function updateCarousel() {
  var cardWidth = cards[0].getBoundingClientRect().width;
  carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  updateIndicators();
}

function updateIndicators() {
  indicators.forEach((btn, i) => {
    if (i === currentIndex) {
      btn.classList.add("bg-accent");
      btn.setAttribute("aria-selected", "true");
    } else {
      btn.classList.remove("bg-accent");
      btn.setAttribute("aria-selected", "false");
    }
  });
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

indicators.forEach((btn) => {
  btn.addEventListener("click", () => {
    var index = parseInt(btn.getAttribute("data-index"));
    currentIndex = index;
    updateCarousel();
  });
});

updateCarousel();

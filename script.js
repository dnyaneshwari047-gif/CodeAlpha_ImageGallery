const items = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const closeBtn = document.querySelector(".close");

let currentIndex = 0;
let visibleItems = [...items];

// Open lightbox
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = item.src;
    currentIndex = visibleItems.indexOf(item);
  });
});

// Close
closeBtn.onclick = () => lightbox.style.display = "none";

// Next
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % visibleItems.length;
  lightboxImg.src = visibleItems[currentIndex].src;
};

// Previous
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
  lightboxImg.src = visibleItems[currentIndex].src;
};

// Filter
const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    visibleItems = [];

    items.forEach(item => {
      if (filter === "all" || item.dataset.category === filter) {
        item.style.display = "block";
        visibleItems.push(item);
      } else {
        item.style.display = "none";
      }
    });

  });
});
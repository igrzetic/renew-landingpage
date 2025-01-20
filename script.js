// Smooth scrolling for navbar links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  });
});

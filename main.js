document.addEventListener("DOMContentLoaded", function () {
  // Cart counter
  let cartItems = 0;
  const cartButtons = document.querySelectorAll(".food-card button");
  const cartCounter = document.querySelector("header button span");

  cartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      cartItems++;
      cartCounter.style.color = "orange";
      cartCounter.textContent = `Cart (${cartItems})`;

      // Animation effect
      this.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>';
      this.classList.remove("bg-orange-600");
      this.classList.add("bg-green-500");

      setTimeout(() => {
        this.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" /></svg>';
        this.classList.remove("bg-green-500");
        this.classList.add("bg-orange-600");
      }, 2000);
    });
  });


  // Category scroll buttons
  const categoryScrollLeft = document.querySelector(".category-scroll-left");
  const categoryScrollRight = document.querySelector(".category-scroll-right");
  const categories = document.querySelector(".categories");

  if (categoryScrollLeft && categoryScrollRight && categories) {
    categoryScrollRight.addEventListener("click", function () {
      categories.scrollBy({ left: 200, behavior: "smooth" });
    });

    categoryScrollLeft.addEventListener("click", function () {
      categories.scrollBy({ left: -200, behavior: "smooth" });
    });
  }
});

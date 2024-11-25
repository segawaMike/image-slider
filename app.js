let scrollContainer = document.querySelector(".gallery");  // Corrected class selector
let backButton = document.getElementById("backBtn");
let nextButton = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;  // Keep this behavior
    scrollContainer.style.scrollBehavior = "auto";  // Set scroll behavior using .style
});

backButton.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";  // Smooth scrolling
    scrollContainer.scrollLeft -= 900;  // Scroll left on back button
});

nextButton.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";  // Smooth scrolling
    scrollContainer.scrollLeft += 900;  // Scroll right on next button
});

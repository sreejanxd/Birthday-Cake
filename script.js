document.addEventListener("DOMContentLoaded", () => {
    const confettiColors = ["#ff0", "#f0f", "#0ff", "#ff4500", "#32cd32"];
    const container = document.body;

    // Generate confetti on page load
    for (let i = 0; i < 100; i++) {
        createConfetti(container, confettiColors);
    }

    // Adjust confetti positions when window is resized
    window.addEventListener("resize", () => {
        document.querySelectorAll(".confetti").forEach(confetti => {
            confetti.style.left = Math.random() * window.innerWidth + "px";
        });
    });

    // Add a burst of confetti on cake click
    const cake = document.querySelector(".cake");
    if (cake) {
        cake.addEventListener("click", () => {
            for (let i = 0; i < 50; i++) {
                createConfetti(container, confettiColors, 2); // Quick burst effect
            }
        });
    }
});

/**
 * Creates a confetti element with random properties and adds it to the container.
 * Automatically removes the confetti when the animation ends.
 * 
 * @param {HTMLElement} container - The container to add the confetti to.
 * @param {string[]} colors - Array of color options for the confetti.
 * @param {number} [fixedDuration] - Optional fixed animation duration for confetti.
 */
function createConfetti(container, colors, fixedDuration) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.setProperty("--color", colors[Math.floor(Math.random() * colors.length)]);
    confetti.style.animationDelay = Math.random() * 3 + "s";
    confetti.style.animationDuration = (fixedDuration || 3 + Math.random() * 4) + "s";

    container.appendChild(confetti);

    confetti.addEventListener("animationend", () => {
        if (confetti.parentNode) {
            container.removeChild(confetti);
        }
    });
}

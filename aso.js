// JavaScript for toggling visibility of sections (Mizu Template)
function toggleMizuVisibility(element, className) {
    // Find the closest container element that contains all relevant parts
    const container = element.closest('.mizu-post-container');
    if (!container) return;

    // Find the relevant section within the correct post and toggle its visibility
    const section = container.querySelector(`.${className}`);
    if (section) {
        section.classList.toggle('mizu-content-hidden');
        section.classList.toggle('mizu-content-visible');
    }
}

// JavaScript for updating the Mizu resource bars dynamically
document.addEventListener("DOMContentLoaded", () => {
    console.log("Mizu JS Loaded");

    // Update HP bars
    document.querySelectorAll(".mizu-hp-bar-container").forEach(container => {
        const current = parseInt(container.getAttribute("data-current"), 10);
        const max = parseInt(container.getAttribute("data-max"), 10);
        const fill = document.createElement('div');
        fill.classList.add('mizu-hp-bar-fill');
        fill.style.width = `${(current / max) * 100}%`;
        container.appendChild(fill);
    });

    // Update IP bars
    document.querySelectorAll(".mizu-resource-bar-wrapper").forEach(wrapper => {
        const current = parseInt(wrapper.getAttribute("data-current"), 10);
        const max = parseInt(wrapper.getAttribute("data-max"), 10);
        wrapper.innerHTML = ""; // Clear existing units

        for (let i = 0; i < max; i++) {
            const unit = document.createElement('div');
            unit.classList.add('mizu-resource-unit');
            if (i >= current) {
                unit.classList.add('unfilled'); // Mark as unfilled
            }
            wrapper.appendChild(unit);
        }
    });
});

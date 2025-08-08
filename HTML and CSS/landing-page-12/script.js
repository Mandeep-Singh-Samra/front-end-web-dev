
function addHoverScaleEffect(selector) {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el) => {
    el.addEventListener("mouseover", () => {
      el.style.transform = "scale(1.1)";
    });

    el.addEventListener("mouseout", () => {
      el.style.transform = "scale(1)";
    });
  });
}

// Apply to all buttons and all feature icons
addHoverScaleEffect("button");
addHoverScaleEffect(".feature-icon");
addHoverScaleEffect("a");
addHoverScaleEffect(".btn-solid");


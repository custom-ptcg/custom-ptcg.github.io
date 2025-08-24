function replaceIconsInContainer(container) {
  const energyMap = {
    "[C]": "cards/images/energy-colorless.png",
    "[R]": "cards/images/energy-fire.png",
    "[W]": "cards/images/energy-water.png",
    "[G]": "cards/images/energy-grass.png",
    "[L]": "cards/images/energy-lightning.png",
    "[P]": "cards/images/energy-psychic.png",
    "[F]": "cards/images/energy-fighting.png",
    "[D]": "cards/images/energy-darkness.png",
    "[M]": "cards/images/energy-metal.png",
    "[N]": "cards/images/energy-dragon.png",
    "[Y]": "cards/images/energy-fairy.png"
  };

  container.querySelectorAll("*").forEach(el => {
    if (el.children.length === 0 && el.textContent.match(/\[[A-Z]\]/g)) {
      el.innerHTML = el.textContent.replace(/\[[A-Z]\]/g, match => {
        return energyMap[match] ? `<img src="${energyMap[match]}" alt="${match}" class="energy-icon">` : match;
      });
    }
  });
}


function replaceEnergySymbols(text) {
  return text.replace(/\[[A-Z]\]/g, match => {
    const icon = energyMap[match];
    if (icon) {
      return `<img src="${icon}" alt="${match}" class="energy-icon">`;
    }
    return match;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".car

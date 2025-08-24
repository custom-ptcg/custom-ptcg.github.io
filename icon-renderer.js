const energyMap = {
  "[C]": "cards/images/energy-colorless.png",
  "[R]": "cards/images/energy/energy-fire.png",
  "[W]": "cards/images/energy/energy-water.png",
  "[G]": "cards/images/energy/energy-grass.png",
  "[L]": "cards/images/energy/energy-lightning.png",
  "[P]": "cards/images/energy/energy-psychic.png",
  "[F]": "cards/images/energy/energy-fighting.png",
  "[D]": "cards/images/energy/energy-darkness.png",
  "[M]": "cards/images/energy/energy-metal.png",
  "[N]": "cards/images/energy/energy-dragon.png",
  "[Y]": "cards/images/energy/energy-fairy.png"
};

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

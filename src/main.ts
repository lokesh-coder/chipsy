import seedrandom from "seedrandom";

const generateHSLValue = (seed = "") => {
  var rnd = seedrandom(seed);
  const hue = (rnd * 360).toFixed(2);
  const saturation = (rnd * 100).toFixed(2);
  const lightness = "72";
  return [hue, saturation, lightness];
};

const getColor = (seed = "") => {
  const [h, s, l] = generateHSLValue(seed);
  const hslPrimaryColor = `hsla(${h}, ${Number(s) + 20}%, clamp(10%,${
    Number(l) - 40
  }%, 80%),0.7)`;
  const hslSecondaryColor = `hsla(${h}, clamp(40%,${Number(
    s
  )}%,70%), clamp(10%,${l}%,90%),0.5)`;
  return { hslPrimaryColor, hslSecondaryColor };
};

export { getColor };

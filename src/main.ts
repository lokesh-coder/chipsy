import seedrandom from "seedrandom";

const generateHSLValue = (seed = "") => {
  const hueRand = seed ? seedrandom.xor4096(seed + "-hue")() : Math.random();
  const satRand = seed ? seedrandom.xor4096(seed + "-sat")() : Math.random();
  const hue = (hueRand * 360).toFixed(2);
  const saturation = (satRand * 100).toFixed(2);

  const lightness = "72";
  return [hue, saturation, lightness];
};

const getColor = (seed = "") => {
  const [h, s, l] = generateHSLValue(seed);
  const hslPrimaryColor = `hsl(${h}, ${Number(s) + 20}%, clamp(10%,${
    Number(l) - 40
  }%, 80%))`;
  const hslSecondaryColor = `hsl(${h}, clamp(40%,${Number(
    s
  )}%,70%), clamp(10%,${l}%,90%))`;
  return { hslPrimaryColor, hslSecondaryColor };
};

export { getColor };

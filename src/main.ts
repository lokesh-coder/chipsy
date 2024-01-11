import seedrandom from "seedrandom";

const generateHSLValue = (seed = ""): any => {
  const hueRand = seed ? seedrandom.xor4096(seed + "-hue")() : Math.random();
  const satRand = seed ? seedrandom.xor4096(seed + "-sat")() : Math.random();
  const hue = Number((hueRand * 360).toFixed(2));
  const saturation = Number((satRand * 100).toFixed(2));
  const lightness = 72;
  return [hue, saturation, lightness];
};

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

const getColor = (seed = "") => {
  const [h, s, l] = generateHSLValue(seed);
  const primary: number[] = [h, clamp(s, 20, 80), clamp(l, 80, 90)];
  const secondary = [h, clamp(primary[1] + 10, 20, 80), clamp(primary[1] + 10, 22, 31)];
  const tertiary = [h, clamp(primary[1] + 10, 20, 80), 55];
  return { primary, secondary, tertiary };
};

export { getColor };

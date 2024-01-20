import prng from "quick-prng"

const gen = (id = '', seed = '') => seed ? prng(seed + "-" + id) : Math.random();
const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

const generateHSLValue = (seed = ""): any => {
  const [hueRand, satRand, lightRand] = ["hue", "sat", "light"].map((id) => gen(id, seed));
  const hue = Number((hueRand * 360 + 180).toFixed(4));
  const saturation = Number((satRand * 100).toFixed(4));
  const lightness = 71.5 + lightRand;
  return [hue, saturation, lightness];
};


const getLightColor = (h: number, s: number, l: number, level = 0) => {
  l = (25 * level) + l;
  const primary: number[] = [h, clamp(s, 20, 80), clamp(l, 71, 96), 0.5];
  const secondary = [h, clamp(primary[1] + 10, 20, 80), clamp(primary[1] + 10, 22, 31)];
  const tertiary = [h, clamp(primary[1] + 10, 20, 80), 55, 0.3 + 0.5 * level];
  return { primary, secondary, tertiary };
};

const getDarkColor = (h: number, s: number, l: number, level = 0) => {
  l = 5 + (18 * level);
  const primary: number[] = [h, clamp(s, 40, 80), clamp(l, 5, 28), 0.5];
  const secondary = [h, clamp(primary[1] + 10, 30, 80), clamp(primary[1] + 10, 70, 80)];
  const tertiary = [h, clamp(primary[1] + 10, 30, 80), clamp(primary[1] + 10, 55, 60), 0.3 + 0.5 * level];
  return { primary, secondary, tertiary };
};


const getColors = (seed: string = '', theme: 'light' | 'dark' = 'light', options = {
  level: 0
}) => {
  const [h, s, l] = generateHSLValue(seed);
  if (theme === 'dark') return getDarkColor(h, s, l, options.level);
  return getLightColor(h, s, l, options.level);
}

export { getColors };

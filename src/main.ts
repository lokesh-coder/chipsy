import seedrandom from "seedrandom";

const gen = (id = '', seed = '') => seed ? seedrandom.xor4096(seed + "-" + id)() : Math.random();
const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

const generateHSLValue = (seed = "", level = 0): any => {
  const hueRand = gen('hue', seed);
  const satRand = gen('sat', seed);
  const lightRand = gen('light', seed);
  const hue = Number((hueRand * 360).toFixed(4));
  const saturation = Number((satRand * 100).toFixed(4));
  const lightness = (71.5 + (25 * level)) + lightRand;
  return [hue, saturation, lightness];
};


const getLightColor = (h: number, s: number, l: number) => {
  const primary: number[] = [h, clamp(s, 20, 80), clamp(l, 71, 96)];
  const secondary = [h, clamp(primary[1] + 10, 20, 80), clamp(primary[1] + 10, 22, 31)];
  const tertiary = [h, clamp(primary[1] + 10, 20, 80), 55];
  console.log(h, s, l)
  return { primary, secondary, tertiary };
};

const getDarkColor = (h: number, s: number, l: number) => {
  const primary: number[] = [h, clamp(s, 40, 80), clamp(l, 14, 28)];
  const secondary = [h, clamp(primary[1] + 10, 30, 80), clamp(primary[1] + 10, 70, 80)];
  const tertiary = [h, clamp(primary[1] + 10, 30, 80), clamp(primary[1] + 10, 55, 60)];
  return { primary, secondary, tertiary };
};


const getColors = (seed: string = '', theme: 'light' | 'dark' = 'light', options = {
  level: 0
}) => {
  const [h, s, l] = generateHSLValue(seed, options.level);
  if (theme === 'dark') return getDarkColor(h, s, l);
  return getLightColor(h, s, l);

}

export { getColors };

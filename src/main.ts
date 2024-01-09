const generateHSLValue = () => {
  const hue = (Math.random() * 360).toFixed(2);
  const saturation = (Math.random() * 100).toFixed(2);
  const lightness = "72";
  return [hue, saturation, lightness];
};

const getColor = () => {
  const [h, s, l] = generateHSLValue();
  const hslPrimaryColor = `hsla(${h}, ${Number(s) + 20}%, clamp(10%,${Number(l) - 40
    }%, 80%),0.7)`;
  const hslSecondaryColor = `hsla(${h}, clamp(40%,${Number(
    s
  )}%,70%), clamp(10%,${l}%,90%),0.5)`;
  return { hslPrimaryColor, hslSecondaryColor };
};

export { getColor };

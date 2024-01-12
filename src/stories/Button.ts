import { getLightColor, getDarkColor } from "../main";
import "./button.css";

export interface ButtonProps {
  /**
   * Should be random color or psuedo color?
   */
  isRandom?: boolean;

  /**
   * Should use dark backgroud color?
   */
  colorTheme?: string;
  /**
   * Button contents
   */
  label: string;

  cls?: string;
}

/**
 * Primary UI component for user interaction
 */

const hsl = (col: number[]) => `hsl(${col[0]}, ${col[1]}%, ${col[2]}%)`

const setBtnColor = (btn: HTMLButtonElement, colorTheme?: string, label?: string) => {
  const { primary, secondary, tertiary } = colorTheme === "light" ? getLightColor(label) : getDarkColor(label);
  btn.style.backgroundColor = hsl(primary);
  btn.style.color = hsl(secondary);
  btn.style.border = `1px solid ${hsl(tertiary)}`;
};

export const createButton = ({
  isRandom = false,
  cls = "",
  label,
  colorTheme
}: ButtonProps) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.className = `chipsy ${cls}`;
  setBtnColor(btn, colorTheme, label);
  btn.addEventListener("click", () => {
    if (isRandom) setBtnColor(btn, colorTheme);
  });

  return btn;
};

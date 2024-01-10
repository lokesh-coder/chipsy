import { getColor } from "../main";
import "./button.css";

export interface ButtonProps {
  /**
   * Should be random color or psuedo color?
   */
  isRandom?: boolean;

  /**
   * Should use dark backgroud color?
   */
  darkBg?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * How large should the button be?
   */
  variant?: "simple" | "counter" | "hashtag" | "with-icon";
  /**
   * Button contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */

const setBtnColor = (btn: HTMLButtonElement, label: string) => {
  const { hslPrimaryColor, hslSecondaryColor } = getColor(label);
  btn.style.backgroundColor = hslSecondaryColor;
  btn.style.color = hslPrimaryColor;
  btn.style.border = `1px solid ${hslPrimaryColor}`;
};

export const createButton = ({
  isRandom = false,
  // size = 'medium',
  // darkBg = false,
  // variant = 'simple',
  label,
}: ButtonProps) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  setBtnColor(btn, label);
  btn.addEventListener("click", () => {
    if (isRandom) setBtnColor(btn);
  });

  return btn;
};

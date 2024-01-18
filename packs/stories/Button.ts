import "./button.css";
import { generateButtons } from "./utils";

export interface ButtonProps {
  /**
   * Should be random color or psuedo color?
   */
  isRandom: boolean;

  /**
 * Number of buttons
 */
  count: number;

  /**
   * Color depth 0 to 1
   */
  level: number;

  /**
   * Should use dark backgroud color?
   */
  colorTheme: 'light' | 'dark';

  /**
   * Button contents
   */
  label: string;

  /**
  * Button class name
  */
  cls: string;
}

/**
 * Primary UI component for user interaction
 */



export const createButton = (options: ButtonProps) => {
  return generateButtons(options)
};

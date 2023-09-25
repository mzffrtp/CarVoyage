import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  designs?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  icon?: string;
  textStyles?: string;
  isDisabled?: boolean;
}

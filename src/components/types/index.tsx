import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  designs?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  icon?: string;
  textStyles?: string;
  isDisabled?: boolean;
}

export interface Option {
  label: string;
  value: string;
}

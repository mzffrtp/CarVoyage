import { CustomButtonProps } from "../types";

export default function CustomButton({
  title,
  designs,
  btnType,
  handleClick,
  icon,
  textStyles,
  isDisabled,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${designs}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {icon && (
        <div className="relative w-6 h-6 ">
          <img src={icon} />
        </div>
      )}
    </button>
  );
}

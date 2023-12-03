import { Size } from "../types/size.type";
import { ButtonProps, ButtonShape } from "./button.types";
import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};
const shapeClasses: Record<ButtonShape, string> = {
  wide: "btn-wide",
  full: "btn-block",
  default: "",
  square: "btn-square",
};

const Button: React.FC<ButtonProps> = ({
  variant,
  size = "normal",
  isDisabled = false,
  isOutline = false,
  shape = "default",
  isLoading = false,
  loadingType = "spinner",
  loadingText = "درحال ارسال درخواست",
  type = "button",
  isLink = false,
  animatedIcon = false,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    "btn",
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { animatedIcon: animatedIcon },
    { "pointer-events-none opacity-80": isLoading },
    { [`btn-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size },
    { [`${shapeClasses[shape]}`]: shape }
  );
  return (
    <button type={type} disabled={isDisabled} {...rest}>
      {isLoading ? loadingText : children}
    </button>
  );
};

export default Button;

import React from "react";
import classNames from "classnames";
import { AlertProps } from "./alert.types";
import { IconInfo } from "../icons/icons";

export const Alert: React.FC<AlertProps> = ({
	variant,
	className,
	showIcon = true,
	children,
}) => {
	const classes = classNames(
		"alert",
		{ [`alert-${variant}`]: variant },
		className
	);

	return (
		<div className={classes}>
			{showIcon && <IconInfo width={18} />}
			{children}
		</div>
	);
};

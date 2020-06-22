import React from "react";
import classNames from "classnames";
import ButtonGroupContext from "./ButtonGroupContext";

export interface ButtonGroupProps {
	prefixCls?: string;
	className?: string;
	disabled?: boolean;
	type?: "primary";
	size?: "small" | "default" | "large";
}

export const ButtonGroup: React.FC<ButtonGroupProps> = function ({
	type,
	size,
	disabled,
	prefixCls,
	className,
	children,
	...restProps
}) {
	const cls = classNames(`${prefixCls}-group`, className);

	return (
		<ButtonGroupContext.Provider value={{ type, size, disabled }}>
			<div {...restProps} className={cls}>
				{children}
			</div>
		</ButtonGroupContext.Provider>
	);
};

ButtonGroup.displayName = "ButtonGroup";

ButtonGroup.defaultProps = {
	prefixCls: "rw-btn",
};

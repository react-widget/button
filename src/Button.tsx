import React from "react";
import classnames from "classnames";
import ButtonGroupContext from "./ButtonGroupContext";
import { ButtonGroup } from "./ButtonGroup";

function isReactNodeEmpty(node: React.ReactNode, skipArray = false) {
	return (
		node == null ||
		node === "" ||
		node === false ||
		(!skipArray &&
			Array.isArray(node) &&
			(node.length === 0 || node.every((n) => isReactNodeEmpty(n, true))))
	);
}

interface ButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "prefix"> {
	prefixCls?: string;
	className?: string;
	htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
	type?: "primary";
	size?: "small" | "default" | "large";
	disabled?: boolean;
	loading?: boolean;
	active?: boolean;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
	tagName?: React.ElementType;
}

export const Button: React.FC<ButtonProps> & { Group: typeof ButtonGroup } = function ({
	prefixCls,
	className,
	htmlType,
	type,
	size,
	disabled,
	loading,
	active,
	children,
	prefix,
	suffix,
	tagName,
	...restProps
}) {
	const btnGroup = React.useContext(ButtonGroupContext);
	const isDisabled = btnGroup.disabled || disabled;

	const classes = classnames({
		[prefixCls!]: true,
		[`${prefixCls}-${btnGroup.size || size}`]: btnGroup.size || size,
		[`${prefixCls}-disabled`]: isDisabled || loading,
		[`${prefixCls}-active`]: active,
		[`${prefixCls}-loading`]: loading,
		[`${prefixCls}-${btnGroup.type || type}`]: btnGroup.type || type,
	});

	const TagName = tagName!;

	return (
		<TagName
			{...restProps}
			disabled={isDisabled || loading}
			className={classes}
			type={htmlType}
		>
			{prefix}
			{(prefix || suffix) && isReactNodeEmpty(children) ? (
				<span className={`${prefixCls}-text`}>{children}</span>
			) : (
				children
			)}
			{suffix}
		</TagName>
	);
};

Button.displayName = "Button";

Button.defaultProps = {
	prefixCls: "rw-btn",
	htmlType: "button",
	tagName: "button",
};

Button.Group = ButtonGroup;

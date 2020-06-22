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
	const context = React.useContext(ButtonGroupContext);
	if (context) {
		disabled = disabled || context.disabled;
		size = size || context.size;
		type = type || context.type;
	}

	const cls = classnames({
		[prefixCls!]: true,
		[`${prefixCls}-${size}`]: size,
		[`${prefixCls}-disabled`]: disabled || loading,
		[`${prefixCls}-active`]: active,
		[`${prefixCls}-loading`]: loading,
		[`${prefixCls}-${type}`]: type,
	});

	const TagName = tagName!;

	return (
		<TagName {...restProps} disabled={disabled || loading} className={cls} type={htmlType}>
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

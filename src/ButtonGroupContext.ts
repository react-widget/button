import React from "react";

export interface ButtonGroupContext {
	disabled?: boolean;
	type?: "primary";
	size?: "small" | "default" | "large";
}

export default React.createContext<ButtonGroupContext | null>(null);

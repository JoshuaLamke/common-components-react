import React, { ReactNode } from "react";
import styled from "styled-components";
import { getVariantTheme, Variant } from "../utils/variantMap";

interface StyledButtonProps {
    theme: {fg: string, bg: string};
    border?: "sharp" | "rounded" | "pill";
    borderColor?: string;
    disabled: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
    color: ${props => props.theme.fg};
    background: ${props => props.theme.bg};
    border: none;
    font-size: 1em;
    margin: 1em;
    padding: 0.5em 1.25em;
    border-radius: ${props => props.border === "sharp" ? "0px" : props.border === "rounded" ? "5px" : "1000px"};
    cursor:  ${props => props.disabled ? "default" : "pointer"};
    opacity: ${props => props.disabled ? "0.5" : "1"};
    &:hover {
        transition: ease-in .2s;
        filter: ${props => props.disabled ? "" : "brightness(85%)"};
    } 
    &:focus,
    &:active {
        box-shadow: 0 0 5px ${props => props.theme.bg};
    }
`;

export interface ButtonProps {
    children: ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    variant?: Variant;
    border?: "sharp" | "rounded" | "pill";
    backgroundColor?: string;
    color?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	variant = "primary",
	border = "rounded",
	backgroundColor,
	color,
	disabled = false,
	style
}) => {
	const theme = getVariantTheme(variant);
	if(backgroundColor) {
		theme.bg = backgroundColor;
	}
	if(color) {
		theme.fg = color;
	}

	return (
		<StyledButton theme={theme} border={border} onClick={onClick} disabled={disabled} style={style}>
			{children}
		</StyledButton>
	);
};
export default Button;

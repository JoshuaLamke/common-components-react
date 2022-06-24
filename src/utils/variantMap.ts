export type Variant = "primary" | "secondary" | "warning"
export const getVariantTheme = (variant: Variant) => {
	switch(variant) {
	case "primary":
		return {fg: "white", bg: "#0437F2"};
	case "secondary":
		return {fg: "white", bg: "#818589"};
	case "warning":
		return {fg: "black", bg: "#FDDA0D"};
	}
};
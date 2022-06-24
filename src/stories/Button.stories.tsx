import React from "react";
import { Meta, Story } from "@storybook/react";

import Button, { ButtonProps } from "../components/Button";

const meta: Meta = {
	title: "Button",
	component: Button,
	argTypes: {
		children: {
			defaultValue: "Default",
		},
	},
	parameters: {
		controls: {
			include: ["children", "variant", "border"]
		}
	}
    
};

export default meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />;
export const Default = Template.bind({});
export const Secondary = Template.bind({});
export const Warning = Template.bind({});
export const CustomColors = Template.bind({});
export const Disabled = Template.bind({});

Secondary.args = {    
	children: "Secondary",
	variant: "secondary",
	border: "rounded",
};

Warning.args = {    
	children: "Warning",
	variant: "warning",
	border: "rounded",
};

CustomColors.parameters = {
	controls: {
		include: ["children", "border", "backgroundColor", "color"]
	}
};

CustomColors.args = {
	children: "Custom Colors",
	variant: "primary",
	border: "rounded",
	backgroundColor: "#41af71",
	color: "#ffffff",
};

Disabled.args = {
	children: "Disabled",
	disabled: true
};

Disabled.parameters = {
	controls: {
		include: ["children", "variant", "border", "backgroundColor", "color"]
	}
};

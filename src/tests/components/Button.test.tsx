import React from "react";
import {render, cleanup, screen} from "@testing-library/react";
import Button from "../../components/Button";
import userEvent from "@testing-library/user-event";

afterEach(() => {
	cleanup();
	jest.resetAllMocks();
});

const onClickMock = jest.fn();

describe("Button Tests", () => {
	it("Button renders without error", async () => {
		render(<Button onClick={onClickMock}>Button</Button>);
		expect(screen.getByText("Button")).toBeInTheDocument();
	});
	it("Button onClick gets called on click", async () => {
		render(<Button onClick={onClickMock}>Button</Button>);
		const button: HTMLElement = screen.getByText("Button");
		userEvent.click(button);
		expect(onClickMock).toHaveBeenCalledTimes(1);
	});
});
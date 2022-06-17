import React from "react";
import {render} from "@testing-library/react";
import App from "./App";

describe("App", () => {
	it("App renders as intended", () => {
		const {container} = render(<App />);
		expect(container).toBeEmptyDOMElement();
	});
});

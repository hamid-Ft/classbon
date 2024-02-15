import { describe } from "node:test";
import { Button } from "./button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
describe("Button Component", () => {
	test("renders a default button", () => {
		render(<Button>Click Here</Button>);
		screen.getByText("Click Here");
		expect(screen.getByText("Click Here")).toBeInTheDocument();
		// const div = document.createElement("div");
		// ReactDOM.render(<Button>Click Here</Button>, div);
		// document.body.appendChild(div);
		// and test clean up from document before next test runs
	});
	test("disables the button when isDisabled prop is true", () => {
		render(<Button isDisabled={true}>Click Me</Button>);
		expect(screen.getByRole("button")).toBeDisabled();
	});
	test("applies the correct css class for different button variants", () => {
		const { rerender } = render(<Button variant="primary">Click Me</Button>);
		expect(screen.getByRole("button")).toHaveClass("btn-primary");
		rerender(<Button variant="secondary">Click Me</Button>);
		expect(screen.getByRole("button")).toHaveClass("btn-secondary");
		rerender(<Button variant="info">Click Me</Button>);
		expect(screen.getByRole("button")).toHaveClass("btn-info");
		rerender(<Button variant="ghost">Click Me</Button>);
		expect(screen.getByRole("button")).toHaveClass("btn-ghost");
		rerender(<Button variant="warning">Click Me</Button>);
		expect(screen.getByRole("button")).toHaveClass("btn-warning");
	});
	test("render some button to check debug of it", () => {
		render(
			<Button
				variant="primary"
				isOutline={true}
				isDisabled={true}
				size="large"
				isLoading={true}
				loadingType="ring">
				Hi
			</Button>
		);
		// screen.debug();
	});
});

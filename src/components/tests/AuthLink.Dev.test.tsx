import { describe, it, expect } from "vitest";
import { render } from "solid-testing-library";
import Button from "../common/Button";

describe("Timer component", () => {
  it("should assert some dummy assertion", () => {
    console.log(Button);
    render(() => (
      <Button
        text="hello"
        onClick={() => {
          console.log("hello");
        }}
      />
    ));
    expect(1).toBeTruthy();
  });
});

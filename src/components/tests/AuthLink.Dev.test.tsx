import { describe, it, expect } from "vitest";
import { render } from "solid-testing-library";
import Timer from "../Timer";

describe("Timer component", () => {
  it("should assert some dummy assertion", () => {
    render(() => <Timer />);
    expect(1).toBeTruthy();
  });
});

import { describe, it, expect } from "vitest";
import { add } from "../common/Text";

describe("this should work", () => {
  it("should now work", () => {
    const value = add(4, 9);
    expect(value).toBe(13);
  });
});

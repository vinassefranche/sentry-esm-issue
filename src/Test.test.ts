import { describe, expect, it } from "vitest";
import { foo } from "./Test";

describe("Test", () => {
  it("should pass", () => {
    expect(foo()).toBe(true);
  });
})
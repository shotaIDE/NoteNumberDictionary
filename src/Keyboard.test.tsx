import React from "react";
import { render } from "@testing-library/react";
import { Keyboard } from "./Keyboard";

test("最高音の日本式表記が描画される", () => {
  const { getByText } = render(<Keyboard />);
  const linkElement = getByText("hihihihiC");
  expect(linkElement).toBeInTheDocument();
});

test("最低音の日本式表記が描画される", () => {
  const { getByText } = render(<Keyboard />);
  const linkElement = getByText("lowlowlowC");
  expect(linkElement).toBeInTheDocument();
});

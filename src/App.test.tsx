import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("クラッシュされず描画される", () => {
  render(<App />);
});

import { queryByAttribute, render, screen } from "@testing-library/react";
import App from "./App";

test("App initial load test", () => {
  // custom function to get an object based on id attribute
  const getById = queryByAttribute.bind(null, "id");

  const dom = render(<App />);

  const calendar = getById(dom.container, "calendar-frame");
  expect(calendar).toBeInTheDocument();
});

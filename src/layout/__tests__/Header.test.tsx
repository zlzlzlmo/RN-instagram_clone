import { render, screen, fireEvent } from "@testing-library/react-native";
import Header from "../Header";

test("render Header", () => {
  render(<Header />);
  expect(screen.getByHintText("app-logo"));
  expect(screen.getByHintText("header-icons"));
});

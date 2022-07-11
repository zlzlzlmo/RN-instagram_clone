import { render, screen, fireEvent } from "@testing-library/react-native";
import Header from "../../src/components/home/Header";

test("render Header", () => {
  render(<Header />);
});

import { render, screen, waitFor } from "@testing-library/react";
import { getRickMortyCharactersAPI } from "../api/rmApi";
import { App } from "../App";

describe("datosDescribe", () => {
  test("should hacer match con snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test("should call API ok with more than 1 character and contains name and origin", async () => {
    const { results } = await getRickMortyCharactersAPI();

    expect(results.length).toBeGreaterThan(0);

    expect(results[0].name).toBeTruthy();
    expect(results[0].origin).toBeTruthy();
  });

  test("should contener elementos de tipo Card", async () => {
    const { container } = render(<App />);

    await waitFor(() => {
      screen.getByText("Rick Sanchez");
      //screen.debug();
      const ds = container.querySelectorAll(".card");
      expect(ds.length).toBeGreaterThan(0);
    });
  });
});

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App.js";

describe("Login navigation", () => {
  test("Navigation vers la page Home après soumission du formulaire", async () => {
    render(<App />);

    const email = screen.getByLabelText("Email");
    const password = screen.getByLabelText("Mot de passe");
    const connexionBtn = screen.getByRole("button", { name: "Se connecter" });

    fireEvent.change(email, { target: { value: "jean.dupont@example.com" } });
    fireEvent.change(password, { target: { value: "motdepasse1" } });
    fireEvent.click(connexionBtn);

    await waitFor(() => {
      expect(screen.queryByLabelText("Email")).toBeNull();
    });
  });
});

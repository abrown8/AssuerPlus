import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

describe("Login window", () => {
  test("Mise en page fenêtre de connexion", async () => {
    render(<App />);
    const email = screen.getByLabelText("Email");
    const password = screen.getByLabelText("Mot de passe");
    const connexionBtn = screen.getByRole("button", { name: "Se connecter" });
    expect(email).not.toBeNull();
    expect(password).not.toBeNull();
    expect(connexionBtn).not.toBeNull();
  });
  test("Modification de la valeur du champ email", async () => {
    render(<App />);

    const emailInput = screen.getByLabelText("Email");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput).toHaveValue("test@example.com");
  });
  test("Modification de la valeur du champ mot de passe", async () => {
    render(<App />);

    const emailInput = screen.getByLabelText("Mot de passe");

    fireEvent.change(emailInput, { target: { value: "motdepasse1" } });

    expect(emailInput).toHaveValue("motdepasse1");
  });
});

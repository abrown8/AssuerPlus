import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DeclarationSinistre from "../components/DeclarationSinistre";

describe("DeclarationSinistre window", () => {
  test("Mise en page fenêtre de connexion", async () => {
    render(<DeclarationSinistre />);
    const nom = screen.getByLabelText("Nom");
    const prenom = screen.getByLabelText("Prénom");
    const date = screen.getByLabelText("Date du sinistre");
    const description = screen.getByLabelText("Description du sinistre");
    const photos = screen.getByLabelText("Photos de l'accident");
    const adresse = screen.getByLabelText("Adresse postale");
    const code_postal = screen.getByLabelText("Code postal");
    const ville = screen.getByLabelText("Ville");
    const pays = screen.getByLabelText("Pays");
    const submitBtn = screen.getByRole("button", { name: "Enregistrer" });

    expect(nom).not.toBeNull();
    expect(prenom).not.toBeNull();
    expect(date).not.toBeNull();
    expect(description).not.toBeNull();
    expect(photos).not.toBeNull();
    expect(adresse).not.toBeNull();
    expect(code_postal).not.toBeNull();
    expect(ville).not.toBeNull();
    expect(pays).not.toBeNull();
    expect(submitBtn).not.toBeNull();
  });
  test("Modification de la valeur du champ nom", async () => {
    render(<DeclarationSinistre />);

    const nom = screen.getByLabelText("Nom");

    fireEvent.change(nom, { target: { value: "Dupont" } });

    expect(nom).toHaveValue("Dupont");
  });
  test("Modification de la valeur du champ prénom", async () => {
    render(<DeclarationSinistre />);

    const prenom = screen.getByLabelText("Prénom");

    fireEvent.change(prenom, { target: { value: "Serge" } });

    expect(prenom).toHaveValue("Serge");
  });
  test("Modification de la valeur du champ date", async () => {
    render(<DeclarationSinistre />);

    const date = screen.getByLabelText("Date du sinistre");

    fireEvent.change(date, { target: { value: "2022-02-25" } });

    expect(date).toHaveValue("2022-02-25");
  });
  test("Modification de la valeur du champ description", async () => {
    render(<DeclarationSinistre />);

    const description = screen.getByLabelText("Description du sinistre");

    fireEvent.change(description, { target: { value: "aa" } });

    expect(description).toHaveValue("aa");
  });
  test("Modification de la valeur du champ photos", async () => {
    render(<DeclarationSinistre />);

    const photos = screen.getByLabelText("Photos de l'accident");

    const file1 = new File(["image1.jpg"], "image1.jpg", {
      type: "image/jpeg",
    });
    const file2 = new File(["image2.jpg"], "image2.jpg", {
      type: "image/jpeg",
    });

    const fileList = {
      0: file1,
      1: file2,
      length: 2,
      item: (index) => [file1, file2][index],
    };

    fireEvent.change(photos, { target: { files: fileList } });

    expect(photos.files).toHaveLength(2);
    expect(photos.files[0].name).toBe("image1.jpg");
    expect(photos.files[1].name).toBe("image2.jpg");
  });
  test("Modification de la valeur du champ adresse", async () => {
    render(<DeclarationSinistre />);

    const adresse = screen.getByLabelText("Adresse postale");

    fireEvent.change(adresse, { target: { value: "1 rue du tremble" } });

    expect(adresse).toHaveValue("1 rue du tremble");
  });
  test("Modification de la valeur du champ code postal", async () => {
    render(<DeclarationSinistre />);

    const code_postal = screen.getByLabelText("Code postal");

    fireEvent.change(code_postal, { target: { value: "67200" } });

    expect(code_postal).toHaveValue("67200");
  });
  test("Modification de la valeur du champ ville", async () => {
    render(<DeclarationSinistre />);

    const ville = screen.getByLabelText("Ville");

    fireEvent.change(ville, { target: { value: "Nantes" } });

    expect(ville).toHaveValue("Nantes");
  });
  test("Modification de la valeur du champ pays", async () => {
    render(<DeclarationSinistre />);

    const pays = screen.getByLabelText("Pays");

    fireEvent.change(pays, { target: { value: "France" } });

    expect(pays).toHaveValue("France");
  });
});

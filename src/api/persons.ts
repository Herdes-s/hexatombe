// src/api/persons.ts


const API_URL = "https://hexatombe.onrender.com/api";

export async function getAllPersons() {
  const response = await fetch(`${API_URL}/persons`);

  if (!response.ok) {
    throw new Error("Erro ao buscar todos os Personagens");
  }

  return response.json();
}

export async function getPersons(id: number) {
  const response = await fetch(`${API_URL}/persons/${id}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar o Personagem");
  }

  return response.json();
}

export async function getPersonForms(id: number) {
  const response = await fetch(`${API_URL}/persons/${id}/forms`);

  if (!response.ok) {
    throw new Error("Erro ao buscar Formas");
  }

  return response.json();
}

export async function getAllProtagonists() {
  const response = await fetch(`${API_URL}/protagonists`);

  if (!response.ok) {
    throw new Error("Erro ao buscar todos os Protagonistas");
  }

  return response.json();
}

export async function getAllSeasons() {
  const response = await fetch(`${API_URL}/seasons`);

  if (!response.ok) {
    throw new Error("Erro ao buscar todas as Temporadas");
  }

  return response.json();
}

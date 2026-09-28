// src/api/persons.ts

import type { Cast } from "../types/TypesProtagonist";

const API_URL = "http://localhost:3000/api";

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

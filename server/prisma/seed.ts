import "dotenv/config";

import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("Iniciando seed...");

  // =========================
  // SEASON
  // =========================

  await prisma.season.create({
    data: {
      nome: "Hexatombe",
      logo: "URL_DA_LOGO",
      link: "URL_DA_SEASON",
      color: "#ff0000",

      // =========================
      // PERSONS
      // =========================

      persons: {
        create: [
          {
            id: 104,

            sitacao:
              "Kemi não se importava com um ideal moral... ela só matava para vencer.",

            interprete: "Beatriz Beamom Pozzebon",

            classe: "Especialista",

            equipe: "Mascarados",

            status: "Vivo",

            sobre01:
              "Kemi, também conhecida como Fantasma, é uma das protagonistas da série Ordem Paranormal, presente em Hexatombe.",

            sobre02:
              "Kemi é uma mercenária, matando pessoas por dinheiro. Ela teve sua primeira aparição no final da 3ª parte de Natal Macabro, sendo mostrada apenas sua silhueta, junto dos outros assassinos. Ela teve sua aparência revelada no primeiro episódio de Hexatombe, em que aparece em seu apartamento, procurando respostas para sua perda de memória recente.",

            sobre03:
              "Em Hexatombe, Kemi é uma das integrantes da equipe dos Mascarados, usando como base a Mansão Abandonada.",

            // =========================
            // FORMAS DA KEMI
            // =========================

            formas: {
              create: [
                {
                  name: "Kemi",
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/kemi.webp",
                },
                {
                  name: "Fantasma",
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/persons/fantasma.webp",
                },
              ],
            },
          },
        ],
      },

      // =========================
      // PROTAGONISTS
      // =========================

      protagonists: {
        create: [
          // Depois colocaremos os protagonistas aqui
        ],
      },
    },
  });

  console.log("Seed finalizado!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

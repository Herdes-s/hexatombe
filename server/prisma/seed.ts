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

  await prisma.person.create({
    data: {
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

      // Não colocamos formas ainda
    },
  });

  await prisma.forma.createMany({
    data: [
      { name: "Kemi", img: "kemi.webp", personId: 104 },
      { name: "Fantasma", img: "fantasma.webp", personId: 104 },
    ],
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

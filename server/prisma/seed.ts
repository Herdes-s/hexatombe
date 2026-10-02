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
          {
            mini: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/dalmo-mini",
            text: " O sangue poderia até pagar bem, mas para Dalmo, A glória era viciante.",
            golpes: {
              create: [
                {
                  name: "GOLPE DE ARENA",
                  cost: "3 PD",
                  description:
                    "Quando acertar um ataque corpo a corpo, você pode fazer um ataque adicional ou uma manobra.",
                },
                {
                  name: "PRESSÃO ATMOSFÉRICA",
                  cost: "3 PD",
                  description:
                    "Se acertar um ataque você causa +1d10 pontos de dano de energia (+5) e o alvo fica atordoado por mais uma rodada.",
                },
              ],
            },
            armas: {
              create: [
                {
                  name: "MANOPLAS DO COLOSSO",
                  description:
                    "Esse par de manoplas amaldiçoadas de energia faz com que cada soco seja acompanhado de pressão atmosférica demolidora. Elas causam +1d10 (+5) de dano de energia",
                },
              ],
            },
            about:
              "Dalmo… ou como a maioria prefere chamar, “o Colosso”. Se você já viu ele de perto, sabe que esse apelido não é exagero — é aviso. Dizem que ele não nasceu forte: foi moldado. Cada marca no corpo dele carrega uma história que ninguém tem coragem de pedir pra ouvir. O Colosso é o tipo de homem que avança quando todos recuam, como se o medo não tivesse lugar dentro dele. Alguns juram que ele já enfrentou criaturas do Outro Lado sozinho e voltou vivo só por teimosia. Ele não fala muito, mas quando olha pra você, parece que está avaliando se você vai aguentar o que está por vir… ou se vai ser só mais um nome nas paredes de algum ritual. Se tem alguém que você quer do seu lado quando o impossível se aproxima, é o Colosso. E se ele estiver contra você? Então é melhor correr antes que ele perceba.",
            formas: {
              create: [
                {
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/dalmoIcon",
                  name: "Dalmo",
                  icon: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/semMasc",
                },
                {
                  img: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/dalmoMascIcon",
                  name: "COLOSSO",
                  icon: "https://br-withered-lab-b48ukrk4.storage.c-6.us-east-2.aws.neon.tech/protagonists/comMasc",
                },
              ],
            },
          },
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

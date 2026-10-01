/*
  Warnings:

  - You are about to drop the `forma` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `seasonId` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "forma" DROP CONSTRAINT "forma_personId_fkey";

-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "seasonId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "forma";

-- CreateTable
CREATE TABLE "Forma" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "personId" INTEGER NOT NULL,

    CONSTRAINT "Forma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormaProtagonist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "protagonistId" INTEGER NOT NULL,

    CONSTRAINT "FormaProtagonist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Protagonist" (
    "id" SERIAL NOT NULL,
    "mini" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "seasonId" INTEGER NOT NULL,
    "about" TEXT NOT NULL,

    CONSTRAINT "Protagonist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Golpe" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "protagonistId" INTEGER NOT NULL,

    CONSTRAINT "Golpe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Arma" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "protagonistId" INTEGER NOT NULL,

    CONSTRAINT "Arma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Season" (
    "id" SERIAL NOT NULL,
    "logo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Season_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Forma" ADD CONSTRAINT "Forma_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormaProtagonist" ADD CONSTRAINT "FormaProtagonist_protagonistId_fkey" FOREIGN KEY ("protagonistId") REFERENCES "Protagonist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Protagonist" ADD CONSTRAINT "Protagonist_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Golpe" ADD CONSTRAINT "Golpe_protagonistId_fkey" FOREIGN KEY ("protagonistId") REFERENCES "Protagonist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Arma" ADD CONSTRAINT "Arma_protagonistId_fkey" FOREIGN KEY ("protagonistId") REFERENCES "Protagonist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

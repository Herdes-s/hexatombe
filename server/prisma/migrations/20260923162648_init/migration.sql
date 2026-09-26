-- CreateTable
CREATE TABLE "forma" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "icon" TEXT,
    "personId" INTEGER NOT NULL,

    CONSTRAINT "forma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "info" TEXT,
    "sitacao" TEXT NOT NULL,
    "afinidade" TEXT,
    "trilha" TEXT,
    "interprete" TEXT,
    "classe" TEXT NOT NULL,
    "ocupacao" TEXT,
    "equipe" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "sobre01" TEXT,
    "sobre02" TEXT,
    "sobre03" TEXT,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "forma" ADD CONSTRAINT "forma_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

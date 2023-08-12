-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "discountRate" INTEGER NOT NULL,
    "coverImage" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);

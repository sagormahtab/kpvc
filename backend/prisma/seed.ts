/* eslint-disable prettier/prettier */
// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const popularBooks = [
    {
      title: 'The Great Gatsby',
      description: 'A story about the American Dream.',
      discountRate: 10,
      coverImage: 'https://via.placeholder.com/350x150',
      price: 1500,
    },
    {
      title: 'To Kill a Mockingbird',
      description: 'A classic tale of racial injustice.',
      discountRate: 15,
      coverImage: 'https://via.placeholder.com/350x150',
      price: 1800,
    },
  ];

  for (const book of popularBooks) {
    await prisma.book.create({
      data: book,
    });
  }
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });

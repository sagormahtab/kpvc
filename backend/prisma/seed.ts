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
      coverImage: 'https://via.placeholder.com/500x500',
      price: 1500,
    },
    {
      title: 'To Kill a Mockingbird',
      description: 'A classic tale of racial injustice.',
      discountRate: 15,
      coverImage: 'https://via.placeholder.com/500x500',
      price: 1800,
    },
    {
      title: '1984',
      description: 'A dystopian novel by George Orwell.',
      discountRate: 20,
      coverImage: 'https://via.placeholder.com/500x500',
      price: 1600,
    },
    {
      title: 'Pride and Prejudice',
      description: 'A romantic novel by Jane Austen.',
      discountRate: 12,
      coverImage: 'https://via.placeholder.com/500x500',
      price: 2000,
    },
    {
      title: 'The Catcher in the Rye',
      description: 'A novel by J.D. Salinger.',
      discountRate: 8,
      coverImage: 'https://via.placeholder.com/350x150',
      price: 1700,
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

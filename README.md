# Book App

This is a simple book app which shows a list of books from the API server. It has infinite scrolling meaning when a user reaches 80% height of the list of books then the data are refetched and new books are added. Also, Pull to refresh feature is also enabled.

The project is mainly divided in 2 different folders.

- backend
- frontend

## backend

The backend contains all the necessary api to power up the frontend with a list of books. Also, user can create/update/delete any book. The backend server is deployed at: [https://kpvc-backend.onrender.com](https://kpvc-backend.onrender.com). This might take 30 seconds or more to start as the API from onrender might be in an idle state due to inactivity.
Also, Swagger API documentation is available [here](https://kpvc-backend.onrender.com/api-docs)

#### Technologies used

- NestJS
- Prisma
- SQLite
- Swagger etc.

## frontend

The frontend part of the Book App is responsible for displaying the list of books fetched from the API server. It utilizes the SWR library to manage data fetching and provides features such as infinite scrolling and pull-to-refresh. The frontend application is deployed at: [https://singular-kashata-16e6e2.netlify.app/](https://singular-kashata-16e6e2.netlify.app/).

#### Technologies used

- React
- Next.js
- SWR

**Thanks!**

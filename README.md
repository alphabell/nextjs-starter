This is a nextjs starter preconfigured with next-auth, prisma db, tailwind css.
It uses the new nextjs src/app directory project structure.

## Local Development
1. Rename .env.sample to .env
2. Change DATABASE_URL value in .env to point it to the correct database
3. Run `npx prisma migrate` to migrate the database
4. Run `npx prisma db seed` to seed the database with initial users. See prisma/seed.ts file for more info.
5. Run `yarn dev` to run the local server.  

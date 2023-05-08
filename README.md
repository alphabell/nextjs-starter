This is a nextjs starter preconfigured with next-auth, prisma db, tailwind css.
It uses the new nextjs src/app directory project structure.

## Project Layout
* We have used two [route groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups) `(account)` & `(markeing)` to group account/dashboard and general website pages in to different groups, so they can use diffrent layout.ts files. 
* All the account related pages are inside `(account)/app` directory, which prefix those urls with `/app`.
* All the authentication related pages are inside the `/auth` directory and they can use a seperate layout.ts file as well if needed.
* We use Next.js [middleware](https://nextjs.org/docs/pages/building-your-application/routing/middleware) to prevent unauthenticated users from visting `/app/...` urls.
* Resouce creating actions will go in to services files ( `lib/services/user.service.ts` etc.).
## Local Development
1. Rename .env.sample to .env
2. Change DATABASE_URL value in .env to point it to the correct database
3. Run `npx prisma db push` to migrate the database
4. Run `npx prisma db seed` to seed the database with initial users. See prisma/seed.ts file for more info.
5. Run `yarn dev` to run the local server.  


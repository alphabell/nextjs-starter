const { PrismaClient } = require('@prisma/client')

const db = new PrismaClient()
const bcrypt = require("bcrypt")

async function main() {

    // initial users
    await db.user.upsert({
        where: { email: 'admin@example.com' },
        update: {}, // this makes upsert work as findOrCreate
        create: {
            email: 'admin@example.com',
            password: await bcrypt.hash('admin123', 10),
            name: 'Admin Doe',
        }
    })

    await db.user.upsert({
        where: { email: 'user@example.com' },
        update: {},  // this makes upsert work as findOrCreate
        create: {
            email: 'user@example.com',
            password: await bcrypt.hash('user123', 10),
            name: 'Jhone Doe'
        }
    })

}

main()
    .then(async () => {
        await db.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await db.$disconnect()
        process.exit(1)
    })
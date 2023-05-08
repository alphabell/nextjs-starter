import prisma from "../prisma";
import { hash } from 'bcrypt';

export async function createUser(name: string, email:string, password:string) {
    const user = await prisma.user.create({
        data:{
            name,
            email,
            password: await hash(password, 10),
        },
    });

    // Todo: send welcome email etc...
    
    return user;
}

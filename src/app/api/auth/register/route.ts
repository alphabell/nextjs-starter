import { createUser } from '@/lib/actions/users';
import { getUserByEmail } from '@/lib/data/users';
import { exclude } from '@/lib/utils';
import { NextResponse } from 'next/server';
import * as z from 'zod';

export async function POST(request: Request) {
    const { name, email, password } = await request.json();

    const schema = z.object({
        name: z.string().min(2, 'Name is too short.'),
        email: z.string().email().refine(async (email: string) => {
            const user = await getUserByEmail(email);
            return !user; // Returns true if user is undefined, false otherwise
        }, 'Email already exists.'),
        password: z.string().min(6, 'Password is too short.').max(16, 'Password is too long.'),
    });

    try {
        // We're using parseAsync here because we're using an async function in the refine method above.
        // See https://zod.dev/?id=parseasync vs https://zod.dev/?id=parse
        await schema.parseAsync({ name, email, password });
    } catch (error) {
        if (error instanceof z.ZodError) {
            error = error.flatten()
        }
        return NextResponse.json(error, { status: 400 });
    }

    const user = await createUser(name, email, password);

    return NextResponse.json(exclude(user, ['password']));
}
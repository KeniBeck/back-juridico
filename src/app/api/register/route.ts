import { NextResponse } from 'next/server';
import { registerUser } from '@/app/models/register';

export async function POST(req: any) {
    try {
        const data = await req.json();
        const result = await registerUser(data);
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ message: 'Error interno del servidor', error: error });
    }
}
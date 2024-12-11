import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    console.log('POST /api/auth/logout chamado');

    const response = NextResponse.json({ message: 'Deslogado com sucesso' });
    response.cookies.delete('AuthToken');

    return response;
}


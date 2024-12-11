import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    console.log('POST /api/auth chamado');

    const body = await request.json();
    const { username, password } = body;

    console.log('username:', username);
    console.log('password:', password);

    if (username === 'admin' && password === 'admin') {
        const token = 'user-logged-in-token';

        const response = NextResponse.json({ message: 'Autenticado com sucesso' });

        response.cookies.set('AuthToken', token, {
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 // 1 dia
        });


        return response;
    } else {
        return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
    }
}


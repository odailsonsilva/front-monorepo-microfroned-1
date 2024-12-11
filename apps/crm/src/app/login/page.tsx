'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@helius/context';

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useUserStore();

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        console.log('handleLogin');
        console.log({
            username,
            password
        })
        const res = await fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        setUser({
            id: '1',
            name: 'Admin',
            email: 'admin@admin.com'
        });

        if (res.ok) {
            router.push('/');
        } else {
            alert('Credenciais inválidas');
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button type="submit">Entrar</button>
        </form>
    );
}

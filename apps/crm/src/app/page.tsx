'use client';

import { useUserStore } from "@helius/context";
import Link from "next/link";

export default function Home() {
  const { user, setUser } = useUserStore();

  const logout = async () => {
    const res = await fetch('/api/logout', {
      method: 'POST',
    });

    if (res.ok) {
      setUser(null);
      window.location.href = '/login';
    } else {
      alert('Erro ao deslogar');
    }
  }

  return (
    <div>
      <h1>Main App</h1>
      <p>Acesse <a href="/blog">/blog</a> para ver a zona do blog</p>
      <p>Acesse <a href="/shop">/shop</a> para ver a zona da loja</p>

      <div>
        <p>User: {user?.name}</p>
        <p>Email: {user?.email}</p>
      </div>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

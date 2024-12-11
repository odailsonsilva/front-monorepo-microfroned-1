import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Shop Zone</h1>
      <p>Bem-vindo à zona da loja!</p>
      <p>Acesse <a href="/">Home</a> para ver a zona do blog</p>
      <p>Acesse <a href="/blog">Blog</a> para ver a zona do blog</p>
    </div>
  );
}

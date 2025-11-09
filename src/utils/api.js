// src/utils/api.js (migrado do seu front-end JS)
const API_URL = "https://back-tcc.vercel.app";  // Seu back-end

// ------- Produtos -------
export async function listarProdutos(limit = 10) {
  try {
    const res = await fetch(`${API_URL}/produtos`);
    const data = await res.json();
    return data.slice(0, limit);  // Retorna os primeiros 'limit' produtos
  } catch (error) {
    console.error("Erro ao listar produtos:", error);
    return [];  // Retorna array vazio em caso de erro
  }
}

// ------- Outras funções (adicione conforme necessário) -------
// Exemplo: Para usuários ou pedidos, migre do seu JS original
export async function cadastrarUsuario(dados) {
  const res = await fetch(`${API_URL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  return res.json();
}

export async function loginUsuario(email, senha) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });
  return res.json();
}

export async function criarPedido(dados) {
  const res = await fetch(`${API_URL}/pedidos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  return res.json();
}
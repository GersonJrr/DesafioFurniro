import { Produto } from "../interface/Produtos";

const API_URL = "http://3.144.121.154:3000/produtos";

export const fetchProdutos = async (): Promise<Produto[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Erro ao buscar produtos");
    }
    const data: Produto[] = await response.json();

    return data.map((produto) => ({
      ...produto,
      price: typeof produto.price === "string" ? parseFloat(produto.price) : produto.price,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

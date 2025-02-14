import React, { useState, useEffect } from "react";
import CardProdutos from "../../Components/Produtos/CardProdutos";

// Definição da interface para os produtos
interface Produto {
  id: number; // Adicionado para garantir identificação única
  name: string;
  description: string;
  price: string;
  oldPrice: string;
  image: string;
}

export default function ProdutosShop() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then((response) => response.json())
      .then((data: Produto[]) => setProdutos(data)) // Definir o tipo explicitamente
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 w-full max-w-6xl place-items-center gap-x-[32px]">
        {produtos.map((produto) => (
          <CardProdutos key={produto.id} {...produto} />
        ))}
      </div>
    </div>
  );
}

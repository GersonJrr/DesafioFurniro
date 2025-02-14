import React, { useState, useEffect } from "react";
import CardProdutos from "../../../Components/Produtos/CardProdutos";
import Paginacao from "./Paginacao";
import { Produto } from "../../../interface/Produtos";
import { fetchProdutos } from "../../../services/Produtos-service";
import ButtonMore from "../../Home/components/ButtonMore"; 

interface ProdutoListProps {
  produtosPorPagina: number;
  mostrarMais?: boolean;
}

const ListaProdutos: React.FC<ProdutoListProps> = ({ produtosPorPagina, mostrarMais = false }) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [produtosVisiveis, setProdutosVisiveis] = useState<Produto[]>([]);

  useEffect(() => {
    const obterProdutos = async () => {
      const data = await fetchProdutos();
      setProdutos(data);
      setProdutosVisiveis(data.slice(0, produtosPorPagina)); 
    };

    obterProdutos();
  }, [produtosPorPagina]);

  const totalPaginas = Math.max(1, Math.ceil(produtos.length / produtosPorPagina));
  const indexUltimoProduto = paginaAtual * produtosPorPagina;
  const indexPrimeiroProduto = indexUltimoProduto - produtosPorPagina;
  const produtosPagina = produtos.slice(indexPrimeiroProduto, indexUltimoProduto);

  const mostrarMaisProdutos = () => {
    setProdutosVisiveis(produtos.slice(0, produtosVisiveis.length + produtosPorPagina));
  };

  const produtosParaMostrar = mostrarMais ? produtosVisiveis : produtosPagina;

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 w-full max-w-[1320px]">
        {produtosParaMostrar.map((produto) => (
          <CardProdutos key={produto.id} {...produto} />
        ))}
      </div>

      <ButtonMore
        onClick={mostrarMaisProdutos}
        mostrarMais={mostrarMais}
        produtosVisiveis={produtosVisiveis.length}
        totalProdutos={produtos.length}
      />

      {!mostrarMais && produtos.length > produtosPorPagina && (
        <Paginacao
          paginaAtual={paginaAtual}
          totalPaginas={totalPaginas}
          onPaginaChange={setPaginaAtual}
        />
      )}
    </div>
  );
};

export default ListaProdutos;

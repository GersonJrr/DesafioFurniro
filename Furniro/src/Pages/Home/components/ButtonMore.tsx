import React from "react";

interface ButtonMoreProps {
  onClick: () => void;
  mostrarMais: boolean; 
  produtosVisiveis: number; 
  totalProdutos: number; 
}

const ButtonMore: React.FC<ButtonMoreProps> = ({ onClick, mostrarMais, produtosVisiveis, totalProdutos }) => {
  return (
    <>
      {mostrarMais && produtosVisiveis < totalProdutos && (
        <button
          onClick={onClick}
          className="border border-[#B88E2F] bg-white w-[245px] h-[48px] flex-shrink-0 text-[#B88E2F] font-semibold text-lg hover:bg-[#B88E2F] hover:text-white transition-all duration-300 mt-9 mb-16"
        >
          Show More
        </button>
      )}
    </>
  );
};

export default ButtonMore;

import React from "react";

interface PaginacaoProps {
  paginaAtual: number;
  totalPaginas: number;
  onPaginaChange: (novaPagina: number) => void;
}

const Paginacao: React.FC<PaginacaoProps> = ({ paginaAtual, totalPaginas, onPaginaChange }) => {
  const mudarPagina = (novaPagina: number) => {
    onPaginaChange(novaPagina);
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <div className="flex justify-center space-x-8 font-poppins mt-24">
     
      {Array.from({ length: totalPaginas }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => mudarPagina(index + 1)}
          className={`px-4 py-2 rounded-md w-[60px] h-[60px]  text-[20px] ${
            paginaAtual === index + 1 ? "bg-begeButton text-branco" : "bg-bg-filter text-preto"
          }`}
        >
          {index + 1}
        </button>
      ))}

      
      <button
        onClick={() => mudarPagina(paginaAtual + 1)}
        disabled={paginaAtual === totalPaginas}
        className={`px-7 py-2 rounded-md ${
          paginaAtual === totalPaginas ? "bg-gray-300 cursor-not-allowed text-branco" : "bg-bg-filter  text-preto"
        }`}
      >
        Next   
      </button>
    </div>
  );
};

export default Paginacao;

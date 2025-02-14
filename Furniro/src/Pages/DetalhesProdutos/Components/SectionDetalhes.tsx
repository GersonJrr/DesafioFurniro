import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProdutos } from "../../../services/Produtos-service";
import ButtonAdd from "./ButtonAdd";
import ButtonQtd from "./ButtonQtd";
import { Produto } from "../../../interface/Produtos";

const DetalhesPage = () => {
  const { id } = useParams<{ id: string }>(); 
  const [produto, setProduto] = useState<Produto | null>(null);
  const [quantidade, setQuantidade] = useState<number>(1);

  useEffect(() => {
    const carregarProduto = async () => {
      if (!id) {
        console.error("ID não encontrado na URL");
        return;
      }

      console.log("Buscando produto com id:", id);

      const produtos = await fetchProdutos();
      console.log("Resposta da API:", produtos);

      if (produtos && produtos.length > 0) {
        const produtoEncontrado = produtos.find((p) => p.id.toString() === id);
        if (produtoEncontrado) {
          setProduto(produtoEncontrado); 
        } else {
          console.warn(`Produto com id ${id} não encontrado!`);
          setProduto(null);  
        }
      } else {
        console.warn("Nenhum produto encontrado!");
      }
    };

    carregarProduto();
  }, [id]); 

  const aumentarQuantidade = () => setQuantidade((prev) => prev + 1);
  const diminuirQuantidade = () => setQuantidade((prev) => (prev > 1 ? prev - 1 : 1));

  if (!produto) {
    return <p className="text-center text-gray-600 text-lg mt-20">Carregando produto...</p>;
  }

  return (
    <div className="w-full h-[820px] flex justify-center flex-col lg:flex-row mt-9 bg-white space-x-8 font-poppins">
      <div className="flex flex-col space-y-4 ml-20 mr-8">
        {[...Array(4)].map((_, index) => (
          <img 
            key={index}
            src={produto.image}  
            alt={`Imagem ${index + 1}`} 
            className="w-[76px] h-[80px] bg-white rounded-[10px] flex items-center justify-center shadow-md cursor-pointer hover:opacity-80 transition"
          />
        ))}
      </div>

      <div className="flex lg:space-x-16">
        <div>
          <img 
            src={produto.image}  
            alt="Produto Principal" 
            className="w-[423px] h-[500px] bg-white rounded-[10px] shadow-lg"
          />
        </div>

        <div className="max-w-lg space-y-8 p-4 ml-10">
          <h1 className="text-2xl font-normal text-gray-800">{produto.name}</h1>
          <span className="text-xl font-normal text-gray-600">
            R$ {produto.price.toFixed(2).replace(".", ",")}
          </span>
          <p className="text-gray-500">{produto.description}</p>

          <div>
            <span className="text-gray-700 font-semibold">Tamanho</span>
            <div className="flex space-x-2 mt-2">
              {["L", "XL", "XS"].map((size) => (
                <button key={size} className="border border-gray-400 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition">{size}</button>
              ))}
            </div>
          </div>

          <div>
            <span className="text-gray-700 font-semibold">Cor</span>
            <div className="flex space-x-4 mt-2">
              {["bg-purple", "bg-black", "bg-begeButton"].map((color, index) => (
                <button key={index} className={`w-[30px] h-[30px] ${color} rounded-full shadow-lg hover:opacity-80 transition`}></button>
              ))}
            </div>
            <div className="flex space-x-4 mt-7">
              <ButtonQtd 
                width="100px"
                height="40px"
                quantidade={quantidade}
                onIncrement={aumentarQuantidade}
                onDecrement={diminuirQuantidade}
              />
              <ButtonAdd />
            </div>
          </div>

          <div className="w-full h-[1px] bg-gray-300 my-6"></div>

          <div className="flex flex-col text-cinza-letras font-poppins text-[16px] font-normal leading-normal space-y-6">
            <span>SKU: {produto.id}</span>
            <span>Categoria: Sofás</span>
            <span>Tags: Sofa, Chair, Home, Shop</span>
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalhesPage;

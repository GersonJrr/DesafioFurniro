import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext"; 

interface ProdutoProps {
  id: number;
  name: string;
  description: string;
  price: number;  
  oldPrice?: string;
  image: string;
}

const CardProdutos: React.FC<ProdutoProps> = ({ id, name, description, price, oldPrice, image }) => {
  const [hover, setHover] = useState(false);
  const { addToCart, setCartOpen } = useCart(); 
  const navigate = useNavigate(); 

  const handleAddToCart = () => {
    addToCart({ id, name, description, price, oldPrice, image, quantity: 1 });
    setCartOpen(true);
    
    
    navigate(`/detalhes/produtos/${id}`); 
  };

  return (
    <div
      className="w-[285px] mx-auto relative group transition-all duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative bg-gray-200 overflow-hidden shadow-md">
        <img src={image} className="w-full h-[301px] object-cover" alt={name} />

        <div className="p-4 flex flex-col space-y-2">
          <p className="text-gray-800 font-poppins text-lg font-semibold">{name}</p>
          <p className="text-gray-600 font-poppins text-sm">{description}</p>
          <div className="flex items-center space-x-2">
            <span className="text-gray-800 font-poppins text-lg font-semibold">{price}</span>
            {oldPrice && <span className="text-gray-500 text-sm line-through">{oldPrice}</span>}
          </div>
        </div>

        
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gray-900 transition-opacity duration-300 ${hover ? "opacity-70" : "opacity-0"}`}
        >
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white font-semibold py-2 px-4 shadow-md hover:bg-blue-600 transition"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProdutos;

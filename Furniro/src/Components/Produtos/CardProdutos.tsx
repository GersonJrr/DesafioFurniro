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

  
  const handleNavigate = () => {
    navigate(`/detalhes/produtos/${id}`); 
  };

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation(); 
    addToCart({ id, name, description, price, oldPrice, image, quantity: 1 });
    setCartOpen(true);
  };

  return (
    <div
      className="w-[285px] mx-auto relative group transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleNavigate} 
    >
      <div className="relative bg-gray-200 overflow-hidden shadow-md">
        <img src={image} className="w-full h-[301px] object-cover" alt={name} />

        <div className="p-4 flex flex-col space-y-2">
          <p className="text-gray-800 font-poppins text-lg font-semibold">{name}</p>
          <p className="text-gray-600 font-poppins text-sm">{description}</p>
          <div className="flex items-center space-x-2">
            <span className="text-gray-800 font-poppins text-lg font-semibold">R$ {price.toFixed(2)}</span>
            {oldPrice && <span className="text-gray-500 text-sm line-through">R$ {oldPrice}</span>}
          </div>
        </div>

      
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gray-900 transition-opacity duration-300 ${
            hover ? "opacity-70" : "opacity-0"
          }`}
        >
          <button
            onClick={handleAddToCart} 
            className="bg-[#B88E2F] text-white font-poppins text-[16px] font-semibold w-[202px] h-[48px] shadow-md hover:bg-white hover:text-[#B88E2F] border border-[#B88E2F] transition"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProdutos;

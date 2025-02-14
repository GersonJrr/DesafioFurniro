import { useState } from "react";
import logo from "../../assets/logo.svg";
import pessoalogo from "../../assets/pessoaLogo.svg";
import carrinhoLogo from "../../assets/carrinhoLogo.svg";
import useMenu from "./Hooks/useMenu";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

export default function HeaderMenu() {
  const { isMenuOpen, toggleMenu } = useMenu();
  const { cart, updateQuantity, removeFromCart, isCartOpen, setCartOpen, getSubtotal } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const subtotal = getSubtotal();

  return (
    <nav className="flex bg-white py-6 font-medium px-8 lg:px-20 w-full justify-between items-center fixed top-0 left-0 z-50 font-poppins">
      <div className="flex items-center">
        <img className="w-[50px] h-[32px] mr-1" src={logo} alt="logo furniro" />
        <h1 className="text-black text-[34px] font-bold leading-normal font-montserrat">Furniro</h1>
      </div>

      <div className="hidden sm:flex lg:space-x-16 md:space-x-8 sm:space-x-6">
        <Link to="/" className="hover:text-gray-600">Home</Link>
        <Link to="/Shop" className="hover:text-gray-600">Shop</Link>
        <Link to="/About" className="hover:text-gray-600">About</Link>
        <Link to="/Contact" className="hover:text-gray-600">Contact</Link>
      </div>

      <div className="flex space-x-4 items-center">
        <a><img src={pessoalogo} alt="Profile" /></a>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          <a onClick={() => setCartOpen(!isCartOpen)}>
            <img src={carrinhoLogo} alt="Cart" className="cursor-pointer" />
          </a>

          <div
            className={`absolute w-[417px] h-auto right-0 mt-2 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 ${
              isCartOpen || isHovered ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="flex space-x-40">
              <h1 className="text-black text-2xl font-semibold">Shopping Cart</h1>
              <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/Group.svg" alt="Group" />
            </div>
            <div className="w-full h-[1px] bg-gray-300 mx-auto mb-4"></div>

            <div className="max-h-[500px] overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-gray-600 text-center">Seu carrinho está vazio</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-2 border-b">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover" />
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-sm">R$ {item.price}</p>
                      <div className="flex items-center space-x-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 border rounded">-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 border rounded">+</button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)}><img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/Vector.svg" className="mr-7" alt="remover" /></button>
                  </div>
                ))
              )}
            </div>

            <div className="flex space-x-24 mt-44">
              <div><span>Subtotal</span></div>
              <div>{subtotal}</div>
            </div>
            <div className="w-full h-[1px] bg-gray-300 mx-auto mb-4"></div>

            <div className="flex space-x-2 mt-7">
              <Link to="/cart" className="rounded-[50px] border border-black flex px-[30px] py-[6px] items-start">
                Cart
              </Link>

              <Link to="/checkout" className="rounded-[50px] border border-black flex px-[25px] py-[6px] items-start">
                Checkout
              </Link>

              <Link to="" className="rounded-[50px] border border-black flex px-[25px] py-[6px] items-start">
                Comparison
              </Link>
            </div>
          </div>
        </div>

        <button onClick={toggleMenu} className="sm:hidden">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 sm:hidden">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/Shop" className="hover:text-gray-600">Shop</Link>
          <Link to="/About" className="hover:text-gray-600">About</Link>
          <Link to="/Contact" className="hover:text-gray-600">Contact</Link>
        </div>
      )}
    </nav>
  );
}

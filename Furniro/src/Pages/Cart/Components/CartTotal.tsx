import ButtonQtd from "../../DetalhesProdutos/Components/ButtonQtd";
import { useCart } from "../../../Context/CartContext";
import { Link } from "react-router-dom";

const CartTotal = () => {
  const { cart, updateQuantity, removeFromCart, getSubtotal } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  };

  const subtotal = getSubtotal();

  return (
    <div className="w-full h-[525px] flex justify-center items-center font-poppins mb-24">
      <div className="w-[1240px] h-[390px]">
        <div className="w-[1240px] h-[55px] bg-bg-filter flex items-center justify-between px-4">
          <span>Product</span>
          <span className="ml-24">Price</span>
          <span className="ml-38">Quantity</span>
          <span className="mr-60">Subtotal</span>
        </div>

        {cart.length === 0 ? (
          <p className="text-center py-16 text-lg">Seu carrinho está vazio.</p>
        ) : (
          cart.map((produto) => (
            <div key={produto.id} className="flex items-center justify-between py-6 border-b">
              <span className="flex items-center">
                <img src={produto.image} alt={produto.name} className="w-[50px] h-[50px] mr-2" />
                {produto.name}
              </span>
              
              <span>{formatPrice(produto.price)}</span>
              
              <ButtonQtd
                width="106px"
                height="47px"
                quantidade={produto.quantity}
                onIncrement={() => updateQuantity(produto.id, produto.quantity + 1)}
                onDecrement={() => updateQuantity(produto.id, produto.quantity - 1)}
              />
              
              <span>{formatPrice(produto.price * produto.quantity)}</span> 

              <button onClick={() => removeFromCart(produto.id)}>
                <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/lixeira.svg" alt="Remover" />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="w-[393px] h-[390px] flex-shrink-0 bg-bg-filter shadow-lg p-4 ml-9 flex-col space-y-8">
        <div className="flex justify-center mt-11">
          <h1 className="text-black font-poppins text-[32px] font-semibold leading-normal">Cart Totals</h1>
        </div>
        <div className="flex space-x-10 justify-center">
          <span className="text-preto text-[16px] font-medium leading-normal">Subtotal</span>
          <span className="text-font-descr text-[16px] font-normal leading-normal">
            {subtotal}  
          </span>
        </div>
        <div className="flex space-x-10 justify-center">
          <span className="text-preto text-[16px] font-medium leading-normal">Total</span>
          <span className="text-begeButton font-poppins text-[20px] font-medium leading-normal">
            {subtotal}
          </span>
        </div>
        <div className="flex justify-center mt-40">
          <Link to="/checkout">
            <button className="w-[222px] h-[58.954px] flex-shrink-0 rounded-[15px] border border-preto text-preto text-[20px] font-normal leading-normal">
              Check out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
